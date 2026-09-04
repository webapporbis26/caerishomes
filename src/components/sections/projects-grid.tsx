import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

interface ProjectsGridProps {
  limit?: number;
  showViewAll?: boolean;
}

export function ProjectsGrid({ limit, showViewAll = false }: ProjectsGridProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-10 bg-muted/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h4 className="text-[#C8A45D] font-bold tracking-widest uppercase mb-3 text-sm">
              Portfolio
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our Projects
            </h2>
          </div>
          {showViewAll && (
            <Link 
              to="/projects"
              className="group flex items-center gap-2 text-foreground font-bold hover:text-[#C8A45D] transition-colors"
            >
              View All Projects 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/50 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/og-image.jpg" }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.name}
                </h3>
                <Link 
                  to={`/projects`} 
                  className="inline-block mt-2 text-sm font-bold text-[#C8A45D] uppercase tracking-wider hover:text-foreground transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
