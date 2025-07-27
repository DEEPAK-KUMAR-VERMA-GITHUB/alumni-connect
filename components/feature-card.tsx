import { FeatureItem } from "@/types/landing-page"
import { FC } from "react"

type FeatureCardProps = {
    feature: FeatureItem
}

export const FeatureCard: FC<FeatureCardProps> = ({ feature }) => {
    return <div className="bg-gray-100 p-8 text-center flex flex-col items-center gap-4 rounded-2xl shadow-xl "  >
        <feature.icon className="w-10 h-10 text-blue-500 " />

        <h3 className="text-xl font-bold" >{feature.title}</h3>
        <p className="text-gray-400" >{feature.description}</p>

    </div>
}