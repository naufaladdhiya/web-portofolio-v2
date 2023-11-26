import ProjectCard from "@/components/card-project";

import { EXPERIENCE_DATA } from "@/constant/experience.data";

const ProjectPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-neutral-800 dark:text-neutral-300 font-medium">
        Projects
      </h1>

      <p className="text-muted-foreground mt-4 text-sm">
        Latest Project that i have worked on
      </p>
      <div className="w-full bg-slate-400 h-[1px] mt-4" />

      <div className="grid grid-cols-2 gap-4 my-10">
        {EXPERIENCE_DATA.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
