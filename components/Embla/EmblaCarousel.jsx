"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const TWEEN_FACTOR_BASE = 0.84;
const slides = [
  {
    id: 1,
    name: "Image 01",
    path: "/assets/concept/img1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Image 02",
    path: "/assets/concept/img2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Image 03",
    path: "/assets/concept/img3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Image 04",
    path: "/assets/concept/img4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="grid grid-cols-[73%_minmax(0px,_1fr)] w-full h-[60vh] gap-5">
      <div>{slides.name}</div>
      <div className="embla max-w-[19rem] flex items-center justify-end">
        <div
          className="embla__viewport overflow-hidden border-2 rounded-l-[1.8rem] border-primary/20 "
          ref={emblaRef}
        >
          <div className="embla__container flex -ml-[6rem] backface-hidden touch-pan-y">
            {slides.map((item, index) => (
              <div
                className="embla__slide flex-[0_0_60%] min-w-0 pl-[1rem]"
                key={index}
              >
                <img
                  className="embla__slide__img block w-full h-[32rem] object-cover rounded-[1.8rem]"
                  src={item.path}
                  alt="slide img"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons absolute right-[3.5rem] bottom-[36%] border-2 rounded-lg border-primary">
          {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        {/* <div className="embla__controls grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
      </div> */}
      </div>
    </div>
  );
};

export default EmblaCarousel;
