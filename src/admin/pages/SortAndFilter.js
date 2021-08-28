// import React, { useState, useEffect } from "react";

// const SortAndFilter = (props) => {
//   const possibleVenues = new Set();

//   useEffect(() => {
//     props.allRequests.map((req) => {
//       possibleVenues.add(req.venue.name);
//     });
//   }, []);
//   return (
//     <div>
//       <select name="venue" id="venue">
//         {props.possibleVenues.map((venue) => (
//           <option onSelect={arr.push(venue)}>{venue}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SortAndFilter;
