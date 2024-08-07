// import React, { useState, useEffect, useCallback, memo } from 'react';

// const Form = memo(({ destinationData, handleInputChange, handleSubmit, handleCancel }) => {
//     return (
//         <form onSubmit={handleSubmit} className="mt-8 flex flex-col justify-center">
//             {['id', 'title', 'img', 'weather'].map((field) => (
//                 <div key={field} className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         <input
//                             type="text"
//                             name={field}
//                             value={destinationData[field]}
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

// export default function AdminDestinatin() {
//     const [tableData, setTableData] = useState([]);
//     const [destinationData, setDestinationData] = useState({
//         id: "",
//         title: "",
//         img: "",
//         weather: "",
//     });
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         const storedData = localStorage.getItem("storeDestination");
//         if (storedData) {
//             setTableData(JSON.parse(storedData));
//         }
//     }, []);

//     const handleInputChange = useCallback((event) => {
//         const { name, value } = event.target;
//         setDestinationData((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     }, []);

//     const handleSubmit = useCallback(
//         async (e) => {
//             e.preventDefault();

//             try {
//                 if (editIndex !== null) {
//                     const updatedData = tableData.map((item, index) =>
//                         index === editIndex ? destinationData : item
//                     );
//                     setTableData(updatedData);
//                 } else {
//                     setTableData((prevData) => [...prevData, destinationData]);
//                 }

//                 setDestinationData({ id: "", title: "", img: "", weather: "" });
//                 setIsFormVisible(false);
//                 setEditIndex(null);
//             } catch (error) {
//                 console.error("Failed to submit data:", error);
//             }
//         },
//         [destinationData, tableData, editIndex]
//     );

//     const handleAddButtonClick = () => {
//         setIsFormVisible((prev) => !prev);
//     };

//     const handleEdit = (index) => {
//         setDestinationData(tableData[index]);
//         setEditIndex(index);
//         setIsFormVisible(true);
//     };

//     const handleDelete = (id) => {
//         const updatedData = tableData.filter((item) => item.id !== id);
//         setTableData(updatedData);
//         localStorage.setItem("storeDestination", JSON.stringify(updatedData));
//     };

//     const handleCancel = () => {
//         setIsFormVisible(false);
//         setEditIndex(null);
//         setDestinationData({ id: "", title: "", img: "", weather: "" });
//     };

//     return (
//         <div className="p-4 bg-white rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-2">Destination</h2>
//             <p className="text-gray-700">Admin Destination</p>

//             <button
//                 onClick={handleAddButtonClick}
//                 className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
//             >
//                 {isFormVisible ? "Cancel" : "Add"}
//             </button>

//             <table className="mt-4 w-full border-collapse border border-gray-200">
//                 <thead>
//                     <tr>
//                         {['ID', 'Name', 'Image', 'Weather', 'Actions'].map((header) => (
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
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">{item.title}</td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">{item.img}</td>
//                             <td className="px-6 py-4 text-sm text-gray-500 border-b">{item.weather}</td>
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
//                     destinationData={destinationData}
//                     handleInputChange={handleInputChange}
//                     handleSubmit={handleSubmit}
//                     handleCancel={handleCancel}
//                 />
//             )}
//         </div>
//     );
// }
