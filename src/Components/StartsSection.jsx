// import React, { useState, useEffect } from 'react';

// const StartsSection = () => {
//   const [stats, setStats] = useState({
//     tutors: 'Loading...',
//     reviews: 'Loading...',
//     languages: 'Loading...',
//     users: 'Loading...',
//   });

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('http://localhost:5000/tutors/lectures/counts')
//       .then((response) => response.json())
//       .then((data) => {
//         setStats({
//           tutors: data.tutors,
//           reviews: data.reviews,
//           languages: data.languages,
//           users: data.users,
//         });
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
//       {/* Tutors Count */}
//       <div className="stats stat bg-base-200 p-4 rounded-xl shadow-md">
//         <div className="stat-title">Tutors</div>
//         <div className="stat-value">{stats.tutors}</div>
//       </div>
//       {/* Reviews Count */}
//       <div className="stats stat bg-base-200 p-4 rounded-xl shadow-md">
//         <div className="stat-title">Reviews</div>
//         <div className="stat-value">{stats.reviews}</div>
//       </div>
//       {/* Languages Count */}
//       <div className="stats stat bg-base-200 p-4 rounded-xl shadow-md">
//         <div className="stat-title">Languages</div>
//         <div className="stat-value">{stats.languages}</div>
//       </div>
//       {/* Users Count */}
//       <div className="stats stat bg-base-200 p-4 rounded-xl shadow-md">
//         <div className="stat-title">Users</div>
//         <div className="stat-value">{stats.users}</div>
//       </div>
//     </div>
//   );
// };

// export default StartsSection;
