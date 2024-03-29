"use client";
import { Tabs } from "../ui/tabs";
import { tabs } from "@/app/services/enums/projects.enum";
 
export function Projects() {
  
  return (
    <div className="container flex items-center pt-5">
      <div className="h-[30rem] lg:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}