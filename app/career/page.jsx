// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import NavBar from "../(components)/NavBar";

// export default function CareerPage() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://aws.antiai.ltd/api/fetchAllPosition")
//       .then((res) => {
//         setData(res.data || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching positions:", err);
//         setError(true);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <NavBar />

//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-white text-3xl font-bold mb-6">
//           Open Positions
//         </h1>

//         {loading && (
//           <p className="text-white">Loading positions…</p>
//         )}

//         {error && (
//           <p className="text-red-500">
//             Failed to fetch positions.
//           </p>
//         )}

//         {!loading && !error && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data.map((position) => (
//               <div
//                 key={position.id}
//                 className="bg-white rounded-lg shadow-md p-6 text-black"
//               >
//                 <h2 className="text-xl font-bold underline mb-2">
//                   {position.role}
//                 </h2>

//                 <p className="mb-1">
//                   <strong>Location:</strong> {position.location}
//                 </p>

//                 <p className="mb-1">
//                   <strong>Business Area:</strong>{" "}
//                   {position.business_area}
//                 </p>

//                 <p className="mb-4">
//                   <strong>Posted on:</strong>{" "}
//                   {new Date(position.created_at).toLocaleDateString()}
//                 </p>

//                 {/* APPLY BUTTON → AWS BACKEND */}
//                 <a
//                   href={`https://aws.antiai.ltd/apply/${position.id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <button className="bg-black text-white w-full py-2 rounded">
//                     Apply
//                   </button>
//                 </a>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "../(components)/NavBar";
import { supabase } from "@/lib/supabase";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .eq("is_active", true)
          .order("created_at", { ascending: false });

        if (error) throw error;

        setJobs(data || []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <NavBar />

      <div className="container mx-auto px-4 py-10">
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

        {!loading && !error && jobs.length === 0 && (
          <p className="text-white">
            No open positions right now.
          </p>
        )}

        {!loading && !error && jobs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 text-black"
              >
                <h2 className="text-xl font-bold underline mb-2">
                  {job.title}
                </h2>

                {job.location && (
                  <p className="mb-1">
                    <strong>Location:</strong> {job.location}
                  </p>
                )}

                {job.department && (
                  <p className="mb-1">
                    <strong>Department:</strong> {job.department}
                  </p>
                )}

                <p className="mb-4 text-sm text-gray-600">
                  Posted on{" "}
                  {new Date(job.created_at).toLocaleDateString()}
                </p>

                {/* ✅ INTERNAL APPLY ROUTE */}
                <Link href={`/apply/${job.id}`}>
                  <button className="bg-black text-white w-full py-2 rounded hover:opacity-90">
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
