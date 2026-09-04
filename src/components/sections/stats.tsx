import { Home, Clock, HeartHandshake } from "lucide-react";
import { STATS } from "@/lib/site-data";

export function Stats() {
  return (
    <section className="bg-background py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-card shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-6 md:p-10 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 border border-border/10">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4">
              <Home className="w-8 h-8 text-[#C8A45D]" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              {STATS.projectsCompleted.value}{STATS.projectsCompleted.suffix}
            </div>
            <div className="text-sm font-semibold uppercase text-muted-foreground mt-1">
              {STATS.projectsCompleted.label}
            </div>
          </div>

          <div className="hidden md:block w-px h-24 bg-border/40"></div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-[#C8A45D]" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              {STATS.yearsExperience.value}{STATS.yearsExperience.suffix}
            </div>
            <div className="text-sm font-semibold uppercase text-muted-foreground mt-1">
              {STATS.yearsExperience.label}
            </div>
          </div>

          <div className="hidden md:block w-px h-24 bg-border/40"></div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4">
              <HeartHandshake className="w-8 h-8 text-[#C8A45D]" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              {STATS.clientSatisfaction.value}{STATS.clientSatisfaction.suffix}
            </div>
            <div className="text-sm font-semibold uppercase text-muted-foreground mt-1">
              {STATS.clientSatisfaction.label}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
