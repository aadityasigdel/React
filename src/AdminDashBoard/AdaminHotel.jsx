// import React, { useState, useEffect, useCallback, memo } from "react";

// const Form = memo(({ storedata, handleInputChange, handleSubmit }) => {
//     return (
//         <form onSubmit={handleSubmit} className="mt-8 flex flex-col justify-center">
//             <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                     ID
//                     <input
//                         type="text"
//                         name="id"
//                         value={storedata.id}
//                         placeholder="Enter your ID"
//                         onChange={handleInputChange}
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//                     />
//                 </label>
//             </div>

//             <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Name
//                     <input
//                         type="text"
//                         name="name"
//                         value={storedata.name}
//                         placeholder="Enter your name"
//                         onChange={handleInputChange}
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//                     />
//                 </label>
//             </div>

//             <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Price
//                     <input
//                         type="text"
//                         name="price"
//                         value={storedata.price}
//                         placeholder="Enter price"
//                         onChange={handleInputChange}
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//                     />
//                 </label>
//             </div>

//             <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Image URL
//                     <input
//                         type="text"
//                         name="image"
//                         value={storedata.image}
//                         onChange={handleInputChange}
//                         placeholder="Enter image URL"
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//                     />
//                 </label>
//             </div>

//             <div>
//                 <button
//                     type="submit"
//                     className="w-full mt-4 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
//                 >
//                     Submit
//                 </button>
//             </div>
//         </form>
//     );
// });

// export default function AdaminHotel() {
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const [storedata, setStoredata] = useState({
//         name: "",
//         id: "",
//         image: "",
//         price: "",
//     });
//     const [data, setData] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);

//     const handleInputChange = useCallback((event) => {
//         const { name, value } = event.target;
//         setStoredata((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     }, []);

//     const handleSubmit = useCallback(
//         (e) => {
//             e.preventDefault();

//             if (editIndex !== null) {

//                 const updatedData = data.map((item, index) =>
//                     index === editIndex ? storedata : item
//                 );
//                 setData(updatedData);
//             } else {
//                 setData((prevData) => {
//                     const newData = [...prevData, storedata];
//                     localStorage.setItem("storedata", JSON.stringify(newData));
//                     return newData;
//                 });
//             }

//             localStorage.setItem("storedata", JSON.stringify(data));
//             setStoredata({ name: "", id: "", image: "", price: "" });
//             setIsFormVisible(false);
//             setEditIndex(null);
//         },
//         [storedata, data, editIndex]
//     );

//     useEffect(() => {
//         const storedData = localStorage.getItem("storedata");
//         if (storedData) {
//             setData(JSON.parse(storedData));
//         }
//     }, []);

//     const handleAddButtonClick = () => {
//         setIsFormVisible((prev) =>  !prev);
//     };

//     const Remove = (index) => {
//         const deletehotel = [...data];
//         deletehotel.splice(index, 1);
//         console.log(index);
//         setData(deletehotel);
//         localStorage.setItem("storedata", JSON.stringify(deletehotel));
//     };


//     const Edit = (index) => {
//         const itemToEdit = data[index];
//         setStoredata(itemToEdit);
//         setEditIndex(index);
//         setIsFormVisible(true);
//     };
    

//     return (
//         <div className="p-4 bg-white rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-2">Hotels</h2>
//             <p className="text-gray-700">Admin Hotels</p>

//             <button
//                 onClick={handleAddButtonClick}
//                 className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
//             >
//                 {isFormVisible ? "Cancel" : "Add"}
//             </button>

//             <table className="mt-4 w-full border-collapse border border-gray-200">
//                 <thead>
//                     <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
//                             ID
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
//                             Name
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
//                             Price
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
//                             Image
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
//                             Actions
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => (
//                         <tr key={index}>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">
//                                 {item.id}
//                             </td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">
//                                 {item.name}
//                             </td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">
//                                 {item.price}
//                             </td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">
//                                 {item.image}
//                             </td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">
//                                 <button
//                                     className="text-blue-500 hover:underline"
//                                     onClick={() => Edit(index)}
//                                 >
//                                     Edit
//                                 </button>
//                                 <button
//                                     className="text-red-500 hover:underline ml-2"
//                                     onClick={() => Remove(index)}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {isFormVisible && (
//                 <Form
//                     storedata={storedata}
//                     handleInputChange={handleInputChange}
//                     handleSubmit={handleSubmit}
//                 />
//             )}
//         </div>
//     );
// }
