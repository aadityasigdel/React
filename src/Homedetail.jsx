import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Homedetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [API_KEY] = useState('arGSJdfibWjqukWfmqEV');

  // Fetch hotel data from API with AbortController
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5072/NewProject/hotel/${id}`, { signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const value = await response.json();
        setData(Array.isArray(value) ? value : [value]);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    // Cleanup function to abort fetch when the component unmounts
    return () => {
      abortController.abort();
    };
  }, [id]);

  // Initialize MapLibre map
  useEffect(() => {
    if (map.current || data.length === 0) return; // Stops map from initializing more than once

    const lng = data[0]?.lng || 139.753; // Default longitude
    const lat = data[0]?.lat || 35.6844; // Default latitude

    if (isNaN(lng) || isNaN(lat)) {
      console.error("Invalid coordinates:", lng, lat);
      return; // Prevent map initialization if coordinates are invalid
    }

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: 14,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    new maplibregl.Marker({ color: '#FF0000' })
      .setLngLat([lng, lat]) // Use the hotel's coordinates
      .addTo(map.current);
    
    // Cleanup on unmount
    return () => map.current.remove();
  }, [data, API_KEY]);

  // Loading state
  if (data.length === 0) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {data.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <img src={item.image} className="w-full h-64 object-cover" alt='Hotel' />
          <div className="p-4">
            <h1 className='text-3xl font-bold mb-2'>About</h1>
            <h2 className="text-xl font-bold mb-2">Hotel Details</h2>
            <p className="text-gray-700">Price: <span className="font-semibold">${item.price}</span></p>
            <p className="text-gray-700">Rating: <span className="font-semibold">{item.rating} stars</span></p>
            <p className="text-gray-700">{item.desc}</p>
            <p className="text-gray-700">Free Cancellation: <span className="font-semibold">{item.freeCancellation ? 'Yes' : 'No'}</span></p>
            <p className="text-gray-700">Reserve Now: <span className="font-semibold">{item.reserveNow ? 'Yes' : 'No'}</span></p>
          </div>
          <div ref={mapContainer} style={{ height: '300px', width: '100%' }} />
        </div>
      ))}
    </div>
  );
}