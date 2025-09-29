"use client"


export default function PageHero({

    backgroundImage = "/assets/banner1.jpg"
}) {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-96 flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Orange Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-orange-600/20"></div>




            {/* Bottom Orange Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"></div>
        </div>
    )
}