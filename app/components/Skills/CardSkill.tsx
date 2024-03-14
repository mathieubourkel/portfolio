import { intSkills } from '@/app/services/interfaces/skill'
import React from 'react'
import {faTerminal} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    skills: intSkills
    title: string
    icon:any
}

export default function CardSkill({skills, title, icon}:Props) {
  return (
    <div className='card-glass min-h-[15rem] min-w-[15rem] flex flex-col p-2'>
      <div className='flex items-center justify-start gap-5 pb-2 ml-3'>
      
     <div className='bg-icon'>
        <FontAwesomeIcon icon={icon} size="lg" color="rgb(223, 198, 83)" className='icon-truc max-w-5 max-h-5'/>
     </div>
      
      <h3 className='font-semibold small-caps'>{title}</h3>
      </div>
      <hr />
      
      <div className='pt-3'>
          {skills.map((skill, index) => (
            <div key={index} className='flex items-center gap-5 pl-5'>
              <FontAwesomeIcon icon={faTerminal} className='max-w-5 max-h-5' color="rgb(223, 198, 83)"/>
                  <p className='skill small-caps'>{skill.name}</p>
            </div>
              
            ))}
      </div>
    </div>
  )
}
