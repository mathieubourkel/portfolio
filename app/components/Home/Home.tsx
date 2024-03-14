import Link from "next/link";
import moi from "../../assets/moi.png";
import Image from 'next/image';
import { GitHubIcon, LinkedinIcon } from "../../assets/icons";
import { TextGenerateEffect } from "../ui/text-generated-effect";
import "./home.css";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className='container flex flex-col lg:flex-row-reverse lg:justify-between'>
    <article className='flex xl:justify-end self-center xl:w-1/2'>
      
        <div>
        <FontAwesomeIcon className='object-scale-down xl:h-[40vh] xl:w-[40vh] h-[30vh] w-[30vh]' icon={faEthereum} color={"rgb(79, 72, 112)"}/>
        {/* <Image
          className='object-scale-down xl:h-[50vh] xl:w-[50vh] h-[30vh] w-[30vh]'
          src={moi}
          alt="photo de mathieu bourkel"
        /> */}
        </div>
        
      </article>
      <article className='xl:w-1/2 xl:px-0 mt-5 flex flex-col self-center'>
        <h2 className='flex small-caps'>Hi There !</h2>
        <div className='md:flex'>
          <h1 >{"Mathieu"}</h1>
          <h1 className='text-accent-1 familia md:ml-3'>{"Bourkel"}</h1>
        </div>
        <div>
        <h2 className="hidden 2xl:block flex ">
          <TextGenerateEffect words="Backend Developer-DevOps.-Web3."/>
        </h2>
        <h3 className="2xl:hidden flex"> 
          <TextGenerateEffect words="Backend Developer-DevOps.-Web3."/>
        </h3>
        <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque et doloribus ratione repellendus ea, voluptatem dolore temporibus fuga, totam dicta exercitationem molestiae voluptatum? Est iusto commodi in itaque corrupti quidem.</p>
        </div>
        <div className='flex justify-between py-5 2xl:py-10'>
        <div>
        <button>Contact me</button>
        </div>
        
        
        <div className='flex gap-5 justify-end 2xl:justify-start'>
        <Link href="https://www.linkedin.com/in/mathieu-bourkel/"><LinkedinIcon /></Link>
        <Link href="https://github.com/mathieubourkel"><GitHubIcon /></Link>
        </div>
        </div>
      </article>
      
    </div>
  );
}