import { skills } from "@/constant/experience.data";

const MySkill = () => {
  return (
    <div className="mt-5">
      <div className="text-2xl text-muted-foreground text-neutral-800 dark:text-neutral-300">
        <div className="flex items-center text-lg font-medium">
          <span className="flex-shrink-0 w-2 h-2 bg-neutral-500 rounded-full mr-2"></span>
          &lt;<span className="text-sm">/</span>&gt; Skills
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-4">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className="flex flex-col items-center px-2 py-4 transition-all hover:-translate-y-2"
          >
            {skill.icon}
            <p className="mt-3 text-base text-neutral-800 dark:text-neutral-300 font-medium">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkill;
