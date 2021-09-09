import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

const CategoryDropDown = ({
    categories,
    selectedCategory,
    categoryDropdownOnChange,
}) => {
    return (
        <Fragment>
            <Listbox
                as="div"
                className="space-y-1"
                value={selectedCategory.name}
                onChange={categoryDropdownOnChange}
            >
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700">
                            {categories.length === 3 ? "Status" : "Category"}
                        </Listbox.Label>
                        <div className="relative">
                            <span className="inline-block w-full rounded-md shadow-sm">
                                <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                    <span className="block truncate">
                                        {selectedCategory.name}
                                    </span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Listbox.Button>
                            </span>

                            <Transition
                                show={open}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                            >
                                <Listbox.Options
                                    static
                                    className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                >
                                    {categories.map((category, index) => (
                                        <Listbox.Option
                                            key={index}
                                            value={category}
                                        >
                                            {({ selected, active }) => (
                                                <div
                                                    className={`${
                                                        active
                                                            ? "text-white bg-indigo-600"
                                                            : "text-gray-900"
                                                    } cursor-default select-none relative py-2 pl-8 pr-4`}
                                                >
                                                    <span
                                                        className={`${
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal"
                                                        } block truncate`}
                                                    >
                                                        {category.name}
                                                    </span>
                                                </div>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </Fragment>
    );
};

export default CategoryDropDown;
