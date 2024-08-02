"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import { Merriweather } from "next/font/google";

const sliderData = [
  {
    num: "01",
    image: "/assets/work/zsans-blog-publisher-promo.png",
    sub_image: "/assets/work/zsans-blog-publisher-promo.png",
    title: "Blog Publisher",
    sub_tittle:
      "zsans - blog publiher is a platform to publish articles easily, created by sandi hermawan",
    time: "Minggu, 23 desember, 2023",
    stack_des:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Postcss" },
      { name: "Express.Js" },
      { name: "MongoDb" },
      { name: "AWS S3" },
    ],
    description:
      "This project is motivated by the abundance of paid article websites. This website offers fully free features with minimal advertising. The blog publisher is inspired by several social media platforms, such as Twitter, which can display the latest news based on trends.",
  },
  {
    num: "02",
    image: "/assets/concept/img1.png",
    sub_image: "/assets/concept/img1.png",
    title: "Tittle Here",
    sub_tittle: "Sub Tittle Here",
    time: "Day, Month, Year",
    stack_des:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    stack: [
      { name: "Tech 1" },
      { name: "Tech 2" },
      { name: "Tech 3" },
      { name: "Tech 4" },
      { name: "Tech 5" },
      { name: "Tech 6" },
    ],
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought tohave scrambled parts of Cicero's De Finibus Bonorumet Malorum for use in a type specimen book.",
  },
  {
    num: "03",
    image: "/assets/concept/img2.jpg",
    sub_image: "/assets/concept/img2.jpg",
    title: "Tittle Here",
    sub_tittle: "Sub Tittle Here",
    time: "Day, Month, Year",
    stack_des:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    stack: [
      { name: "Tech 1" },
      { name: "Tech 2" },
      { name: "Tech 3" },
      { name: "Tech 4" },
      { name: "Tech 5" },
      { name: "Tech 6" },
    ],
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought tohave scrambled parts of Cicero's De Finibus Bonorumet Malorum for use in a type specimen book.",
  },
  {
    num: "04",
    image: "/assets/concept/img3.jpg",
    sub_image: "/assets/concept/img3.jpg",
    title: "Tittle Here",
    sub_tittle: "Sub Tittle Here",
    time: "Day, Month, Year",
    stack_des:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    stack: [
      { name: "Tech 1" },
      { name: "Tech 2" },
      { name: "Tech 3" },
      { name: "Tech 4" },
      { name: "Tech 5" },
      { name: "Tech 6" },
    ],
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought tohave scrambled parts of Cicero's De Finibus Bonorumet Malorum for use in a type specimen book.",
  },
  {
    num: "05",
    image: "/assets/concept/img4.jpg",
    sub_image: "/assets/concept/img4.jpg",
    title: "Tittle Here",
    sub_tittle: "Sub Tittle Here",
    time: "Day, Month, Year",
    stack_des:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    stack: [
      { name: "Tech 1" },
      { name: "Tech 2" },
      { name: "Tech 3" },
      { name: "Tech 4" },
      { name: "Tech 5" },
      { name: "Tech 6" },
    ],
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought tohave scrambled parts of Cicero's De Finibus Bonorumet Malorum for use in a type specimen book.",
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

  const ListItem = ({ text }) => (
    <li className="flex items-center gap-3 mt-3">
      <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
      <p className="text-primary/70 hover:underline">
        {text}
      </p>
    </li>
  );

  const BulletList = ({ items }) => (
    <ul className="flex flex-col text-base font-normal text-primary/70 space-y-2 ">
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </ul>
  );
  const SliderItem = ({ index }) => {
    const item = sliderData[index];
    return (
      <div>
        {/* Other parts of your component */}
        <BulletList items={item.stack.map((stackItem) => stackItem.name)} />
      </div>
    );
  };
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
                    <h1 className="text-[3.3rem] text-primary/70">
                      Concept and Design from Zsans Project
                    </h1>
                  </div>
                  <div className="w-full h-[3rem] text-xl font-normal border-t-2 border-b-2 border-primary/40 py-1">
                    <div className="flex w-full h-full items-center justify-around border-t-[1.5px] border-b-[1.5px] border-primary/40 ">
                      <p className="text-primary/65">Design #{slides.num}</p>
                      <p className="text-primary/65">{slides.title}</p>
                      <p className="text-primary/65">{slides.time}</p>
                    </div>
                  </div>
                  {/* body */}
                  <div className="grid grid-cols-[65%_minmax(0,_1fr)] w-full h-full mt-3 pr-2 pb-2">
                    <div className="paper_body h-full w-full  ">
                      <div className="flex w-full h-[4rem] px-5 items-center ">
                        <h3 className="text_tittle text-[2rem] text-primary/70 italic hover:underline">
                          {slides.sub_tittle}
                        </h3>
                      </div>
                      <div className="flex w-full h-full mt-3 gap-10 px-5 ">
                        <div className="flex flex-col h-full w-full  text-justify ">
                          <h4 className="text-base font-normal text-primary/70">
                            {slides.description}
                          </h4>
                          <img
                            className="embla__slide__img h-[13rem] mt-1 bg-cover bg-no-repeat bg-center object-cover grayscale hover:grayscale-0 ease-linear duration-300 border-[1.5px] border-primary"
                            src={slides.image}
                          />
                        </div>
                        <div className="flex flex-col h-full w-full group">
                          <h3 className="text-[1.6rem] text-primary/70 group-hover:bg-primary/85 group-hover:text-accent ease-linear duration-200">
                            Feature Concept
                          </h3>
                          <h4 className="text-base font-normal text-primary/70 text-justify">
                            {slides.stack_des}
                          </h4>
                          {/* tech */}
                          <SliderItem index={index} />
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
