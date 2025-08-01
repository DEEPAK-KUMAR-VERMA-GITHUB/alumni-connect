import { QACardItem } from "@/types/landing-page"
import Image from "next/image"
import { FC } from "react"
import { ThumbsUp, MessageCircle } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

type QuestionCardProps = {
    question: QACardItem
}

export const QuestionCard: FC<QuestionCardProps> = ({ question }) => {

    return (
        <div className="w-sm bg-gray-100 border hover:shadow-xl shadow-blue-100 transition-all hover:-translate-y-0.5 ease-in-out duration-500 rounded-2xl p-6 flex flex-col gap-4" >
            <div className=" flex items-center gap-6 " >
                <Image src={question.avatar} width={40} height={40} alt={question.name} className="rounded-full" />
                <div className="flex flex-col text-start " >
                    <h4 className="text-lg font-semibold" >{question.name}</h4>
                    <h5 className="text-gray-400 text-sm" >{question.post}</h5>
                </div>
            </div>
            <h3 className="text-md font-semibold text-start" > {question.question} </h3>

            <div className="flex gap-2" >{
                question.tags.map((tag, idx) =>
                    <Badge key={idx} variant={"outline"} className="bg-neutral-200 border-neutral-300" >{tag} </Badge>
                )
            }</div>

            <div className="flex items-center justify-between" >
                <span className="flex gap-2 items-center text-gray-400 text-sm " >
                    <ThumbsUp size={18} /> {question.likes} Likes
                </span>
                <span className="flex gap-2 items-center text-gray-400 text-sm ">
                    <MessageCircle size={18} /> {question.answers} Answers
                </span>
            </div>
        </div>
    )

}