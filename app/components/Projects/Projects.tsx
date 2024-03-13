import { projects } from "@/app/services/enums/projects.enum";

export default function Projects() {
  return (
  <div className="container flex items-center py-5">
    {projects.map((project, index) => (
      <div key={index}>
        </div>
    ))}
    
    </div>
  )
}

  