import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GigaLab",
    description:
      "RDT Reader is a comprehensive platform for rapid diagnostic test analysis that combines AI-powered image recognition with real-time health monitoring. The application supports offline functionality, multilingual interfaces, and provides tools for both individual users and health authorities.",
    image: "/image/image1.png",
    tags: ["React", "Nextjs", "TailwindCSS", "Nodejs", "Expressjs"],
    demoUrl: "#",
    githubUrl: "https://github.com/Elaalyahmed/GigalabAP",
  },
  {
    id: 2,
    title: "Image Filter App",
    description:
      "This project is a simple and elegant Image Filter App built using HTML, CSS, and vanilla JavaScript,It allows users to upload an image, then apply various filters like grayscale, blur, brightness, contrast, and more — all in real time.",
    image: "/image/image3.png",
    tags: ["html", "css", "javascript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Elaalyahmed/Fillter_image",
  },
  {
    id: 3,
    title: "This mini project focuses on the iPhone 13 Pro",
    description:
      " The project aims to showcase the design, performance, and innovative technologies that make the iPhone 13 Pro stand out in the smartphone market.",
    image: "/image/image4.png",
    tags: ["Html", "Css", "Javascript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Elaalyahmed/ProjectIphone",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe (X-O) game",
    description:
      "The game is displayed on a 3x3 grid. Currently, the 'X' symbol is present in yellow in the first square of the first row, the third square of the first row, and the first square of the second row. The 'O' symbol is in white in the second square of the first row, the second square of the second row, and the second square of the third row. The third square of the second row is highlighted in green. Above the grid, there's an orange bar with winner... written in white, followed by a smiling emoji, ",
    image: "/image/image2.png",
    tags: ["TailwindCSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Elaalyahmed/Game-X-O",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Elaalyahmed"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
