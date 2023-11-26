import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

import MySkill from "./_components/skill-list";

const AboutPage = () => {
  return (
    <div className="overflow-y-auto overflow-scroll hide-scrollbar">
      <h1 className="text-3xl text-neutral-800 dark:text-neutral-300 font-medium">
        About
      </h1>

      <p className="text-muted-foreground mt-4 text-sm">
        A Little Story About Myself
      </p>

      <div className="w-full bg-slate-400 h-[1px] mt-4" />

      <p className="mt-4 text-neutral-800 dark:text-neutral-300 leading-8">
        Hi there! 👋 I'm Naufal Addhiya, a passionate front-end developer. I
        have a strong love for building beautiful and user-friendly websites
        using the latest web technologies. As a front-end beginner, I understand
        that there is always more to learn in the ever-evolving world of web
        development. I embrace challenges and view them as opportunities for
        growth. I believe in the importance of continuous learning and staying
        up-to-date with the latest trends and technologies.
      </p>

      <Button size={`lg`} className="mt-4">
        <ArrowDownToLine className="mr-2" />
        Download Resume
      </Button>

      <div className="w-full bg-slate-400 h-[1px] mt-10" />
      <MySkill />
    </div>
  );
};

export default AboutPage;
