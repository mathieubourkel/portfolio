"use client";
import { testimonials } from "@/app/services/enums/experiences.enum";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import React from "react";

export default function Experiences() {
  
    return (
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    )
  }
  