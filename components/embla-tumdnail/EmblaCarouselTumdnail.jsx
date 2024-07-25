"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";

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
    <div className="embla grid grid-cols-[900px_minmax(200px,_1fr)] justify-center items-center w-full mt-[4rem] gap-5 px-5 mx-auto [--slide-height:38rem] [--slide-spacing:1rem] [--slide-size:100%]">
      <div
        className="embla__viewport overflow-hidden border-2 border-primary/40"
        ref={emblaMainRef}
      >
        <div className="embla__container backface-hidden flex touch-pan-y -ml-[var(--slide-spacing)]">
          {slides.map((index) => (
            <div
              className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)]"
              key={index}
            >
              <div className="embla__slide__number shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-3xl text-4xl font-semibold flex items-center justify-center h-[var(--slide-height)] select-none">
                {index + 1}
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
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselTumdnail;
