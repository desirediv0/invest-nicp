"use client"

import { useState, useEffect } from "react"
import useResponsiveGrid from "@/lib/useResponsiveGrid"
import { motion, AnimatePresence } from "framer-motion"
import HeadText from "./head-text"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog"
import Image from "next/image"
import {
    GiFarmTractor,
    GiProcessor,
    GiCarWheel,
    GiFactory,
    GiCarDoor,
    GiSmartphone,
    GiCommercialAirplane,
    GiMedicalPack,
    GiBanknote,
    GiMining,
    GiDna2,
    GiCardboardBox,
    GiToolbox,
    GiOilPump,
    GiChemicalDrop,
    GiMedicines,
    GiWashingMachine,
    GiCargoShip,
    GiShield,
    GiElectric,
    GiShoppingCart,
    GiSteamLocomotive,
    GiGraduateCap,
    GiHouse,
    GiCircuitry,
    GiWindTurbine,
    GiGears,
    GiShop,
    GiWallet,
    GiRoad,
    GiSoap,
    GiMicroscope,
    GiDiamondRing,
    GiHeadphones,
    GiHeartPlus,
    GiSteelClaws,
    GiModernCity,
    GiTvTower,
    GiClothes,
    GiPalmTree,
} from "react-icons/gi"

const sectorsData = [
    {
        id: "agriculture",
        name: "Agriculture & Allied Industries",
        icon: <GiFarmTractor className="w-8 h-8" />,
        image: "/modern-agriculture-farming-technology.jpg",
        description: "Agriculture and Allied Industries in India form the backbone of the rural economy, providing employment to a large portion of the population. This sector includes farming, animal husbandry, fisheries, forestry, and food processing. It benefits from vast arable land, diverse agro-climatic zones, and a strong domestic demand base. Government support through schemes like PM-KISAN, eNAM, and subsidies on inputs also drive growth in the sector.",
        majorStates: ["Punjab - Granary of India; major producer of wheat and rice; advanced mechanized farming", "Uttar Pradesh - India's largest producer of sugarcane and food grains; strong in dairy and horticulture", "Maharashtra - Leader in horticulture crops like grapes, pomegranates, and bananas; significant in cotton and sugarcane", "Andhra Pradesh - Major producer of rice, along with strong fisheries and aquaculture sectors"],
        growth: "Tech-driven transformation",
    },
    {
        id: "auto-components",
        name: "Auto Components",
        icon: <GiCarWheel className="w-8 h-8" />,
        image: "/automotive-parts-manufacturing.jpg",
        description: "The auto components industry in India is a key sector supporting the automobile industry. It produces a wide range of products like engine parts, drive transmission parts, body parts, suspension, and braking parts. The sector benefits from cost competitiveness, skilled labor, and a robust supply chain.",
        majorStates: ["Tamil Nadu - Major hub for auto components manufacturing, especially around Chennai", "Maharashtra - Home to large OEMs and component suppliers, especially in Pune", "Haryana - Gurgaon and Faridabad are major centers for components for two-wheelers and cars", "Karnataka - Growing presence of precision engineering and components companies"],
        growth: "EV components boom",
    },
    {
        id: "automobiles",
        name: "Automobiles",
        icon: <GiCarDoor className="w-8 h-8" />,
        image: "/electric-vehicles-automotive-industry.jpg",
        description: "India is one of the largest automobile markets in the world, producing two-wheelers, passenger vehicles, commercial vehicles, and electric vehicles (EVs). The sector plays a vital role in industrial growth, employment, and exports.",
        majorStates: ["Maharashtra - Major automobile production center with plants of Tata Motors, Mahindra, Bajaj, etc.", "Tamil Nadu - Known as the 'Detroit of India,' especially for cars and two-wheelers", "Haryana - Major base for Maruti Suzuki and Hero MotoCorp", "Gujarat - Rapidly growing with investments from Suzuki, Honda, and Tata"],
        growth: "Electric mobility shift",
    },
    {
        id: "aviation",
        name: "Aviation",
        icon: <GiCommercialAirplane className="w-8 h-8" />,
        image: "/placeholder-p7bu8.png",
        description: "The Indian aviation sector includes domestic and international air travel, cargo services, and aircraft maintenance. It has seen rapid growth due to rising middle-class incomes and government support through the UDAN scheme (regional connectivity).",
        majorStates: ["Delhi (NCR) - Home to Indira Gandhi International Airport, a major aviation hub", "Maharashtra - Mumbai has one of the busiest airports; also a center for MRO", "Karnataka - Bengaluru is a key aviation and aerospace hub with R&D and MRO facilities", "Telangana - Hyderabad has a strong aviation training and manufacturing base"],
        growth: "Infrastructure expansion",
    },
    {
        id: "banking",
        name: "Banking",
        icon: <GiBanknote className="w-8 h-8" />,
        image: "/placeholder-um8j5.png",
        description: "The banking sector in India comprises public sector banks, private sector banks, regional rural banks, and cooperative banks. It plays a crucial role in financial inclusion, economic growth, and credit distribution across sectors.",
        majorStates: ["Maharashtra - Mumbai is the financial capital, housing RBI and major banks' headquarters", "Tamil Nadu - Chennai is a key hub for banking and financial services", "Delhi (NCR) - Important for regulatory institutions and bank offices", "Karnataka - Bengaluru is emerging as a fintech and digital banking center"],
        growth: "Digital transformation",
    },
    {
        id: "biotechnology",
        name: "Biotechnology",
        icon: <GiDna2 className="w-8 h-8" />,
        image: "/placeholder-d5d7i.png",
        description: "India's biotechnology sector is rapidly growing, driven by healthcare, agriculture, industrial biotechnology, and bio-services. It plays a vital role in pharmaceuticals, vaccines, bio-agriculture, and genetic research. India is one of the top biotech destinations in Asia.",
        majorStates: ["Karnataka - Bengaluru is known as the Biotech Capital of India", "Telangana - Hyderabad has a strong presence of biotech parks and life sciences companies", "Maharashtra - Pune and Mumbai are centers for biopharma and research institutions", "Tamil Nadu - Focused on biotechnology research and education"],
        growth: "22% CAGR projected",
    },
    {
        id: "cement",
        name: "Cement",
        icon: <GiToolbox className="w-8 h-8" />,
        image: "/placeholder-ry4sz.png",
        description: "India is the second-largest producer of cement globally. The industry is crucial for infrastructure and real estate development. It includes major players like UltraTech, ACC, Ambuja, and regional producers.",
        majorStates: ["Andhra Pradesh - Rich in limestone, a key raw material for cement", "Rajasthan - Major cement-producing state with large reserves", "Madhya Pradesh - Significant cement production due to limestone availability", "Tamil Nadu - Large production capacity and port-based export facilities"],
        growth: "Infrastructure boom",
    },
    {
        id: "chemicals",
        name: "Chemicals",
        icon: <GiChemicalDrop className="w-8 h-8" />,
        image: "/placeholder-7rk3i.png",
        description: "The Indian chemical industry spans basic chemicals, petrochemicals, fertilizers, paints, dyes, and specialty chemicals. It supports agriculture, textiles, construction, and consumer goods sectors.",
        majorStates: ["Gujarat - Leading state with major chemical and petrochemical complexes", "Maharashtra - Strong base for chemical industries, especially around Mumbai and Pune", "Tamil Nadu - Involved in specialty and agro-chemicals", "Andhra Pradesh - Fast-growing with focus on bulk and specialty chemicals"],
        growth: "Green chemistry focus",
    },
    {
        id: "consumer-durables",
        name: "Consumer Durables",
        icon: <GiWashingMachine className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "This sector includes household appliances and electronics like TVs, refrigerators, ACs, washing machines, etc. Growth is driven by rising incomes, urbanization, and digital penetration.",
        majorStates: ["Uttar Pradesh - Noida is a major manufacturing and assembly hub", "Tamil Nadu - Chennai is a key hub for electronics and white goods", "Maharashtra - Significant consumption market and distribution center", "Andhra Pradesh - Rapidly emerging electronics manufacturing clusters"],
        growth: "Smart home revolution",
    },
    {
        id: "defence-manufacturing",
        name: "Defence Manufacturing",
        icon: <GiShield className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India is focusing on indigenization of defence production under the 'Make in India' and 'Atmanirbhar Bharat' initiatives. It includes production of arms, ammunition, aircraft, warships, and defence electronics.",
        majorStates: ["Maharashtra - Major ordnance factories and private sector involvement", "Tamil Nadu - Defence corridor with strong focus on aerospace and electronics", "Uttar Pradesh - UP Defence Industrial Corridor under development", "Telangana - Hyderabad is a hub for missile and aerospace systems (DRDO, Bharat Dynamics)"],
        growth: "Self-reliance push",
    },
    {
        id: "e-commerce",
        name: "E-Commerce",
        icon: <GiShoppingCart className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India's e-commerce industry is one of the fastest-growing globally, driven by smartphone usage, internet penetration, digital payments, and a rising middle class. It includes retail, groceries, fashion, electronics, and B2B marketplaces.",
        majorStates: ["Karnataka - Bengaluru is the hub for major e-commerce companies like Flipkart, Myntra, and BigBasket", "Delhi (NCR) - Major logistical and consumer base, key for last-mile delivery", "Maharashtra - Mumbai is a financial and commercial center for e-commerce firms", "Telangana - Hyderabad has growing tech parks and warehousing infrastructure"],
        growth: "AI personalization",
    },
    {
        id: "education-training",
        name: "Education & Training",
        icon: <GiGraduateCap className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India's education sector spans primary to higher education, vocational training, and EdTech. It's supported by a young population, digital adoption, and initiatives like NEP 2020 and Skill India.",
        majorStates: ["Karnataka - Bengaluru is a major education and EdTech hub (Byju's, Vedantu)", "Maharashtra - Pune is known as the 'Oxford of the East' for its educational institutions", "Tamil Nadu - High literacy rates and strong engineering and medical colleges", "Delhi (NCR) - Host to major universities, coaching hubs, and government institutes"],
        growth: "EdTech revolution",
    },
    {
        id: "esdm",
        name: "Electronic System Design & Manufacturing",
        icon: <GiCircuitry className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "The ESDM sector includes design, prototyping, and manufacturing of electronics such as semiconductors, mobile phones, LED lighting, and consumer electronics. Supported by Make in India and PLI schemes.",
        majorStates: ["Uttar Pradesh - Noida is an emerging electronics manufacturing cluster", "Tamil Nadu - Chennai and Sriperumbudur are key ESDM hubs", "Karnataka - Bengaluru leads in electronic design and semiconductor R&D", "Andhra Pradesh - Rapid development of electronics manufacturing parks"],
        growth: "Semiconductor focus",
    },
    {
        id: "engineering-capital-goods",
        name: "Engineering & Capital Goods",
        icon: <GiGears className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "This sector includes heavy machinery, industrial equipment, and infrastructure components. It is critical for power, construction, mining, and transport industries.",
        majorStates: ["Maharashtra - Strong base in engineering goods and industrial clusters", "Tamil Nadu - Large presence of auto ancillaries and machinery manufacturing", "Gujarat - Known for industrial machinery, especially around Ahmedabad and Vadodara", "Punjab - Noted for small-scale engineering and agricultural machinery"],
        growth: "Smart manufacturing",
    },
    {
        id: "financial-services",
        name: "Financial Services",
        icon: <GiWallet className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India's financial services sector includes banking, insurance, NBFCs, stock markets, asset management, and fintech. It underpins economic development and financial inclusion.",
        majorStates: ["Maharashtra - Mumbai is the financial capital of India, housing RBI, SEBI, and major banks", "Delhi (NCR) - Important for policy-making, insurance HQs, and financial institutions", "Karnataka - Bengaluru is a leading fintech innovation hub", "Tamil Nadu - Chennai has a strong presence of banks, NBFCs, and back-office operations"],
        growth: "AI-driven services",
    },
    {
        id: "fmcg",
        name: "FMCG",
        icon: <GiSoap className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "FMCG includes products such as food, beverages, personal care, and household goods. It's one of the largest sectors in India, driven by rural demand, population growth, and retail expansion.",
        majorStates: ["Uttar Pradesh - Largest consumer base and rural market for FMCG", "Maharashtra - Key distribution and logistics hub; large urban consumption", "Tamil Nadu - High urbanization and retail penetration", "West Bengal - Dense population and growing demand in eastern India"],
        growth: "Sustainable packaging",
    },
    {
        id: "gems-jewellery",
        name: "Gems & Jewellery",
        icon: <GiDiamondRing className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India is one of the largest exporters of gems and jewellery, including diamonds, gold, and handcrafted ornaments. The sector is labor-intensive and contributes significantly to employment and foreign exchange earnings.",
        majorStates: ["Gujarat - Surat is the global hub for diamond cutting and polishing", "Maharashtra - Mumbai is the major export hub for gold and diamond jewellery", "Rajasthan - Known for colored gemstones and traditional jewellery", "Tamil Nadu - Chennai is a key market for gold jewellery consumption"],
        growth: "Ethical sourcing focus",
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: <GiHeartPlus className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India's healthcare sector includes hospitals, diagnostics, medical devices, pharmaceuticals, and telemedicine. It is supported by both public and private players, and has become a hub for medical tourism.",
        majorStates: ["Tamil Nadu - Chennai is a leading center for medical tourism and advanced healthcare", "Maharashtra - Mumbai and Pune have top-tier hospitals and research centers", "Karnataka - Bengaluru has strong health tech and private hospital chains", "Delhi (NCR) - Major center for super-specialty hospitals and diagnostics"],
        growth: "AI diagnostics revolution",
    },
    {
        id: "infrastructure",
        name: "Infrastructure",
        icon: <GiModernCity className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "The infrastructure sector includes roads, railways, ports, airports, power, and urban development. It is vital for economic growth and employment and is driven by government schemes like PM Gati Shakti and Smart Cities Mission.",
        majorStates: ["Maharashtra - Extensive road, metro, and port infrastructure (Mumbai, JNPT)", "Gujarat - Leading in industrial corridors and port-led development", "Uttar Pradesh - Major expressways, airports (Jewar), and urban expansion", "Tamil Nadu - Strong port, airport, and industrial zone development"],
        growth: "$1.4 trillion pipeline",
    },
    {
        id: "insurance",
        name: "Insurance",
        icon: <GiShield className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India's insurance industry includes life and general insurance, reinsurance, and health insurance. It supports financial stability, risk coverage, and long-term savings. Growth is driven by increasing awareness and digital distribution.",
        majorStates: ["Maharashtra - Mumbai is the headquarters of IRDAI, LIC, and several private insurers", "Delhi (NCR) - Regional base for many insurers and brokers", "Tamil Nadu - Chennai is an important center for insurance operations", "Karnataka - Bengaluru is emerging in insurance tech and customer services"],
        growth: "Digital transformation",
    },
    {
        id: "it-bpm",
        name: "IT & BPM",
        icon: <GiProcessor className="w-8 h-8" />,
        image: "/it-technology-data-center-servers.jpg",
        description: "India is a global leader in IT services, software development, and BPM. The sector drives exports, innovation, and employment, especially in urban and Tier-2 cities.",
        majorStates: ["Karnataka - Bengaluru is the Silicon Valley of India", "Maharashtra - Pune and Mumbai have major IT parks and corporate offices", "Telangana - Hyderabad is a growing IT and BPM hub", "Tamil Nadu - Chennai has strong presence in IT services and BPOs"],
        growth: "AI & Cloud dominance",
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        icon: <GiFactory className="w-8 h-8" />,
        image: "/modern-manufacturing-factory-automation.jpg",
        description: "Manufacturing is a key pillar of India's economy, covering sectors like textiles, auto, steel, cement, electronics, and consumer goods. Driven by initiatives like Make in India and PLI schemes.",
        majorStates: ["Maharashtra - Strong base in auto, electronics, and engineering", "Tamil Nadu - Leading in textiles, auto components, and electronics", "Gujarat - Major hub for chemicals, textiles, and heavy industries", "Uttar Pradesh - Rapidly emerging through industrial corridors and MSMEs"],
        growth: "Industry 4.0 adoption",
    },
    {
        id: "media-entertainment",
        name: "Media & Entertainment",
        icon: <GiSmartphone className="w-8 h-8" />,
        image: "/digital-media-streaming-entertainment.jpg",
        description: "India's media and entertainment industry includes TV, films, digital content, OTT platforms, radio, print, and animation. It is one of the largest in the world by audience size and content production.",
        majorStates: ["Maharashtra - Mumbai is the entertainment capital (Bollywood, TV, OTT)", "Telangana - Hyderabad is a major film production and dubbing hub (Tollywood)", "Tamil Nadu - Chennai leads in regional cinema (Kollywood) and digital media", "Karnataka - Bengaluru has growing animation, gaming, and media tech sectors"],
        growth: "OTT & Digital content",
    },
    {
        id: "medical-devices",
        name: "Medical Devices",
        icon: <GiMedicalPack className="w-8 h-8" />,
        image: "/placeholder-68qj6.png",
        description: "India's medical devices sector includes diagnostics, surgical instruments, imaging equipment, and consumables. It is growing rapidly due to rising healthcare needs and government push for self-reliance through PLI schemes.",
        majorStates: ["Maharashtra - Pune and Mumbai have a strong presence of manufacturing and R&D", "Gujarat - Key player in surgical equipment and diagnostics manufacturing", "Tamil Nadu - Chennai is emerging as a medical devices hub", "Andhra Pradesh - Visakhapatnam MedTech Zone (AMTZ) is a major medical device park"],
        growth: "Self-sufficiency focus",
    },
    {
        id: "metals-mining",
        name: "Metals & Mining",
        icon: <GiMining className="w-8 h-8" />,
        image: "/placeholder-x79x8.png",
        description: "India has rich mineral resources and is among the top producers of coal, iron ore, bauxite, and steel. The sector is vital for infrastructure and industrial development.",
        majorStates: ["Odisha - Leading in iron ore, bauxite, and coal production", "Chhattisgarh - Rich in coal and iron ore; key for steel industry", "Jharkhand - Major mining state for coal, mica, and iron ore", "Rajasthan - Known for zinc, copper, and limestone mining"],
        growth: "Sustainable practices",
    },
    {
        id: "msme",
        name: "MSME",
        icon: <GiCardboardBox className="w-8 h-8" />,
        image: "/placeholder-0o2sd.png",
        description: "MSMEs form the backbone of India's economy, contributing to manufacturing, exports, and employment. They operate across diverse sectors like textiles, engineering, food processing, and handicrafts.",
        majorStates: ["Tamil Nadu - Strong MSME base in textiles, leather, and auto components", "Maharashtra - Large number of SMEs in manufacturing and services", "Uttar Pradesh - Major hubs for handicrafts, leather, and food processing", "Gujarat - Known for engineering, chemicals, and textiles MSMEs"],
        growth: "Digital empowerment",
    },
    {
        id: "oil-gas",
        name: "Oil & Gas",
        icon: <GiOilPump className="w-8 h-8" />,
        image: "/placeholder-6lha9.png",
        description: "The oil & gas sector includes exploration, refining, distribution, and marketing of petroleum products and natural gas. It is crucial for energy security and industrial development.",
        majorStates: ["Gujarat - Key refining and LNG terminals (e.g., Jamnagar, Hazira)", "Maharashtra - Mumbai High offshore fields and major refineries", "Andhra Pradesh - Krishna-Godavari basin is rich in natural gas", "Assam - One of the oldest oil-producing regions in India"],
        growth: "Energy diversification",
    },
    {
        id: "pharmaceuticals",
        name: "Pharmaceuticals",
        icon: <GiMedicines className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India is the world's largest supplier of generic medicines and vaccines. The sector includes bulk drugs, formulations, biotechnology, and R&D. It's supported by strong manufacturing and skilled workforce.",
        majorStates: ["Telangana - Hyderabad is called the 'Bulk Drug Capital of India'", "Maharashtra - Mumbai and Pune are major pharma hubs", "Gujarat - Known for formulations and contract manufacturing", "Himachal Pradesh - Baddi is a major pharmaceutical manufacturing zone"],
        growth: "Global supply hub",
    },
    {
        id: "ports",
        name: "Ports",
        icon: <GiCargoShip className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India has 12 major and over 200 non-major ports. Ports play a vital role in international trade, especially for petroleum, coal, and container cargo. Development is supported by Sagarmala and PM Gati Shakti.",
        majorStates: ["Gujarat - Kandla and Mundra are key ports", "Maharashtra - Jawaharlal Nehru Port (JNPT) is the largest container port", "Tamil Nadu - Chennai and Ennore are major ports", "Andhra Pradesh - Visakhapatnam is a leading cargo-handling port"],
        growth: "Digital integration",
    },
    {
        id: "power",
        name: "Power",
        icon: <GiElectric className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India's power sector includes generation (thermal, hydro, nuclear, and renewables), transmission, and distribution. It is essential for industrial and economic growth.",
        majorStates: ["Maharashtra - High power demand and significant installed capacity", "Gujarat - Strong in renewables and thermal power", "Tamil Nadu - Leader in wind energy generation", "Uttar Pradesh - High consumption and government investments in distribution"],
        growth: "Renewable dominance",
    },
    {
        id: "railways",
        name: "Railways",
        icon: <GiSteamLocomotive className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "Indian Railways is one of the largest rail networks in the world. It supports passenger and freight movement, playing a crucial role in national integration and economic development.",
        majorStates: ["Delhi (NCR) - Headquarters of Indian Railways; central command", "Uttar Pradesh - Major railway junctions and connectivity", "West Bengal - Kolkata is home to major railway divisions", "Maharashtra - Mumbai has the busiest suburban rail network in India"],
        growth: "High-speed modernization",
    },
    {
        id: "real-estate",
        name: "Real Estate",
        icon: <GiHouse className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "The real estate sector includes residential, commercial, retail, and industrial properties. It is driven by urbanization, infrastructure development, and demand for housing. RERA has brought more transparency to the sector.",
        majorStates: ["Maharashtra - Mumbai, Pune are key real estate markets", "Karnataka - Bengaluru is a major hub for IT-led real estate", "Delhi (NCR) - One of the largest residential and commercial markets", "Tamil Nadu - Chennai has a strong mix of residential and commercial projects"],
        growth: "Smart cities focus",
    },
    {
        id: "renewable-energy",
        name: "Renewable Energy",
        icon: <GiWindTurbine className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India is one of the world's largest producers of renewable energy, with major focus on solar, wind, hydro, and bioenergy. It supports sustainable growth and energy security, backed by policies like the National Solar Mission and Green Energy Corridor.",
        majorStates: ["Rajasthan - Leading in solar energy generation due to vast desert land", "Tamil Nadu - Top producer of wind energy", "Gujarat - Significant solar and wind energy investments", "Karnataka - Among top states in total renewable energy capacity"],
        growth: "500 GW target by 2030",
    },
    {
        id: "retail",
        name: "Retail",
        icon: <GiShop className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India's retail sector includes organized and unorganized markets, covering food, fashion, electronics, and lifestyle products. Growth is driven by rising incomes, urbanization, and digital commerce.",
        majorStates: ["Maharashtra - Mumbai is a major retail and fashion market", "Delhi (NCR) - Strong base for malls and high-end retail", "Karnataka - Bengaluru leads in modern and digital retail formats", "Tamil Nadu - High consumption and organized retail penetration in cities"],
        growth: "Omni-channel growth",
    },
    {
        id: "roads",
        name: "Roads",
        icon: <GiRoad className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India has the second-largest road network in the world. Roads are vital for connectivity, logistics, and economic development. Key initiatives include Bharatmala and National Highways Development Project (NHDP).",
        majorStates: ["Uttar Pradesh - Extensive expressway development (Yamuna, Purvanchal, etc.)", "Maharashtra - Strong road network supporting industrial regions", "Tamil Nadu - Dense road connectivity and NH links", "Gujarat - Well-developed state highways and industrial corridors"],
        growth: "Digital traffic systems",
    },
    {
        id: "science-technology",
        name: "Science & Technology",
        icon: <GiMicroscope className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India has a robust base in science and technology, contributing to sectors like space, defense, pharmaceuticals, IT, and biotechnology. Institutions like ISRO, DRDO, and CSIR drive innovation and research.",
        majorStates: ["Karnataka - Bengaluru is the S&T capital with ISRO, HAL, DRDO labs", "Telangana - Hyderabad leads in pharma R&D and science parks", "Maharashtra - Pune and Mumbai host top research institutes (IIT-B, BARC)", "Tamil Nadu - Strong engineering and science education ecosystem"],
        growth: "Global tech leadership",
    },
    {
        id: "services",
        name: "Services",
        icon: <GiHeadphones className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "The services sector is the largest contributor to India's GDP. It includes IT, finance, education, tourism, healthcare, logistics, and other professional services.",
        majorStates: ["Karnataka - Dominated by IT and knowledge services in Bengaluru", "Maharashtra - Strong base in finance, media, and legal services", "Delhi (NCR) - Hub for consulting, policy, and government-linked services", "Tamil Nadu - Growing IT, education, and tourism-related services"],
        growth: "Digital services boom",
    },
    {
        id: "steel",
        name: "Steel",
        icon: <GiSteelClaws className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India is the second-largest producer of crude steel globally. The sector is critical for infrastructure, construction, automotive, and machinery. It includes both integrated steel plants and mini-mills.",
        majorStates: ["Jharkhand - Major steel production via SAIL (Bokaro) and Tata Steel", "Odisha - Home to large steel plants and rich in iron ore", "Chhattisgarh - Bhilai Steel Plant is a major contributor", "Maharashtra - Secondary steel manufacturing and processing"],
        growth: "Advanced production",
    },
    {
        id: "telecommunications",
        name: "Telecommunications",
        icon: <GiTvTower className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India has one of the largest telecom markets globally. The sector includes mobile services, broadband, satellite, and telecom equipment manufacturing. 5G rollout and rural connectivity are current focus areas.",
        majorStates: ["Maharashtra - Mumbai is a telecom operations and HQ base", "Karnataka - Bengaluru is a tech base for telecom R&D", "Delhi (NCR) - Center for telecom policy, TRAI, and major service providers", "Tamil Nadu - Strong network and manufacturing of telecom components"],
        growth: "5G revolution",
    },
    {
        id: "textiles",
        name: "Textiles",
        icon: <GiClothes className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "The textile industry is one of India's oldest and largest sectors, covering cotton, silk, wool, jute, and synthetic fibers. It includes spinning, weaving, garments, and exports, and is a major source of employment and foreign exchange.",
        majorStates: ["Tamil Nadu - Coimbatore and Tiruppur are major centers for textiles and knitwear", "Gujarat - Key state for cotton, denim, and textile processing", "Maharashtra - Mumbai and Nagpur have strong spinning and garment industries", "West Bengal - Known for jute textiles and handlooms", "Punjab - Ludhiana is famous for woolen and hosiery products"],
        growth: "Sustainable fashion",
    },
    {
        id: "tourism-hospitality",
        name: "Tourism & Hospitality",
        icon: <GiPalmTree className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "India's tourism and hospitality sector includes leisure, medical, spiritual, and heritage tourism. It supports hotels, restaurants, transport, and cultural experiences. The sector is key for employment and regional development.",
        majorStates: ["Rajasthan - Famous for heritage and cultural tourism", "Uttar Pradesh - Home to iconic sites like the Taj Mahal and religious tourism in Varanasi, Ayodhya", "Kerala - Known for wellness, backwaters, and eco-tourism", "Goa - Major destination for beach and international tourism", "Maharashtra - Mumbai and other regions attract business and film tourism"],
        growth: "Experience economy",
    },
]

const InvestmentSectors = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [selectedSector, setSelectedSector] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // Custom responsive logic: 3 -> 5 -> 8 items per page
    const getResponsiveItemsPerPage = () => {
        if (typeof window === "undefined") return 3
        const w = window.innerWidth
        if (w >= 1280) return 8  // xl screens
        if (w >= 768) return 5   // md screens  
        return 3                 // sm screens
    }

    const [itemsPerPage, setItemsPerPage] = useState(3)
    const totalPages = Math.ceil(sectorsData.length / itemsPerPage)

    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(getResponsiveItemsPerPage())
        }

        updateItemsPerPage()
        window.addEventListener('resize', updateItemsPerPage)
        return () => window.removeEventListener('resize', updateItemsPerPage)
    }, [])

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages)
            setSelectedSector(null)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, totalPages])

    // Reset page when itemsPerPage changes (prevents out-of-range pages)
    useEffect(() => {
        setCurrentPage(0)
    }, [itemsPerPage])

    const getCurrentPageSectors = () => {
        const startIndex = currentPage * itemsPerPage
        return sectorsData.slice(startIndex, startIndex + itemsPerPage)
    }

    const handleSectorClick = (sectorId) => {
        const newSel = selectedSector === sectorId ? null : sectorId
        setSelectedSector(newSel)
        setIsDialogOpen(newSel !== null)
        // pause autoplay when dialog opens, resume when it closes
        setIsAutoPlaying(newSel === null)
    }

    return (
        <div className="min-h-screen bg-white py-4 px-4">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <HeadText
                    title={"Choose Your"}
                    title2={"Investment Sector"}
                    subtitle={"Explore India\'s most promising sectors with comprehensive data on growth opportunities, major markets, and investment potential tailored to your strategic goals."}
                />
            </div>

            {/* Main Grid Container */}
            <div
                className="max-w-7xl mx-auto"
                onMouseEnter={() => {
                    // Only pause autoplay on hover if dialog is not open
                    if (!isDialogOpen) {
                        setIsAutoPlaying(false)
                    }
                }}
                onMouseLeave={() => {
                    // Only resume autoplay on mouse leave if dialog is not open
                    if (!isDialogOpen) {
                        setIsAutoPlaying(true)
                    }
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="flex gap-3"
                    >
                        {getCurrentPageSectors().map((sector, index) => (
                            <motion.div
                                key={sector.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group cursor-pointer flex-1"
                                onClick={() => handleSectorClick(sector.id)}
                            >
                                <div className="bg-white border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden flex flex-col items-center justify-center p-4 text-center cursor-pointer h-32">
                                    <div className="w-12 h-12 bg-white/90 flex items-center justify-center text-orange-500 transition-all duration-300 border rounded-full mb-2">
                                        {sector.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-900 leading-tight line-clamp-2">{sector.name}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 transition-all duration-300 ${currentPage === index ? "bg-orange-500 scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            onClick={() => {
                                setCurrentPage(index)
                                setSelectedSector(null)
                            }}
                        />
                    ))}
                </div>

                {/* Page Counter */}
                <div className="text-center mt-6">
                    <span className="text-sm text-gray-500">
                        Page {currentPage + 1} of {totalPages} • {sectorsData.length} Investment Sectors
                    </span>
                </div>

                {/* Sector Details Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open)
                    if (!open) {
                        // dialog closed - clear selection and resume autoplay
                        setSelectedSector(null)
                        setIsAutoPlaying(true)
                    } else {
                        // dialog opened - pause autoplay
                        setIsAutoPlaying(false)
                    }
                }}>
                    <DialogContent>
                        <DialogTitle>{sectorsData.find(s => s.id === selectedSector)?.name}</DialogTitle>
                        <DialogDescription>
                            <div className="mt-4 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="w-full h-56 bg-gray-100 overflow-hidden relative">
                                        {sectorsData.find(s => s.id === selectedSector)?.image ? (
                                            <Image
                                                src={sectorsData.find(s => s.id === selectedSector)?.image}
                                                alt={sectorsData.find(s => s.id === selectedSector)?.name || ""}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <Image src="/placeholder.svg" alt="placeholder" fill className="object-contain p-4" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700 mb-4">{sectorsData.find(s => s.id === selectedSector)?.description}</p>
                                        <div className="text-sm">
                                            <span className="font-semibold">Growth:</span> <span className="text-green-600">{sectorsData.find(s => s.id === selectedSector)?.growth}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Major States Section */}
                                {sectorsData.find(s => s.id === selectedSector)?.majorStates && (
                                    <div>
                                        <h4 className="font-semibold text-lg mb-3 text-gray-800">Major States</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {sectorsData.find(s => s.id === selectedSector)?.majorStates.map((state, index) => (
                                                <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-4 border-orange-500">
                                                    <p className="text-sm text-gray-700">{state}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </DialogDescription>
                        <div className="mt-6 text-right">
                            <DialogClose className="text-sm text-gray-600">Close</DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default InvestmentSectors
