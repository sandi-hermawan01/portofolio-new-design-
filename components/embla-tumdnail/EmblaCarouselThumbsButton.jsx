"use client";

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

export const Thumb = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide flex-[0_0_0%] bg-cover min-w-0 sm:flex-[0_0_65%] border-2 border-primary/40 bg-primary/10 hover:bg-primary/5 ease-linear duration-300".concat(
        selected ? " embla-thumbs__slide--selected " : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number rounded-3xl bg-transparent touch-manipulation inline-flex no-underline cursor-pointer border-0 p-0 m-0 shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] text-[1.8rem] font-semibold text-[var(--detail-high-contrast)] items-center justify-center h-[var(--thumbs-slide-height)] w-full [tap-highlight-color:rgba(var(--text-high-contrast-rgb-value),0.5)]"
      >
        <img
          className="h-[25vh] bg-cover bg-no-repeat bg-center object-cover"
          src={sliderData[index].image}
          alt={sliderData[index].title}
        />
      </button>
    </div>
  );
};
