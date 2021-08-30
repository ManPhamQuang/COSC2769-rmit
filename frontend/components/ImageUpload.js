import React, { useRef, useState, useEffect } from "react";

const ImageUpload = ({ image, setImage, currentAvatar }) => {
    const [preview, setPreview] = useState(null);
    const ref = useRef();

    useEffect(() => {
        if (!image) return setPreview(null);
        const fileReader = new FileReader();
        fileReader.onload = () => setPreview(fileReader.result);
        fileReader.readAsDataURL(image);
    }, [image]);

    const clear = () => {
        ref.current.value = "";
    };

    const handleImageOnChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (!file) return setImage(null);
        console.log(file.size);
        if (file.size > 2097152) {
            alert("File is too big!");
            clear();
        } else {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div className="mt-1 flex items-center">
            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <img
                    className="object-contain w-full h-full bg-gray-50"
                    src={
                        preview
                            ? preview
                            : "https://res.cloudinary.com/dybygufkr/image/upload/c_thumb,w_200,g_face/v1593000869/avatar_q2ysxd.jpg"
                    }
                />
            </span>
            <input
                type="file"
                id="avatar"
                name="avatar"
                accept=".jpg,.png,.jpeg"
                onChange={handleImageOnChange}
                ref={ref}
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
        </div>
    );
};

export default ImageUpload;
