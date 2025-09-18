const HeadText = ({ title, title2, subtitle }) => {
    return (
        <section
            className="relative overflow-hidden py-10 px-6 sm:px-8 lg:px-12"
            aria-labelledby="page-heading"
        >
            {/* Decorative gradient background */}
            <div className="pointer-events-none absolute inset-0 -skew-y-3 transform-gpu bg-gradient-to-br from-orange-50 via-white to-white opacity-60 lg:opacity-100" />

            <div className="relative max-w-7xl mx-auto text-center">
                <div className="inline-block px-4 sm:px-6 py-3 bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm">
                    <h1
                        id="page-heading"
                        className="whitespace-nowrap flex items-end gap-3 justify-center text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight text-gray-900"
                        style={{ justifyContent: "center" }}
                    >
                        <span className="block leading-tight uppercase">{title}</span>
                        <span className="text-orange-500 relative block leading-tight uppercase">
                            {title2}
                            <span
                                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
                                aria-hidden="true"
                            />
                        </span>
                    </h1>
                </div>

                {subtitle && (
                    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
                        {subtitle}
                    </p>
                )}

                {/* Small decorative row */}
                <div className="flex justify-center items-center mt-5 gap-3" aria-hidden="true">
                    <span className="w-2 h-2 bg-orange-500 rounded-full inline-block" />
                    <span className="w-20 h-0.5 bg-gradient-to-r from-orange-300 to-orange-100 inline-block" />
                    <span className="w-2 h-2 bg-orange-200 rounded-full inline-block" />
                </div>
            </div>
        </section>
    )
}

export default HeadText
