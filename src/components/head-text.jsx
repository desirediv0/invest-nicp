const HeadText = ({ title, title2, subtitle }) => {
    return (
        <section
            className="relative overflow-hidden py-10 px-6 sm:px-8 lg:px-12"
            aria-labelledby="page-heading"
        >

            <div className="relative max-w-7xl mx-auto text-center">
                <div className="inline-block px-4 sm:px-6 py-3 bg-white/60 ">
                    <h1
                        id="page-heading"
                        className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-3 justify-center text-center sm:text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight text-gray-900"
                        style={{ justifyContent: "center" }}
                    >
                        <span className="block leading-tight uppercase">{title}</span>
                        <span className="text-orange-500 relative block leading-tight uppercase">
                            {title2}
                            <span
                                className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-0.5 sm:h-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
                                aria-hidden="true"
                            />
                        </span>
                    </h1>
                </div>

                {subtitle && (
                    <p className="mt-4 sm:mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
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
