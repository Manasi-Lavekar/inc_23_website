// import React, { useEffect, useState } from 'react';

// const SelectDomainSlots = () => {
//   const [selectedDomains, setSelectedDomains] = useState([]);
//   const [assignedSlots, setAssignedSlots] = useState([]);

//   useEffect(() => {
//     // Fetch selected domains and assigned slots from the API
//     // Replace API_URL with the actual API endpoint
//     fetch('API_URL/select-domain-slots')
//       .then(response => response.json())
//       .then(data => {
//         setSelectedDomains(data.selectedDomains);
//         setAssignedSlots(data.assignedSlots);
//       })
//       .catch(error => console.error('Error fetching domain and slots:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Select Domains & Slots</h2>
//       <div>
//         <p>Selected Domains: {selectedDomains.join(', ')}</p>
//         <p>Assigned Slots: {assignedSlots.join(', ')}</p>
//       </div>
//     </div>
//   );
// }

// export default SelectDomainSlots;
