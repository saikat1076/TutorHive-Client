import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyTutorials = () => {
    const { user } = useContext(AuthContext);
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/tutors/email/${user.email}`)
                .then(res => res.json())
                .then(data => setTutorials(data))
                .catch(err => console.error(err));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tutors/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setTutorials((prev) =>
                                prev.filter((tutorial) => tutorial._id !== id)
                            );
                            Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
                        }
                    })
                    .catch((err) => console.error(err));
            }
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Tutorials</h1>
            {tutorials.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Name</th>
                                <th className="border border-gray-300 p-2">Image</th>
                                <th className="border border-gray-300 p-2">Language</th>
                                <th className="border border-gray-300 p-2">Price</th>
                                <th className="border border-gray-300 p-2">Description</th>
                                <th className="border border-gray-300 p-2">Review</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tutorials.map((tutorial) => (
                                <tr key={tutorial._id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 p-2">{tutorial.lecturer.userName}</td>
                                    <td className="border border-gray-300">
                                        <img
                                            src={tutorial.Image}
                                            alt={tutorial.name}
                                            className="w-20 h-20 object-cover"
                                        />
                                    </td>
                                    <td className="border border-gray-300 p-2">{tutorial.category}</td>
                                    <td className="border border-gray-300 p-2">BDT {tutorial.price}</td>
                                    <td className="border border-gray-300 p-2">{tutorial.description}</td>
                                    <td className="border border-gray-300 text-red-400 text-center">({tutorial.review})</td>
                                    <td className="border border-gray-300 p-2 flex justify-around">
                                        <Link
                                            to={`/update-tutorial/${tutorial._id}`}
                                            className="btn btn-sm btn-primary"
                                        >
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(tutorial._id)}
                                            className="btn btn-sm btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No tutorials found.</p>
            )}
        </div>
    );
};

export default MyTutorials;
