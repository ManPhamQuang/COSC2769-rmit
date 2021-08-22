import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";

const SearchCard = ({ room }) => {
    return (
        <>
            <Link href={`/room/${room._id}`}>
                <div className=" group cursor-pointer">
                    <div>
                        <div className="h-48 md:h-44 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                            <img
                                src={room.thumbnail !== "default.png" && room.thumbnail !== "room.png" ? `${room.thumbnail}` : "/default.png"}
                                className="object-cover border-gray-300 border rounded-md h-full w-full group-hover:bg-red-400 mix-blend-multiply"
                            />
                        </div>

                        <div className="leading-snug mt-2">
                            <h1 className="font-bold">{room.title}</h1>
                            <p className="text-sm font-normal text-gray-500 truncate">
                                {room.createdBy?.name}
                            </p>
                            <p className="text-yellow-700 font-semibold inline">
                                4.7
                            </p>
                            <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                            <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                            <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                            <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                            <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                            <p className="inline text-sm font-normal text-gray-500">
                                (630,406)
                            </p>
                            <h1 className="font-bold">${room.price}</h1>
                            {room.category && (
                                <div className="py-1 px-2 bg-yellow-200 inline-block rounded-sm">
                                    <p className="text-xs font-semibold mx-auto text-center">
                                        {room.category?.name}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default SearchCard;
