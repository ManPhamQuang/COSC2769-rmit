import React from "react";
import { StarIcon } from "@heroicons/react/solid";

 export default function teacherSelfIntroduction({ props }){
    // const { id, name, rating, seftIntroduction} = props;
    return(

        <div class="bg-white dark:bg-gray-800 w- rounded-lg p-4 mb-6 shadow sm:inline-block">
            <div class="md:flex items-start md:text-left">
                <div class="flex-shrink-0">
                    <div class="inline-block relative">
                        <a href="#" class="block relative">
                            <img alt="profil" src="https://img-c.udemycdn.com/user/200_H/15722848_5948_3.jpg" class="mx-auto object-cover rounded-full sm:h-50 sm:w-50 md:h-25 md:w-25 "/>
                        </a>
                        <p className="text-yellow-700 font-semibold inline">{props.rating}</p>
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    </div>
                </div>
                <div class="ml-6">
                    <p class="flex items-baseline">
                        <span class=" font-bold uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                            {props.name}
                        </span>
                    </p>
                    <span class=" font-bold tracking-wide text-lg text-gray-600 font-semibold">
                            {props.job}
                        </span>
                    <div class="flex items-center mt-1">
                    
                    </div>
                    <div class="mt-3">
                        <p class="mt-1 max-w-xs dark:text-white">
                            {props.seftIntroduction}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );


 }