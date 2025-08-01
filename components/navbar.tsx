import { GraduationCapIcon } from 'lucide-react'
import Link from 'next/link';
import { Button } from './ui/button';



type NavItems = {
    title: string;
    url: string
}

const navItems: NavItems[] = [
    {
        title: "Q&A Forum",
        url: "#"
    },
    {
        title: "Alumni Blogs",
        url: "#"
    },
    {
        title: "Mentorship",
        url: "#"
    },
    {
        title: "Leaderboard",
        url: "#"
    }
]


export const Navbar = () => {
    return (
        <nav className='bg-blue-500 w-full sticky top-0 shadow z-10' >

            <div className='flex items-center max-w-7xl mx-auto justify-between p-6 text-white' >
                {/* left logo */}
                <Link href={"#"} className='flex gap-2 items-center ' >
                    <GraduationCapIcon size={30} />
                    <h4 className='text-xl font-semibold' >Alumni Connect</h4>
                </Link>

                {/* navlinks */}
                <div className='flex gap-6 text-lg'>

                    {
                        navItems.map((navItem, index) =>
                            <Link href={navItem.url} key={index} className='hover:underline underline-offset-5 transition-all duration-300 ease-in-out' >
                                {navItem.title}
                            </Link>
                        )
                    }

                </div>

                {/* right buttons */}
                <div className='flex gap-6'>
                    <Button variant={"ghost"}className='cursor-pointer' >Login</Button>
                    <Button variant={"default"}className='cursor-pointer' >Join Us</Button>
                </div>


            </div>

        </nav >
    )
}