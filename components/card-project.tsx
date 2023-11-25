import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
};

const ProjectCard = ({ title, description, tags }: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
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
