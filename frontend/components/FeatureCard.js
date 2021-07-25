import React from "react";
 export default function FeatureCard({ props }){
     
    return(
            <div class="md:flex items-start md:text-left">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0 inline" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <p class="text-red text-xs italic inline ml-1">{props}</p>
                </div>
            </div>
    );


 }