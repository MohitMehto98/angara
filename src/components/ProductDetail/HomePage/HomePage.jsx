// "use client";

// import React, { useEffect, useState } from "react";
// import { fetchingAPIData } from "../../../app/api/products/ProductApi";
// import Home from "@/app/page";

// const HomePage = () => {
//   const [data, setData] = useState([]);
//   const handleFetchingData = async () => {
//     try {
//       const result = await fetchingAPIData();
//       setData(result);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     handleFetchingData();
//   }, []);

//   console.log(data);

//   return (
//     <Home>
//       <div>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero autem
//         natus magni, deserunt cupiditate voluptas accusantium magnam deleniti
//         quia blanditiis nostrum perspiciatis alias officia laudantium reiciendis
//         repellat impedit voluptate beatae.
//         {data?.images?.map((item) => {
//           return <img src={item} />;
//         })}
//       </div>
//     </Home>
//   );
// };

// export default HomePage;
