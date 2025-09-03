import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock Project Data
const projects = [
  {
    id: "project-one",
    title: "Project One",
    description: "Description for project one.",
    creator: {
      name: "XYZ",
      avatar: "/images/avatar.png"
    }
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "Description for project two.",
    creator: {
      name: "XYZ",
      avatar: "/images/avatar.png"
    }
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="dark">
                <div className="px-4 sm:px-4 flex items-center justify-center" style={{ perspective: "1000px" }}>
                  <div className="flex items-center justify-center relative transition-all duration-200 ease-linear inter-var" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }}>
                    <div className="sm:h-96 bg-[#131313] border-white border-solid border-[2px] relative w-full sm:w-[30rem] min-w-[23rem] h-auto min-h-[30rem] rounded-xl p-4 sm:p-6">
                      <div className="w-fit transition duration-200 ease-linear text-xl font-bold text-white">
                        {project.title}
                      </div>

                      <p className="w-fit transition duration-200 ease-linear text-neutral-300 text-sm max-w-xs sm:max-w-sm mt-2">
                        {project.description}
                      </p>

                      <div className="flex items-center mt-8">
                        <Avatar className="h-8 w-8 border-2 border-primary/20">
                          <AvatarImage src={project.creator.avatar} alt={project.creator.name} />
                          <AvatarFallback>{project.creator.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-2 text-sm text-muted-foreground">
                          {project.creator.name}
                        </div>
                      </div>

                      <Link href={`/project-${project.id}`}>
                        <div className="flex justify-center sm:justify-between items-center mt-5 sm:mt-5">
                          <Button className="transition duration-200 ease-linear px-3 py-2 rounded-xl text-white text-lg w-full bg-primary hover:bg-primary/90">
                            Learn More
                          </Button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
