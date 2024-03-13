"use client";
import { testimonials } from "@/app/services/enums/experiences.enum";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Experiences() {
    return (
      <div className='container flex items-center justify-center pt-20 rounded-md antialiased'>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    )
  }
  