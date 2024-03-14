import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

import logo from './logo_inc2.png';
import { Link, useParams } from 'react-router-dom';

const Welcome = () => {
  const { jid } = useParams();
  // useEffect(() => {
  //   Swal.fire({
  //     title: "WELCOME To InC 2024 JUDGE DASHBOARD",
  //     text: "Get ready to assess some amazing projects!",
  //     icon: "success",
  //     customClass: {
  //       confirmButton: 'swal-confirm-button'
  //     }
  //   });
  // }, []);

  return (
    <div className="flex justify-center items-center pb-40 md:pt-20 pt-10 text-lg">
      <div className="flex flex-col justify-center text-justify items-center mx-5 lg:w-1/2 bg-faint_blue/30 p-10 rounded-xl">
        <div className="">
          <img src={logo} alt="InC Logo" className="w-40" />
        </div>
        <h2 style={{ color: '#FFD700' }}>Welcome, Judges! </h2>
        <p>
          Thank you for serving as a judge in the Impetus and Concepts (InC) 2024 project competition.
          Your expertise and feedback are invaluable in acknowledging and rewarding innovative projects. As a judge, your responsibility is to assess project submissions using predefined criteria and offer constructive feedback to participants. Please utilize the links below to navigate the judge dashboard and fulfill your tasks:

        </p>
        <div>
          <div className='flex justify-center my-5'>

            <Link to={`/judge/allocation-details`} className="dashboard-link px-5 py-3 bg-orange-500 rounded-xl font-bold" >Allocated Projects</Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
