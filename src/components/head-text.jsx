const HeadText = ({ title, title2, subtitle }) => {
    return (
        <div className="text-center py-8 px-4 max-w-4xl mx-auto">
            <div className="relative inline-block mb-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-2 uppercase tracking-tight">
                    {title}{" "}
                    <span className="text-blue-600 relative">
                        {title2}
                        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></span>
                    </span>
                </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                {subtitle}
            </p>

            <div className="flex justify-center items-center mt-8 space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            </div>
        </div>
    )
}

export default HeadText
