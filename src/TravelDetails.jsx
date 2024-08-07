import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TravelDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5072/NewProject/Travel/${id}`);
        const value = await response.json();
        
        if (Array.isArray(value)) {
          setData(value);
        } else {
          setData([value]);
        }
        
        console.log(value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (data.length === 0) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {data.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <img src={item.image} className="w-full h-64 object-cover" alt='Hotel' />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Hotel Details</h2>
            <p className="text-gray-700">Price: <span className="font-semibold">${item.price}</span></p>
            <p className="text-gray-700">Rating: <span className="font-semibold">{item.rating} stars</span></p>
            <p className="text-gray-700">{item.desc}</p>
            <p className="text-gray-700">Free Cancellation: <span className="font-semibold">{item.freeCancellation ? 'Yes' : 'No'}</span></p>
            <p className="text-gray-700">Reserve Now: <span className="font-semibold">{item.reserveNow ? 'Yes' : 'No'}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}
