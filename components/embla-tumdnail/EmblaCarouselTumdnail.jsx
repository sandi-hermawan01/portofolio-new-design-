"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import { Merriweather } from "next/font/google";

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

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const EmblaCarouselTumdnail = (props) => {
  const { slides, options } = props;
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
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div
      className={`${merriweather.variable} font-merriweather embla grid grid-cols-[70%_minmax(0,_1fr)] justify-center items-center w-full sm:mt-[5.5rem] mt-[2.5rem] gap-5 px-5 mx-auto [--slide-height:38rem] [--slide-spacing:1rem] [--slide-size:100%]`}
    >
      <div className="embla__viewport overflow-hidden " ref={emblaMainRef}>
        <div className="embla__container backface-hidden flex touch-pan-y -ml-[var(--slide-spacing)]">
          {sliderData.map((slides, index) => (
            <div
              className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)]"
              key={index}
            >
              <div className="embla__slide__number shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] text-4xl font-semibold flex flex-nowrap justify-center items-center h-[var(--slide-height)] select-none">
                <img
                  className="embla__slide__img absolute h-full w-full bg-cover bg-no-repeat bg-center object-cover -z-10"
                  src="/assets/paper_fibers.png"
                />
                {/* newspaper layout */}
                <div className="flex flex-col w-full h-full ">
                  {/* header */}
                  <div className="w-full h-[6rem] flex items-center justify-center">
                    <h1 className="text-[3.6rem] text-primary/70">
                      Lorem Ipsum Dolor Sit Amet
                    </h1>
                  </div>
                  <div className="w-full h-[3rem] text-xl font-normal border-t-2 border-b-2 border-primary/40 py-1">
                    <div className="flex w-full h-full items-center justify-around border-t-[1.5px] border-b-[1.5px] border-primary/40 ">
                      <p className="text-primary/65">Lorem#1</p>
                      <p className="text-primary/65">Lorem Ipsum</p>
                      <p className="text-primary/65">Lorem</p>
                    </div>
                  </div>
                  {/* body */}
                  <div className="grid grid-cols-[65%_minmax(0,_1fr)] w-full h-full mt-3 pr-2 pb-2">
                    <div className="paper_body h-full w-full ">
                      <div className="flex w-full h-[4rem] px-5 items-center">
                        <h3 className="text_tittle text-[2rem] text-primary/70 italic hover:underline">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </h3>
                      </div>
                      <div className="flex w-full h-full mt-5 gap-10 px-5">
                        <div className="flex h-full w-full  text-justify">
                          <h4 className="text-base font-normal text-primary/70">
                            Lorem ipsum, or lipsum as it is sometimes known, is
                            dummy text used in laying out print, graphic or web
                            designs. The passage is attributed to an unknown
                            typesetter in the 15th century who is thought to
                            have scrambled parts of Cicero's De Finibus Bonorum
                            et Malorum for use in a type specimen book.
                            <br />
                            <br />
                            The purpose of lorem ipsum is to create a natural
                            looking block of text (sentence, paragraph, page,
                            etc.) that doesn't distract from the layout. A
                            practice not without controversy, laying out pages
                            with meaningless filler text can be very useful when
                            the focus is meant to be on design, not content.
                          </h4>
                        </div>
                        <div className="flex flex-col h-full w-full group">
                          <h3 className="text-[1.6rem] text-primary/70 group-hover:bg-primary/85 group-hover:text-accent ease-linear duration-200">
                            Lorem Ipsum 
                          </h3>
                          <h4 className="text-base font-normal text-primary/70 text-justify">
                            Lorem ipsum, or lipsum as it is sometimes known, is
                            dummy text used in laying out print, graphic or web
                            designs.
                          </h4>
                          <ul className="flex flex-col text-base font-normal text-primary/70">
                            <li className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-primary/70"></span>
                              <p className="text-primary/70">
                                Lorem ipsum, or lipsum as it is sometimes known,
                              </p>
                            </li>
                            <li className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-primary/70"></span>
                              <p className="text-primary/70">
                                Lorem ipsum, or lipsum as it is sometimes known,
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-full border-[1.5px] border-primary ">
                      <img
                        className="embla__slide__img h-full bg-cover bg-no-repeat bg-center object-cover grayscale hover:grayscale-0 ease-linear duration-300"
                        src={slides.image}
                      />
                    </div>
                  </div>
                </div>
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
