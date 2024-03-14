import { tags } from "@/app/services/enums/tag.cloud";
import "./about.css"
import { intTag } from "@/app/services/interfaces/tag";

export default function About() {

  const openCV = () => {
    window.open('https://drive.google.com/file/d/1sfipB6ZmkR1Ldn4D86GoeOQYXX_rT-Jq/view?usp=drive_link', '_blank');
  };
  
    return (
      <div className='container flex flex-col items-center lg:flex-row py-10 2xl:py-0'>
        <article className="flex flex-wrap items-center justify-center 3xl:justify-start lg:w-1/2 pt-10 lg:pt-0">
        <ul className="cloud w-[17rem] md:w-[25rem]" role="navigation" aria-label="Webdev word cloud">
          {tags.map((tag:intTag, index:number)=>(
            <li key={index}><a href={tag.href} data-weight={tag.weight}>{tag.name}</a></li>
          ))}
        </ul>
        </article>
          <article className='flex flex-col justify-center lg:w-1/2 pt-20 lg:pt-0'>
            <div className=''>
              <h2 className='text-accent-1 font-semibold small-caps'>About me</h2>
              <h2>Passionate by IT and Web3 friendly.</h2>
            </div>
            <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum deserunt, mollitia sed quam ut, quisquam nam ab non neque error facere, consequatur voluptatem distinctio sunt adipisci minima dignissimos deleniti libero.
            </div>
            <div className='py-10'>
            <button onClick={openCV}>Download CV</button>
            </div>
          </article>
        </div>
    )
  }
  