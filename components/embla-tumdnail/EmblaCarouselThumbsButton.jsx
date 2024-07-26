"use client";

import React from "react";

export const Thumb = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide flex-[0_0_22%] min-w-0 sm:flex-[0_0_15%] border-2 border-primary/40".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number  rounded-3xl bg-transparent touch-manipulation inline-flex no-underline cursor-pointer border-0 p-0 m-0 shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] text-[1.8rem] font-semibold text-[var(--detail-high-contrast)] items-center justify-center h-[var(--thumbs-slide-height)] w-full [tap-highlight-color:rgba(var(--text-high-contrast-rgb-value),0.5)]"
      >
        <img
          className="bg-cover"
          src={`https://picsum.photos/600/350?v=${index}`}
          alt="Your alt text"
        />
      </button>
    </div>
  );
};
