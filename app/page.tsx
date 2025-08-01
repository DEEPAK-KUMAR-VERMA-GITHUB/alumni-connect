import { FeatureCard } from "@/components/feature-card";
import { LeaderBoardCard } from "@/components/leaderboard-card";
import { QuestionCard } from "@/components/question-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageCircleQuestion, Star, Target, Trophy, User, Users, Zap } from "lucide-react";
import { features, LeaderBoard, questions } from "./data";

export default function Home() {
  return (
    <main className="select-none">

      {/* hero header section */}
      <section id="header" className="bg-gradient-to-br from-blue-500 to-violet-500 p-16 text-center" >

        <div className="max-w-7xl mx-auto flex flex-col justify-center gap-8 items-center " >
          <h1 className="text-6xl font-bold text-white">University Alumni Connect</h1>

          <h3 className="text-white text-2xl" >Bridge the gap between current students and successful alumni. Share knowledge, find mentors, and build lasting professional connections.</h3>

          <div className="flex text-center text-white gap-8" >
            <span>
              <h2 className="text-4xl font-bold" >
                500+
              </h2>
              <h6 className="text-md">
                Alumni
              </h6>
            </span>

            <span>
              <h2 className="text-4xl font-bold" >1,200+</h2>
              <h6 className="text-md">Students</h6>
            </span>

            <span>
              <h2 className="text-4xl font-bold" >2,500+</h2>
              <h6 className="text-md">Q&A Answered</h6>
            </span>
          </div>

          <div className="flex gap-8" >
            <Button variant={"default"} size={"lg"} >Join as Alumni</Button>
            <Button variant={"outline"} size={"lg"} >Register as Student</Button>
          </div></div>

      </section>

      {/* hero main section */}

      <section id="hero-body" className="bg-gray-100" >
        {/* platform features */}
        <div className="max-w-7xl mx-auto p-10 sm:p-20 flex flex-col gap-8 items-center text-center">

          <Badge variant={"outline"} className="bg-amber-100 border-amber-200 px-3 pointer-events-none" >
            <Zap />
            Platform Features
          </Badge>


          <h3 className="text-3xl font-bold" >Everything You Need to Connect & Grow</h3>
          <h4 className="text-gray-400 font-semibold" >Our platform bridges the gap between ambitious students and successful alumni, creating meaningful connections that drive career growth.</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 " >{
            features.map((feature, idx) => <FeatureCard key={idx} feature={feature} />)
          }</div>
        </div>

        {/* q&a forum */}
        <div className="max-w-7xl mx-auto p-10 lg:p-20 flex flex-col gap-8 items-center text-center">

          <Badge variant={"outline"} className="bg-red-100 border-red-200 px-3 pointer-events-none" >
            <MessageCircleQuestion />
            Q&A Forum
          </Badge>

          <h3 className="text-3xl font-bold" >Get Answers from Industry Experts</h3>
          <h4 className="text-gray-400 font-semibold" >Ask questions, share knowledge, and learn from the experiences of successful alumni.</h4>

          <div className="flex flex-wrap xl:flex-nowrap gap-4 justify-evenly" >{
            questions.map((question, idx) => <QuestionCard key={idx} question={question} />)
          }
          </div>

          <Button variant={"default"} size={"lg"} >Ask a Question ?</Button>
        </div>

        {/* leaderboard */}
        <div className="max-w-7xl mx-auto p-10 flex flex-col gap-8 items-center text-center">
          <Badge variant={"outline"} className="bg-amber-100 border-amber-200 text-amber-400 px-3 pointer-events-none" >
            <Trophy />
            Community Recognition
          </Badge>

          <h3 className="text-3xl font-bold" >Top Contributing Alumni</h3>
          <h4 className="text-gray-400 font-semibold" >Celebrating our most active community members who make a difference.</h4>

          <div className="flex gap-2 sm:gap-4 flex-wrap justify-center " >
            {
              LeaderBoard.map((leader, idx) => <LeaderBoardCard key={idx} leader={leader} leaderboard_positon={idx + 1} />)
            }
          </div>



        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-500 to-violet-500 py-20 px-6">
        {/* join community */}

        <div className=" max-w-7xl mx-auto flex flex-col items-center gap-6 text-center text-white" >
          <h1 className="text-3xl font-bold" >Ready to Join Our Community ? </h1>
          <h4 className="text-lg" >Connect with fellow alumni, mentor current students, and build meaningful professional relationships that last a lifetime.</h4>
          <div className="flex gap-3" >
            <Button size={"lg"} >
              <Users /> Join as Alumni <ArrowRight />
            </Button>
            <Button size={"lg"} variant={"outline"} >
              <User /> I&apos;m Student
            </Button>
          </div>

          <div className="flex gap-2 sm:gap-5 justify-center">
            <span className="flex items-center gap-2 text-sm">
              <Star size={18} className="text-amber-400" />
              Free to join
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Target size={18} className="text-amber-400" /> Verified alumni
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Globe size={18} className="text-amber-400" /> Global network
            </span>
          </div>

        </div>
      </section>
    </main>
  );
}
