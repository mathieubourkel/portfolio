"use client";

import { cn } from "@/app/utils/cn";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "reverse"
      );
      containerRef.current.style.setProperty("--animation-duration", "7s");
      setTimeout(() => {
        containerRef.current && containerRef.current.style.setProperty("--animation-duration", "40s")
      }, 2000); // Délai en millisecondes, ajustez selon vos besoins

    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
      containerRef.current.style.setProperty("--animation-duration", "7s");
      setTimeout(() => {
        containerRef.current && containerRef.current.style.setProperty("--animation-duration", "40s");
      }, 2000); // Délai en millisecondes, ajustez selon vos besoins

    }
  }
  return (
    <div className='container flex items-center justify-between pb-10 lg:pb-0 rounded-md antialiased'>
    <FontAwesomeIcon className='cursor-pointer' icon={faChevronLeft} onClick={scrollRight}/>
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[15rem] card-glass max-w-full relative flex-shrink-0 px-8 py-6 md:w-[450px]"
            style={{
              background: "var(--color-bg-2)"

                // "linear-gradient(90deg, rgba(79, 72, 112,1) 0%, rgba(72, 86, 112,1) 100%)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="flex flex-col gap-1">
                  <h3 className="text-accent-1 small-caps font-semibold text-sm leading-[1.6] font-normal">
                    {item.name}
                  </h3>
                  <h3 className="text-sm leading-[1.6] font-semibold">
                    {item.title}
                  </h3>
                </span>
              <h3 className=" relative z-20 text-sm leading-[1.6] ">
                {item.quote}
              </h3>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
    <FontAwesomeIcon className='cursor-pointer' icon={faChevronRight} onClick={scrollLeft} />
    </div>
  );
};
