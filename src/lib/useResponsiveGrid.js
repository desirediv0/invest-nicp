import { useState, useEffect } from "react"

// Hook returns itemsPerPage and a Tailwind grid class string.
// Breakpoints (Tailwind-like):
// Layout requested: one row with multiple columns
// >=1024px -> cols=8 -> itemsPerPage=8  (desktop: 8 columns in one line)
// >=768px  -> cols=5 -> itemsPerPage=5  (tablet: 5 columns in one line) 
// <768px   -> cols=3 -> itemsPerPage=3  (mobile: 3 columns in one line)
export default function useResponsiveGrid() {
    const getLayout = () => {
        // during SSR (no window) return a sensible default: 3 cols, 3 items per page
        if (typeof window === "undefined") return { cols: 3, itemsPerPage: 3 }
        const w = window.innerWidth
        if (w >= 1024) return { cols: 8, itemsPerPage: 8 }
        if (w >= 768) return { cols: 5, itemsPerPage: 5 }
        return { cols: 3, itemsPerPage: 3 }
    }

    // initialize to server-default layout (avoid calling window during initial render)
    const serverDefault = { cols: 3, itemsPerPage: 3 }
    const [layout, setLayout] = useState(serverDefault)

    useEffect(() => {
        const onResize = () => {
            const next = getLayout()
            setLayout(next)
        }

        window.addEventListener("resize", onResize)
        window.addEventListener("orientationchange", onResize)

        // update once on mount in case SSR vs client widths differ
        onResize()

        return () => {
            window.removeEventListener("resize", onResize)
            window.removeEventListener("orientationchange", onResize)
        }
    }, [])

    // grid class string that matches the intended responsive columns
    // grid: 3 cols mobile, 5 cols tablet, 8 cols desktop
    const gridClass = "grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6"

    return { itemsPerPage: layout.itemsPerPage, cols: layout.cols, gridClass }
}
