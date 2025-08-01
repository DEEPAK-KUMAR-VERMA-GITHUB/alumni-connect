import { Users } from "lucide-react"
import Link from "next/link"
import { FC } from "react"

export const Footer: FC = () => {
    return (
        <footer className="w-full bg-blue-950 text-white px-6 py-10 space-y-6 " >
            <div className="grid sm:grid-cols-4 gap-6" >
                <div className="space-y-2" >
                    <div className="flex gap-2 items-center text-lg font-bold" ><Users size={30} className="bg-amber-400 p-1 rounded-md text-black" /> Alumni Connect </div>
                    <p className="text-slate-200">Bridging the gap between studetns and alumni for a brighter future.</p>
                </div>
                <div className="space-y-2" >
                    <h3 className="text-md font-semibold" >Platform</h3>
                    <ul className="list-none space-y-2 text-slate-200" >
                        <li><Link href="#" >Q&A Forum</Link></li>
                        <li><Link href="#" >Alumni Blogs</Link></li>
                        <li><Link href="#" >Mentorship</Link></li>
                        <li><Link href="#" >Resources</Link></li>
                    </ul>
                </div>
                <div className="space-y-2" >
                    <h3 className="text-md font-semibold" >Community</h3>
                    <ul className="list-none space-y-2 text-slate-200" >
                        <li><Link href="#" >Leaderboard</Link></li>
                        <li><Link href="#" >Events</Link></li>
                        <li><Link href="#" >Success Stories</Link></li>
                        <li><Link href="#" >Guidelines</Link></li>
                    </ul>
                </div>
                <div className="space-y-2" >
                    <h3 className="text-md font-semibold" >Platform</h3>
                    <ul className="list-none space-y-2 text-slate-200" >
                        <li><Link href="#" >Help Center</Link></li>
                        <li><Link href="#" >Contact Us</Link></li>
                        <li><Link href="#" >Privacy Policy</Link></li>
                        <li><Link href="#" >Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div className="w-full h-0.5 bg-slate-700" />

            <p className="text-center text-slate-500" > &copy; {new Date().getFullYear()} University Alumni Connect. All right reserved. </p>

        </footer>
    )
}