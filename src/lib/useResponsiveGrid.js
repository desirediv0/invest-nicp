import { useState, useEffect } from "react"

// Hook returns itemsPerPage and a Tailwind grid class string.
// Breakpoints (Tailwind-like):
// Layout requested: wide row with multiple columns
// >=1024px -> cols=8 -> itemsPerPage=8  (desktop: 8 columns in a single row)
// <1024px  -> cols=4 -> itemsPerPage=4  (mobile: 4 columns in a single row)
export default function useResponsiveGrid() {
    const getLayout = () => {
        // during SSR (no window) return a sensible default: 4 cols, 4 items per page
        if (typeof window === "undefined") return { cols: 4, itemsPerPage: 4 }
        const w = window.innerWidth
        if (w >= 1024) return { cols: 8, itemsPerPage: 8 }
        return { cols: 4, itemsPerPage: 4 }
    }

    // initialize to server-default layout (avoid calling window during initial render)
    const serverDefault = { cols: 4, itemsPerPage: 4 }
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
    // grid that becomes 8 columns on large screens (lg >=1024px) and 4 columns on smaller screens
    const gridClass = "grid grid-cols-4 lg:grid-cols-8 gap-6"

    return { itemsPerPage: layout.itemsPerPage, cols: layout.cols, gridClass }
}
