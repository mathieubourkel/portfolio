import { tags } from "@/app/services/enums/tag.cloud";
import "./about.css"
import { intTag } from "@/app/services/interfaces/tag";

export default function About() {

  const openCV = () => {
    window.open('https://drive.google.com/file/d/1sfipB6ZmkR1Ldn4D86GoeOQYXX_rT-Jq/view?usp=drive_link', '_blank');
  };
  
    return (
      <div className='container flex flex-col items-center lg:flex-row-reverse lg:py-10 pb-10 2xl:py-0'>
        <article className='flex flex-col justify-center lg:w-1/2 pt-20 lg:pt-0'>
            <div className=''>
              <h2 className='text-accent-1 font-semibold small-caps'>About me</h2>
              <h2 className='pb-3'>Coding enthusiast. Infrastructure and security expert. Web3 friendly.</h2>
              <h3 className='pb-3'>Embracing a philosophy of continuous self-improvement</h3>
            </div>
            <div>
            After six years of experience in various roles related to IT administration, I am now seeking to deepen my technical skills 
            and create innovative solutions in application development.
            </div>
            <div className='lg:py-10 py-5'>
            <button onClick={openCV}>Download CV</button>
            </div>
          </article>

        <article className="flex flex-wrap items-center justify-center 3xl:justify-start lg:w-1/2 pt-10 lg:pt-0">
        <ul className="cloud w-[15rem] md:w-[25rem]" role="navigation" aria-label="Webdev word cloud">
          {tags.map((tag:intTag, index:number)=>(
            <li key={index}><a href={tag.href} data-weight={tag.weight}>{tag.name}</a></li>
          ))}
        </ul>
        </article>
          
        </div>
    )
  }
  