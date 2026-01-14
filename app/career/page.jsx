// import Link from 'next/link';
// import React from 'react'
// import axios from 'axios'
// import NavBar from '../(components)/NavBar';

// async function CareerPage() {
 
//   try {
//     const { data } = await axios.get("https://aws.antiai.ltd/api/fetchAllPosition");

//     return (
//       <>
// <NavBar/>
//       <div className="container mx-auto px-4 py-8">

//         <h1 className="text-white text-3xl font-bold mb-6">Open Positions</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((position) => (
//             <div key={position.id} className="bg-white rounded-lg shadow-md p-6 text-black">
//               <h2 className="text-xl font-bold underline mb-2">{position.role}</h2>
//               <p className="mb-1"><strong>Location:</strong> {position.location}</p>
//               <p className="mb-1"><strong>Business Area:</strong> {position.business_area}</p>
//               <p className="mb-4"><strong>Posted on:</strong> {new Date(position.created_at).toLocaleDateString()}</p>
//               <Link href={`/career/${position.id}`}>
//                 <button className="bg-black text-white w-full py-2 rounded">Apply</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       </>
//     );
//   } catch (error) {
//     console.error("Error fetching positions: ", error);
//     return <p className="text-red-500">Failed to fetch positions.</p>;
//   }
// }

// export default CareerPage

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../(components)/NavBar";

export default function CareerPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://aws.antiai.ltd/api/fetchAllPosition")
      .then((res) => {
        setData(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavBar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-white text-3xl font-bold mb-6">
          Open Positions
        </h1>

        {loading && (
          <p className="text-white">Loading positions…</p>
        )}

        {error && (
          <p className="text-red-500">
            Failed to fetch positions.
          </p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-lg shadow-md p-6 text-black"
              >
                <h2 className="text-xl font-bold underline mb-2">
                  {position.role}
                </h2>

                <p className="mb-1">
                  <strong>Location:</strong> {position.location}
                </p>

                <p className="mb-1">
                  <strong>Business Area:</strong>{" "}
                  {position.business_area}
                </p>

                <p className="mb-4">
                  <strong>Posted on:</strong>{" "}
                  {new Date(position.created_at).toLocaleDateString()}
                </p>

                <Link href={`/career/${position.id}`}>
                  <button className="bg-black text-white w-full py-2 rounded">
                    Apply
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
