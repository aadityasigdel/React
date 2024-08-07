import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Hotel() {
    const [edited,setedited]= useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        price: "",
        ratings: "",
        description: "",
        image: [],
        cancelation: false,
        reservation: false,
    });
    const [hotels, setHotels] = useState([]);

    const handleShow = () => {
        setShowForm((prev) => !prev);
    };

    useEffect(() => {
        axios
            .get("http://localhost:5072/NewProject/hotel")
            .then((response) => setHotels(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        if (name === "images") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                image: value.split(","),
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };


    const handleEdit = (id) => {
        const hotelToEdit = hotels.find((hotel) => hotel.id === id);
        if (hotelToEdit) {
            setFormData(hotelToEdit);
            setShowForm(true);
            setedited(true)

            
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            let response;
            
            if (edited) {
                console.log('Woking');
                response = await axios.put(`http://localhost:5072/NewProject/hotel/${formData.id}`, formData);
                
                setHotels((prevHotels) =>
                    prevHotels.map((hotel) => (hotel.id === id ? response.data : hotel))
                );
            } else {

                response = await axios.post("http://localhost:5072/NewProject/hotel", formData);
                console.log("New hotel data submitted:", response.data);
    
                setHotels((prevHotels) => [...prevHotels, response.data]);
            }
    
            setShowForm(false);
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Error submitting data. Please try again.");
        }
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5072/NewProject/hotel/${id}`)
        .then(() => {
                setHotels((prevHotels) =>
                    prevHotels.filter((hotel) => hotel.id !== id)
                );
            })
            .catch((error) => {
                console.error("Error deleting data:", error);
                alert("Error deleting data. Please try again.");
            });
    };



    return (
        <div>
            <button onClick={handleShow}>
                {showForm ? "Hide Form" : "Show Form"}
            </button>
            {showForm && (
                <form
                    className="flex flex-col p-4 space-y-4 bg-gray-100 rounded mt-4"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="id">ID</label>
                    <input
                        type="number"
                        name="id"
                        id="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        placeholder="Enter hotel ID"
                        className="border border-gray-300 p-2 rounded"
                    />

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter hotel name"
                        className="border border-gray-300 p-2 rounded"
                    />

                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Enter price per night"
                        className="border border-gray-300 p-2 rounded"
                    />

                    <label htmlFor="ratings">Ratings</label>
                    <input
                        type="number"
                        name="ratings"
                        id="ratings"
                        value={formData.ratings}
                        onChange={handleInputChange}
                        placeholder="Enter ratings"
                        className="border border-gray-300 p-2 rounded"
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter hotel description"
                        className="border border-gray-300 p-2 rounded"
                    />

                    <label htmlFor="images">Image URLs </label>
                    <input
                        type="text"
                        name="images"
                        id="images"
                        value={formData.images}
                        onChange={handleInputChange}
                        placeholder="Enter image URLs separated by commas"
                        className="border border-gray-300 p-2 rounded"
                    />

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="cancelation"
                            id="cancelation"
                            checked={formData.cancelation}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <label htmlFor="cancelation">Free Cancellation</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="reservation"
                            id="reservation"
                            checked={formData.reservation}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <label htmlFor="reservation">
                            Reservation Available
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </form>
            )}

            <table className="mt-4 w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
                            ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
                            Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
                            Image
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.map((hotel) => (
                        <tr key={hotel.id}>
                            <td className="px-6 py-4 text-sm text-gray-500 border-b">
                                {hotel.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 border-b">
                                {hotel.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 border-b">
                                ${hotel.price}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 border-b">
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="w-20 h-12 object-cover"
                                />
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 border-b">
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={() => handleEdit(hotel.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-red-500 hover:underline ml-2"
                                    onClick={() => handleDelete(hotel.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
