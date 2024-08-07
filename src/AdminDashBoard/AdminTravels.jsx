// import React, { useState, useEffect, useCallback, memo } from 'react';

// // Form component for handling input and submission
// const Form = memo(({ travelData, handleInputChange, handleSubmit, handleCancel }) => {
//     return (
//         <form onSubmit={handleSubmit} className="mt-8 flex flex-col justify-center">
//             {['id', 'name', 'img', 'price'].map((field) => (
//                 <div key={field} className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         <input
//                             type="text"
//                             name={field}
//                             value={travelData[field]}
//                             placeholder={`Enter ${field}`}
//                             onChange={handleInputChange}
//                             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//                         />
//                     </label>
//                 </div>
//             ))}
//             <button
//                 type="submit"
//                 className="w-full mt-4 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
//             >
//                 Submit
//             </button>
//         </form>
//     );
// });

// export default function AdminTravels() {
//     const [tableData, setTableData] = useState([]);
//     const [travelData, setTravelData] = useState({
//         id: "",
//         name: "",
//         img: "",
//         price: "",
//     });
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         const storedData = localStorage.getItem("storeTravel");
//         if (storedData) {
//             setTableData(JSON.parse(storedData));
//         }
//     }, []);

//     const handleInputChange = useCallback((event) => {
//         const { name, value } = event.target;
//         setTravelData((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     }, []);

//     const handleSubmit = useCallback(
//         (e) => {
//             e.preventDefault();

//             try {
//                 if (editIndex !== null) {
//                     const updatedData = tableData.map((item, index) =>
//                         index === editIndex ? travelData : item
//                     );
//                     setTableData(updatedData);
//                 } else {
//                     setTableData((prevData) => [...prevData, travelData]);
//                 }

//                 setTravelData({ id: "", name: "", img: "", price: "" });
//                 setIsFormVisible(false);
//                 setEditIndex(null);
//                 localStorage.setItem("storeTravel", JSON.stringify(tableData));
//             } catch (error) {
//                 console.error("Failed to submit data:", error);
//             }
//         },
//         [travelData, tableData, editIndex]
//     );

//     const handleAddButtonClick = () => {
//         setIsFormVisible((prev) => !prev);
//     };

//     const handleEdit = (index) => {
//         setTravelData(tableData[index]);
//         setEditIndex(index);
//         setIsFormVisible(true);
//     };

//     const handleDelete = (id) => {
//         const updatedData = tableData.filter((item) => item.id !== id);
//         setTableData(updatedData);
//         localStorage.setItem("storeTravel", JSON.stringify(updatedData));
//     };

//     const handleCancel = () => {
//         setIsFormVisible(false);
//         setEditIndex(null);
//         setTravelData({ id: "", name: "", img: "", price: "" });
//     };

//     return (
//         <div className="p-4 bg-white rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-2">Travels</h2>
//             <p className="text-gray-700">Admin Travels</p>

//             <button
//                 onClick={handleAddButtonClick}
//                 className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
//             >
//                 {isFormVisible ? "Cancel" : "Add"}
//             </button>

//             <table className="mt-4 w-full border-collapse border border-gray-200">
//                 <thead>
//                     <tr>
//                         {['ID', 'Name', 'Image', 'Price', 'Actions'].map((header) => (
//                             <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-b">
//                                 {header}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData.map((item, index) => (
//                         <tr key={item.id}>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">{item.id}</td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">{item.name}</td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">
//                                 <img src={item.img} alt={item.name} className="w-16 h-16 object-cover" />
//                             </td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">{item.price}</td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">
//                                 <button
//                                     className="text-blue-500 hover:underline"
//                                     onClick={() => handleEdit(index)}
//                                 >
//                                     Edit
//                                 </button>
//                                 <button
//                                     className="text-red-500 hover:underline ml-2"
//                                     onClick={() => handleDelete(item.id)}
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
//                     travelData={travelData}
//                     handleInputChange={handleInputChange}
//                     handleSubmit={handleSubmit}
//                     handleCancel={handleCancel}
//                 />
//             )}
//         </div>
//     );
// }
