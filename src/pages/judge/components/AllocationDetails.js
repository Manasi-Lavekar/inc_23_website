import React, { useState, useEffect } from "react";
import Buttons from "../../../components/buttons"; // Import the Buttons component
import { useGetAllocatedProjects } from "../../../hooks/judge.hooks";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const AllocationDetails = () => {
  const [projects, setProjects] = useState([]);
  const judge = Cookies.get('jid')
  const { data, isLoading } = useGetAllocatedProjects(judge);

  useEffect(() => {
    setProjects(data)
    console.log(projects)
  }, [data])


  return (
    <div className="p-4">
      <div className="overflow-x-auto mb-20 mt-10">
        {isLoading ? (
          <p>Loading...</p>
        ) : (

          <div className="flex flex-col justify-center items-center rounded-xl">
            <div className="rounded-lg p-2 text-center text-xl text-gold mb-2">
              Judge ID: {projects?.data?.length > 0 ? projects?.data[0]?.jid : "unknown jid"}
            </div>

            <table className="w-[95%] md:w-[80%] lg:w-1/2 border-collapse mb-4 rounded-2xl">
              <thead className="bg-blue-500 text-yellow-200 rounded-xl">
                <tr className="bg-gold border-[1px] border-gold">
                  <th className="p-2 text-center">Projects ID's</th>
                  <th className="p-2 text-center">Marks Entry</th>
                </tr>
              </thead>
              <tbody>
                {projects?.data?.length > 0 ? (
                  projects.data[0]?.allocated_projects.split(",").map((project, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-faint_blue/20" : "bg-faint_blue"}>
                      <td className="text-center p-2">{project}</td>
                      <td className="p-2 flex justify-center items-center">
                        {/* You can add the button or link for marks entry here */}
                        <Buttons
                          type='submit'
                          value={`Evaluate ${project}`}
                          className="text-blue-500 rounded-full"
                          // onClick={() => Navigate(`/judge/concepts/evaluate/${projects?.data[0]?.jid}/${project}`)}
                        />
                        {/* <a href={`/judge/concepts/evaluate/${projects?.data[0]?.jid}/${project}`}  >eeeee</a> */}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    {isLoading ? <td>Loading...</td> :
                      <td colSpan="2" className="text-center p-2 border-r-[1px] border-l-[1px] border-b-[1px] border-gold">No projects allocated</td>
                    }
                  </tr>
                )}
              </tbody>
            </table>


          </div>
        )}
      </div>
    </div>
  );
}

export default AllocationDetails;
