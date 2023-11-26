import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "lucide-react";

import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
};

const ProjectCard = ({ title, description, tags }: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <GithubIcon className="cursor-pointer" size={`19`} />
        </div>
        <div className="h-[200px] relative">
          <Image
            src={`/crown.png`}
            fill
            quality={`60`}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg mt-2"
          />
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <div>{tags.join(" , ")}</div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
