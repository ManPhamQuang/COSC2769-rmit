import React from "react";
import NavBar from "../../../components/navbar/NavBar";

export default function update() {
    return (
        <div>
            <NavBar />
            <div className="container mx-auto p-4 h-full">
                <div className="md:grid md:grid-cols-3 md:gap-6 mt-32">
                    <div className="col-span-3 lg:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Update Chatroom
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                This information will be displayed publicly so
                                be careful what you share.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 col-span-3 lg:col-span-2"></div>
                </div>
            </div>
        </div>
    );
}
