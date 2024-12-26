import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaGripLines } from 'react-icons/fa';
import { MdEmail, MdPerson } from 'react-icons/md';
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateTutorial = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [tutor, setTutor] = useState({});

    useEffect(() => {
        const fetchTutor = async () => {
            try {
                const { data } = await axios.get(`https://tutor-hive-sever.vercel.app/tutors/${id}`);
                setTutor(data);
            } catch (error) {
                console.error("Error fetching tutor:", error);
            }
        };
        fetchTutor();
    }, [id]);

    // Handle input changes to update the tutor state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTutor((prevTutor) => ({
            ...prevTutor,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedTutor = {
            name: form.name.value,
            email: form.email.value,
            Image: form.Image.value,
            category: form.category.value,
            price: form.price.value,
            description: form.description.value,
        };

        try {
            await axios.put(`https://tutor-hive-sever.vercel.app/tutors/${id}`, updatedTutor);
            Swal.fire("Success", "Tutor updated successfully!", "success");
        } catch (error) {
            Swal.fire("Error", "Failed to update tutor.", "error");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-x-3">
                {/* Read-only User Email */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">User Email</label>
                    <div className="flex items-center gap-2">
                        <MdEmail className="text-blue-500" />
                        <input
                            type="text"
                            name='email'
                            value={user?.email || "Name@gmail.com"}
                            readOnly
                            className="input input-disabled w-full"
                        />
                    </div>
                </div>

                {/* Read-only User Name */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">User Name</label>
                    <div className="flex items-center gap-2">
                        <MdPerson className="text-purple-500" />
                        <input
                            type="text"
                            name='userName'
                            value={user?.displayName || "Name"}
                            readOnly
                            className="input input-disabled w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-x-3">
                {/* Image */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="text"
                        name="Image"
                        value={tutor.Image || ""}
                        placeholder="Image URL"
                        className="input input-bordered w-full"
                        onChange={handleChange} // Handle changes
                    />
                </div>

                {/* Category */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={tutor.category || ""}
                        placeholder="Enter category"
                        className="input input-bordered w-full"
                        onChange={handleChange} // Handle changes
                    />
                </div>
            </div>

            {/* Description */}
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    name="description"
                    value={tutor.description || ""}
                    placeholder="Enter description"
                    className="textarea textarea-bordered w-full"
                    onChange={handleChange} // Handle changes
                />
            </div>

            <div className="flex justify-between gap-x-3">
                {/* Price */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={tutor.price || ""}
                        placeholder="Enter price"
                        className="input input-bordered w-full"
                        onChange={handleChange} // Handle changes
                    />
                </div>

                {/* Review */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">Review</label>
                    <div className="flex items-center gap-2">
                        <FaGripLines className="text-gray-600" />
                        <input
                            type="text"
                            name="review"
                            value={tutor.review || ""}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button className="btn btn-primary w-full">Update</button>
            </div>
        </form>
    );
};

export default UpdateTutorial;
