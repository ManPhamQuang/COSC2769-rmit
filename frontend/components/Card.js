import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { createPopper } from "@popperjs/core";

const color = "pink";

export default function Card({ props }) {
    const { id, title, teacher, rating, views, price, tag, description } =
        props;

    const [tooltipShow, setTooltipShow] = React.useState(false);
    const cardRef = React.createRef();
    const tooltipRef = React.createRef();
    const openLeftTooltip = () => {
        createPopper(cardRef.current, tooltipRef.current, {
            placement: "right",
        });
        setTooltipShow(true);
    };
    const closeLeftTooltip = () => {
        setTooltipShow(false);
    };

    return (
        <>
            <div
                className="flex-none w-64 group cursor-pointer inline-block"
                ref={cardRef}
                onMouseEnter={openLeftTooltip}
                onMouseLeave={closeLeftTooltip}
            >
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
            {/* Tooltip section - appears on card hover */}
            <div
                className={
                    tooltipShow
                        ? `bg-gray-50 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg`
                        : `hidden bg-${color}-600 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg`
                }
                ref={tooltipRef}
            >
                <div>
                    <div
                        className={`bg-${color}-600 opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg`}
                    >
                        {color} tooltip title
                    </div>
                    <h1 className="p-3 font-bold">{title}</h1>
                    <div className="p-3">{description}</div>
                </div>
                {/* <div
                    style={{
                        width: 0,
                        height: 0,
                        borderTop: "8px solid transparent",
                        borderRight: "17px solid #555",
                        borderBottom: "8px solid transparent",
                        position: "absolute",
                        top: "80px",
                        left: -15,
                    }}
                ></div> */}
            </div>
        </>
    );
}
