import { useState, useEffect } from "react"

// Hook returns itemsPerPage and a Tailwind grid class string.
// Breakpoints (Tailwind-like):
// >=1280px -> cols=4 -> itemsPerPage=16
// >=768px  -> cols=3 -> itemsPerPage=12
// >=640px  -> cols=2 -> itemsPerPage=8
// <640px   -> cols=1 -> itemsPerPage=4
export default function useResponsiveGrid() {
    const getLayout = () => {
        if (typeof window === "undefined") return { cols: 4, itemsPerPage: 16 }
        const w = window.innerWidth
        if (w >= 1280) return { cols: 4, itemsPerPage: 16 }
        if (w >= 768) return { cols: 3, itemsPerPage: 12 }
        if (w >= 640) return { cols: 2, itemsPerPage: 8 }
        return { cols: 1, itemsPerPage: 4 }
    }

    // initialize to server-default layout (avoid calling window during initial render)
    const serverDefault = { cols: 4, itemsPerPage: 16 }
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
    const gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"

    return { itemsPerPage: layout.itemsPerPage, cols: layout.cols, gridClass }
}
