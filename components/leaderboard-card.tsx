import { LeaderBoardItem } from "@/types/landing-page";
import Image from "next/image";
import { FC, JSX } from "react"
import { Badge } from "@/components/ui/badge";
import { Award, Medal, Trophy } from "lucide-react";

type LeaderBoardCardProps = {
    leader: LeaderBoardItem;
    leaderboard_positon: number;
}

const getBadge = (position: number): JSX.Element | null => {
    switch (position) {
        case 1:
            return <Trophy size={30} className="text-yellow-600" />
        case 2:
            return <Medal size={30} className="text-slate-400" />
        case 3:
            return <Award size={30} className="text-amber-600" />
        default:
            return null;
    }
}



export const LeaderBoardCard: FC<LeaderBoardCardProps> = ({ leader, leaderboard_positon }) => {



    return (
        <div className="max-w-md space-y-2 border p-4 rounded-xl bg-gradient-to-br from-amber-300 to-amber-400 " >
            <div className="flex justify-between items-center" >
                <div className="flex items-center gap-4 " >
                    {
                        getBadge(leaderboard_positon)
                    }

                    <Image src={leader.avatar} alt={leader.name} width={25} height={25} className="bg-muted rounded-full w-10 h-10" />

                    <div className="text-left " >
                        <h2 className="text-lg font-semibold" > {leader.name} </h2>
                        <h3 className="text-md text-neutral-600" > {leader.company} </h3>
                        <h4 className="text-sm text-neutral-500" > Class of {leader.passout} </h4>
                    </div>
                </div>

                <div className="text-right">
                    <h1 className="text-2xl font-bold"> {leader.points} </h1>
                    <h4 className="text-sm text-neutral-500" > points </h4>
                </div>


            </div>

            <div className="flex gap-2" >

                {
                    leader.badges.map((badge, idx) => <Badge key={idx} className="rounded-full bg-amber-300 border-amber-400 text-amber-800" > {badge} </Badge>)
                }

            </div>

        </div>
    )
}