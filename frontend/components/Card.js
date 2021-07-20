import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { createPopper } from "@popperjs/core";
import Tippy from "@tippyjs/react/headless";
// import "tippy.js/dist/tippy.css"; // optional

const color = "pink";

export default function Card({ props }) {
    const { id, title, teacher, rating, views, price, tag, description } =
        props;

    const tooltipShow = true;
    // const [tooltipShow, setTooltipShow] = React.useState(false);
    // const cardRef = React.createRef();
    // const tooltipRef = React.createRef();
    // const openLeftTooltip = () => {
    //     createPopper(cardRef.current, tooltipRef.current, {
    //         placement: "right",
    //     });
    //     setTooltipShow(true);
    // };
    // const closeLeftTooltip = () => {
    //     setTooltipShow(false);
    // };

    return (
        <div>
            <Tippy
                render={(attrs) => (
                    // Tooltip
                    <div
                        className={`bg-white ml-3 mb-28 block z-50 font-normal border-2 shadow-lg leading-normal  max-w-xs text-left no-underline break-words rounded-lg`}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <div className="p-6 leading-snug">
                            {/* <div
                                className={`bg-gray-600 opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg`}
                            >
                                {color} tooltip title
                            </div> */}
                            <h1 className="font-bold">{title}</h1>
                            <div className="py-1 bg-yellow-200 w-16 rounded-sm">
                                <p className="text-xs font-semibold mx-auto text-center">
                                    {tag}
                                </p>
                            </div>
                            <div className="">{description}</div>
                        </div>
                        <div
                            className="w-11 overflow-hidden inline-block"
                            data-popper-arrow=""
                        >
                            <div className=" h-16  bg-black -rotate-45 transform origin-top-right"></div>
                        </div>
                    </div>
                )}
            >
                <div className="flex-none w-64 group cursor-pointer inline-block">
                    <div className="h-36 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                        <img
                            src="/Python-language.png"
                            className="object-cover border-gray-300 border rounded-md h-full w-full group-hover:bg-red-400 mix-blend-multiply"
                        />
                    </div>

                    <div className="leading-snug mt-2">
                        <h1 className="font-bold">{title}</h1>
                        <p className="text-sm font-normal text-gray-500 truncate">
                            {teacher}
                        </p>
                        <p className="text-yellow-700 font-semibold inline">
                            {rating}
                        </p>
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <p className="inline text-sm font-normal text-gray-500">
                            ({views})
                        </p>
                        <h1 className="font-bold">{price}</h1>
                        <div className="py-1 bg-yellow-200 w-16 rounded-sm">
                            <p className="text-xs font-semibold mx-auto text-center">
                                {tag}
                            </p>
                        </div>
                    </div>
                </div>
            </Tippy>
            <div class="w-16 overflow-hidden inline-block">
                <div class=" h-11 w-11 bg-black rotate-45 transform origin-bottom-left"></div>
            </div>

            <div class="w-16 overflow-hidden inline-block">
                <div class=" h-11 w-11 bg-black -rotate-45 transform origin-top-left"></div>
            </div>

            {/* <div class="w-11  overflow-hidden inline-block">
                <div class=" h-16  bg-black -rotate-45 transform origin-top-right"></div>
            </div> */}

            <div class="w-11  overflow-hidden inline-block">
                <div class=" h-16  bg-black rotate-45 transform origin-top-left"></div>
            </div>

            <div class="w-11  overflow-hidden inline-block">
                <div class=" h-16  bg-black -rotate-45 transform origin-bottom-right"></div>
            </div>

            <div class="w-11  overflow-hidden inline-block">
                <div class=" h-16  bg-black rotate-45 transform origin-bottom-left"></div>
            </div>

            <div class="w-11  overflow-hidden inline-block">
                <div class=" h-16  bg-black -rotate-45 transform origin-top-left"></div>
            </div>

            <div class="w-11  overflow-hidden inline-block">
                <div class=" h-16  bg-black rotate-45 transform origin-top-right"></div>
            </div>
            {/* Tooltip section - appears on card hover */}
            {/* <div
                className={
                    tooltipShow
                        ? `bg-white ml-3 mb-28 block z-50 font-normal border-2 shadow-lg leading-normal  max-w-xs text-left no-underline break-words rounded-lg`
                        : `hidden bg-${color}-600 border-0 ml-3 block z-50 font-normal leading-normal  max-w-xs text-left no-underline break-words rounded-lg`
                }
            >
                <div className="p-6 leading-snug">
                    <div
                        className={`bg-gray-600 opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg`}
                    >
                        {color} tooltip title
                    </div>
                    <h1 className="font-bold">{title}</h1>
                    <div className="py-1 bg-yellow-200 w-16 rounded-sm">
                        <p className="text-xs font-semibold mx-auto text-center">
                            {tag}
                        </p>
                    </div>
                    <div className="">{description}</div>
                </div>
            </div> */}
        </div>
    );
}
