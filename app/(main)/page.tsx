import { ArrowRight } from "lucide-react";

import ProjectCard from "@/components/card-project";
import { EXPERIENCE_DATA } from "@/constant/experience.data";
import Link from "next/link";

const Homepage = () => {
  return (
    <section>
      <h1 className="text-3xl text-neutral-800 dark:text-neutral-300 font-medium">
        Hi , I&apos;m Naufal
      </h1>
      <div className="flex mt-3">
        <div className="flex justify-center items-center gap-2">
          <span className="animate-ping h-2 w-2 rounded-full bg-sky-400 opacity-75 ml-2"></span>
          <p className="text-muted-foreground">Available for hire</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span className="relative ml-5 mr-1 flex justify-center items-center rounded-full h-2 w-2 bg-neutral-400"></span>
          <p className="text-muted-foreground">Based on Solo</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="leading-8 text-neutral-800 dark:text-neutral-300 text-base">
          web developer especially in Frontend side, with a passion for creating
          pixel-perfect web experiences. I work with JavaScript and specialize
          in all-things web. I thrive on collaborating with teams to deliver
          efficient, scalable, and visually appealing web applications.
        </p>
      </div>
      <div className="w-full bg-slate-400 h-[1px] mt-4" />

      <div className="flex justify-between mt-4">
        <h1 className="text-2xl text-neutral-800 dark:text-neutral-300 font-medium">
          Latest Project
        </h1>

        <Link href={`/project`}>
          <div className="group flex justify-center cursor-pointer">
            <p className="mr-1 group-hover:-translate-x-4 transition-all duration-300">
              View all
            </p>
            <ArrowRight />
          </div>
        </Link>
      </div>

      <div className="flex gap-5 mt-10 flex-row overflow-x-auto hide-scrollbar mb-4">
        {EXPERIENCE_DATA.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Homepage;
