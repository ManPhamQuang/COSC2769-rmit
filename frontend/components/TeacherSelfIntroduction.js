import React from "react";
import { StarIcon } from "@heroicons/react/solid";

 export default function Review({ props }){
    const { id, name, rating, seftIntroduction} = props;
    return(

<div class="bg-white dark:bg-gray-800 w-full rounded-lg p-4 mb-6 shadow sm:inline-block">
    <div class="flex items-start text-left">
        <div class="flex-shrink-0">
            <div class="inline-block relative">
                <a href="#" class="block relative">
                    <img alt="profil" src="https://img-c.udemycdn.com/user/200_H/15722848_5948_3.jpg" class="mx-auto object-cover rounded-full h-16 w-16 "/>
                </a>
                <p className="text-yellow-700 font-semibold inline">{rating}</p>
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
            </div>
        </div>
        <div class="ml-6">
            <p class="flex items-baseline">
                <span class="text-gray-600 dark:text-gray-200 font-bold">
                    {name}
                </span>
            </p>
            <div class="flex items-center mt-1">
               
            </div>
            <div class="mt-3">
                <p class="mt-1 max-w-xs dark:text-white">
                    {seftIntroduction}
                </p>
            </div>
        </div>
    </div>
</div>


    );


 }