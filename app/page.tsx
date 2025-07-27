import { Button } from "@/components/ui/button";
import { features, questions } from "./data";
import { FeatureCard } from "@/components/feature-card";
import { QuestionCard } from "@/components/question-card";

export default function Home() {
  return (
    <main>

      {/* hero header section */}
      <section id="header" className="bg-gradient-to-br from-blue-500 to-violet-500 p-16 text-center" >

        <div className="max-w-7xl flex flex-col justify-center gap-8 items-center " >
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
        <div className="max-w-7xl p-20 flex flex-col gap-8 items-center text-center">

          <h3 className="text-3xl font-bold" >Everything You Need to Connect & Grow</h3>
          <h4 className="text-gray-400 font-semibold" >Our platform bridges the gap between ambitious students and successful alumni, creating meaningful connections that drive career growth.</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 " >{
            features.map((feature, idx) => <FeatureCard key={idx} feature={feature} />)
          }</div>
        </div>


        <div className="max-w-7xl p-20 flex flex-col gap-8 items-center text-center">

          <h3 className="text-3xl font-bold" >Get Answers from Industry Experts</h3>
          <h4 className="text-gray-400 font-semibold" >Ask questions, share knowledge, and learn from the experiences of successful alumni.</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 " >{
            questions.map((question, idx) => <QuestionCard key={idx} question={question} />)
          }
          </div>

          <Button variant={"default"} size={"lg"} >Ask a Question</Button>
        </div>
      </section>



    </main>
  );
}
