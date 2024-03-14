import React, { useContext, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Welcome from './components/Welcome';
import SelectDomainSlots from './components/SelectDomainSlots';
import AllocationDetails from './components/AllocationDetails';


function JudgeDashboard() {
  return (
    <div className='bg-faint_blue/10'>
      <div className="">
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/select-domain-slots" element={<SelectDomainSlots />} />
          <Route path="/allocation-details" element={<AllocationDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default JudgeDashboard;
