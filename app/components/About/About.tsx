import { tags } from "@/app/services/enums/tag.cloud";
import "./about.css"
import { intTag } from "@/app/services/interfaces/tag";

export default function About() {
    return (
      <div className='container flex flex-col items-center lg:flex-row py-10 2xl:py-0'>
        <article className="flex flex-wrap items-center  2xl:justify-start justify-center lg:w-1/2 pt-10 lg:pt-0">
        <ul className="cloud w-[17rem]" role="navigation" aria-label="Webdev word cloud">
          {tags.map((tag:intTag, index:number)=>(
            <li key={index}><a href={tag.href} data-weight={tag.weight}>{tag.name}</a></li>
          ))}
        </ul>
        </article>
          <article className='flex flex-col justify-center lg:w-1/2 pt-20 lg:pt-0'>
            <div className=''>
              <h2 className='text-accent-1 font-semibold'>About me</h2>
              <h2>Passionate by IT and Web3 friendly.</h2>
            </div>
            <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum deserunt, mollitia sed quam ut, quisquam nam ab non neque error facere, consequatur voluptatem distinctio sunt adipisci minima dignissimos deleniti libero.
            </div>
            <div className='py-10'>
            <button>Download CV</button>
            </div>
          </article>
        </div>
    )
  }
  