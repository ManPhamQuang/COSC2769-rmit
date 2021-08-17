import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <span>
            {isReadMore ? text.slice(0, 500) : text}
            <div
                onClick={toggleReadMore}
                className="text-purple-800 font-bold cursor-pointer mt-1 "
            >
                {isReadMore ? (
                    <span className="flex items-center">
                        <p className="inline text-sm">Show more&nbsp;</p>
                        <ChevronDownIcon className="h-4 w-4 inline mt-1" />
                    </span>
                ) : (
                    <span className="flex items-center">
                        <p className="inline text-sm">Show less&nbsp;</p>
                        <ChevronUpIcon className="h-4 w-4 inline mt-1" />
                    </span>
                )}
            </div>
        </span>
    );
};

const Description = () => {
    return (
        <div>
            <p className="leading-relaxed text-sm text-justify lg:text-base">
                <ReadMore>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean aliquet, ante sed efficitur sodales, lorem velit
                    viverra justo, ut maximus leo dolor nec risus. Nulla
                    efficitur nisi sed sapien sodales maximus. Donec a elit
                    neque. Integer efficitur odio vitae nisl faucibus suscipit
                    vel iaculis tellus. Nulla convallis turpis et placerat
                    tincidunt. Vivamus vitae venenatis lectus. Pellentesque
                    tempus, ligula ac feugiat porta, ante nisl eleifend erat, et
                    tincidunt orci nisi iaculis arcu. Cras condimentum ultricies
                    ante nec viverra. Donec quis scelerisque massa. Donec
                    efficitur orci at massa elementum sagittis. Ut vitae commodo
                    ligula. Duis nec tincidunt tellus. Praesent tincidunt
                    sollicitudin metus in aliquam. Morbi finibus lacinia
                    sodales. Nunc malesuada velit id lacus iaculis lobortis.
                    Aenean odio sem, molestie a facilisis non, laoreet dignissim
                    dui. Nulla vel nunc eget ligula elementum viverra sed et
                    est.Aliquam consequat risus at nibh aliquam eleifend. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    posuere dolor egestas diam tempor, ac aliquam nulla maximus.
                    Duis lacinia elit et posuere iaculis. Vestibulum aliquet,
                    velit id sollicitudin tincidunt, odio massa fermentum
                    libero, ultrices tempor velit nunc in sem. Duis consequat
                    blandit lorem, id vulputate est fermentum eget. Pellentesque
                    nulla massa, scelerisque vel mi imperdiet, venenatis
                    vestibulum nulla. Sed auctor augue condimentum pharetra
                    faucibus. Vestibulum a viverra diam. Fusce pulvinar
                    elementum lacinia. Praesent at finibus ante. Vivamus commodo
                    varius tellus sed convallis. Phasellus tempor ligula a nibh
                    vestibulum malesuada. Pellentesque fermentum eu lorem sed
                    ultrices. Donec posuere bibendum lacinia. Donec quis neque
                    id est commodo interdum sed eu quam. Vivamus mattis mattis
                    condimentum. Praesent finibus, purus sed tristique aliquam,
                    tortor nisi elementum justo, ut laoreet ante urna sit amet
                    lectus. Nulla nec ex nisi. Nam interdum eros purus, eu
                    tincidunt nisi rutrum in. Quisque aliquet egestas libero in
                    ullamcorper. Sed dolor arcu, eleifend sit amet viverra
                    vitae, consectetur in mi. Nunc aliquam blandit est et
                    tristique. Suspendisse est dui, consequat sit amet ornare
                    in, efficitur sed tellus. Nullam ex felis, ultricies ac
                    condimentum a, ultricies et lacus. Sed ultrices dui libero,
                    ut mollis odio lacinia at. In a porta ante. Donec aliquam,
                    eros sit amet dignissim condimentum, mauris enim finibus
                    turpis, ac cursus elit turpis vel nibh. Duis ultricies ante
                    a turpis euismod, quis ultricies sapien consequat. Nam id
                    molestie velit, ut porttitor purus. Ut vitae pharetra dolor,
                    id iaculis ipsum. Donec nibh odio, dignissim quis libero in,
                    consequat varius augue. Phasellus congue lectus tristique
                    vestibulum fringilla. Sed tempus purus libero, at lobortis
                    lorem luctus a. Fusce tempus orci id erat consequat, finibus
                    hendrerit quam sollicitudin. Vestibulum accumsan et augue a
                    euismod. Maecenas convallis, lorem ut lacinia aliquam,
                    mauris turpis laoreet tortor, id porta nulla massa ut
                    mauris. In maximus dignissim lorem, vitae placerat odio
                    ultrices sit amet. Cras consectetur quis tortor ac volutpat.
                    Donec dignissim arcu vel urna convallis, eu rutrum ante
                    pretium. */}
                </ReadMore>
            </p>
        </div>
    );
};

export default Description;
