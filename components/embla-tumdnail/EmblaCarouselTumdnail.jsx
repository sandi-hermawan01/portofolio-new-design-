"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";

const sliderData = [
  {
    num: "01",
    image: "/assets/work/zsans-blog-publisher-promo.png",
    title: "Blog Publisher",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Postcss" },
      { name: "Express.Js" },
      { name: "MongoDb" },
      { name: "AWS S3" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    num: "02",
    image: "/assets/concept/img2.jpg",
    title: "Slider 02",
    stack: [
      { name: "tech 1" },
      { name: "tech 2" },
      { name: "tech 3" },
      { name: "tech 4" },
      { name: "tech 5" },
      { name: "tech 6" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    num: "03",
    image: "/assets/concept/img3.jpg",
    title: "Slider 03",
    stack: [
      { name: "tech 1" },
      { name: "tech 2" },
      { name: "tech 3" },
      { name: "tech 4" },
      { name: "tech 5" },
      { name: "tech 6" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    num: "04",
    image: "/assets/concept/img4.jpg",
    title: "Slider 04",
    stack: [
      { name: "tech 1" },
      { name: "tech 2" },
      { name: "tech 3" },
      { name: "tech 4" },
      { name: "tech 5" },
      { name: "tech 6" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    num: "05",
    image: "/assets/concept/img5.jpg",
    title: "Slider 05",
    stack: [
      { name: "tech 1" },
      { name: "tech 2" },
      { name: "tech 3" },
      { name: "tech 4" },
      { name: "tech 5" },
      { name: "tech 6" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
];

const EmblaCarouselTumdnail = (props) => {
  const { slides, options } = props;
  const [project, setProject] = useState(sliderData[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    setProject(sliderData[emblaMainApi.selectedScrollSnap()]);
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla grid grid-cols-[70%_minmax(0,_1fr)] justify-center items-center w-full sm:mt-[5.5rem] mt-[2.5rem] gap-5 px-5 mx-auto [--slide-height:38rem] [--slide-spacing:1rem] [--slide-size:100%]">
      <div
        className="embla__viewport overflow-hidden border-2 border-primary/40"
        ref={emblaMainRef}
      >
        <div className="embla__container backface-hidden flex touch-pan-y -ml-[var(--slide-spacing)]">
          {sliderData.map((slides, index) => (
            <div
              className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)]"
              key={slides.id}
            >
              <div className="embla__slide__number shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-3xl text-4xl font-semibold flex flex-row flex-nowrap items-center justify-between px-2 h-[var(--slide-height)] select-none">
                <div className="flex flex-col gap-3">
                  <h2 className=" font-bold leading-none text-primary/80 group-hover:text-accent transition-all duration-500 capitalize">
                    {slides.title}
                  </h2>
                  <p className="text-primary/70 text-xl font-normal">
                    {slides.description}
                  </p>
                  <h2 className="text-xl font-bold text-primary/80 mt-4">
                    Tech stack
                  </h2>
                  <ul className="grid grid-cols-3 xl:grid-cols-4 gap-3 items-center justify-center text-nowrap">
                    {project.stack.map((slides, index) => {
                      return (
                        <li key={index} className="text-xl text-primary/70">
                          {slides.name}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <img
                  className="embla__slide__img h-[30vh] bg-cover bg-no-repeat bg-center object-cover"
                  src={slides.image}
                  alt={slides.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs [--thumbs-slide-height:38rem] ">
        <div
          className="embla-thumbs__viewport overflow-hidden "
          ref={emblaThumbsRef}
        >
          <div className="embla-thumbs__container flex flex-row gap-2 ">
            {sliderData.map((slides, index) => (
              <Thumb
                key={slides.id}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                image={slides.image}
                title={slides.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselTumdnail;
