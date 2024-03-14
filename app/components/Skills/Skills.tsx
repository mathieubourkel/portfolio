import { skills, skillsCat } from "@/app/services/enums/skills.cat.enum";
import CardSkill from "./CardSkill";
import "./skills.css"
export default function Skills() {
    return (
      <div className='container flex 3xl:flex-nowrap flex-wrap gap-5 justify-center py-10 2xl:py-0'>
          {skills.map((cat, index) => (
            <CardSkill  key={index} title={skillsCat[index].title} icon={skillsCat[index].icon} skills={cat}/>
          ))}
      </div>
    )
  }
  