import { useParams, useNavigate } from "react-router-dom";
import { useGetJudgeAllocations, useGetJudge } from "../../hooks/judge.hooks";
import { Buttons, InputBox } from "../../components";
import { projectDomains } from "../../static/data";
import { useRef } from "react";

function JudgeAllocation() {
  const { jid } = useParams();
  // console.log(jid)
  const { data: judgeData, isLoading: isJudgeLoading } = useGetJudge(jid)
  // console.log(judgeData)
  const navigate = useNavigate()
  const pidRef = useRef()

  return (
    <>
      <div className="py-8 flex flex-col items-center mx-5">
        {!isJudgeLoading ?
          <header className="flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border w-full md:w-[90%] border-light_blue items-center p-4 md:p-8 md:mx-20 mx-5 mt-10">
            <div className="flex flex-col text-gold justify-center gap-3">
              <h2 className="text-base md:text-2xl border-l-2  border-gold md:font-light md:leading-6 pl-2">Judge ID: <span className="text-white mx-2 " >{judgeData.data?.jid}</span></h2>
              <h2 className="text-base md:text-2xl border-l-2  border-gold md:font-light md:leading-6 pl-2">Email: <span className="text-white mx-2 " >{judgeData.data?.email}</span></h2>
              <h2 className="text-base md:text-2xl border-l-2 border-gold md:font-light md:leading-6 pl-2">Name: <span className="text-white mx-2 " >{judgeData.data?.name}</span></h2>
              <h2 className="text-base md:text-2xl border-l-2 border-gold md:font-light md:leading-6 pl-2">Domains: <span className="text-white mx-2 " >{judgeData.data?.domains.join(',')}</span></h2>
            </div>
          </header> :
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gold">Loading Judge Details...</h1>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-light_blue"></div>
          </div>
        }
        <form className="mt-6">
          <InputBox label='Enter Project ID (for extra evaluation)' type='text' name='pid' placeholder='Enter Project ID' inputref={pidRef} required />
          <Buttons
            onClick={() => navigate(`/judge/concepts/evaluate/${jid}/${pidRef.current?.value}`)}
            type='submit'
            value='Evaluate'
          />
        </form>
        {isJudgeLoading ? (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gold">Loading Allocated Projects...</h1>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-light_blue"></div>
          </div>
        ) : (
          <>
            {judgeData?.data["concepts"]?.length > 0 && (
              <h1 className="text-4xl text-gold p-6 font-bold">Concepts</h1>
            )}
            {judgeData?.data["concepts"]?.length > 0 &&
              judgeData?.data["concepts"]?.map((project) => (
                <div
                  key={project.pid}
                  className="rounded-lg outline-dashed outline-2 outline-offset-[3px] my-2 outline-light_blue px-4 py-2 bg-faint_blue/10 mb-3 w-[100%] md:w-[90%]"
                >
                  <div className="flex ">
                    <h1 className="text-lg md:text-xl font-bold text-gold">
                      {" "}
                      ID&nbsp;:&nbsp;{" "}
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">{project.pid}</h2>
                  </div>
                  <div className="flex ">
                    <h1 className="text-lg md:text-xl font-bold text-gold">
                      Project Name&nbsp;:&nbsp;{" "}
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">{project.title}</h2>
                  </div>
                  <div className="flex">
                    <h1 className="text-lg md:text-xl font-bold text-gold">
                      Lab&nbsp;: &nbsp;
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">{project.lab}</h2>
                  </div>
                  <div className="flex">
                    <h1 className="text-lg md:text-xl font-bold text-gold">
                      Domain&nbsp;:&nbsp;{" "}
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">
                      {
                        projectDomains.filter(
                          ({ value }) => value === project.domain
                        )[0].label
                      }
                    </h2>
                  </div>
                  <div className="md:flex">
                    <h1 className="text-lg md:text-xl font-bold text-gold">
                      Abstract&nbsp;:&nbsp;{" "}
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">{project.abstract}</h2>
                  </div>
                  <Buttons
                    className="px-2 md:px-6 py-4 text-white font-semibold border border-transparent focus:outline-0 rounded-xl bg-faint_blue/30 transition-all duration-300 hover:text-gold hover:border-light_blue hover:bg-faint_blue/10"
                    onClick={() =>
                      navigate(
                        "/judge/concepts/evaluate/" + jid + "/" + project.pid
                      )
                    }
                    value={"Evaluate"}
                  ></Buttons>
                </div>
              ))}
              
            {judgeData?.data["impetus"]?.length > 0 && (
              <h1 className="text-4xl text-gold p-6 font-bold">Impetus</h1>
            )}
            {judgeData?.data["impetus"]?.length > 0 &&
              judgeData?.data["impetus"].map((project) => (
                <div
                  key={project.pid}
                  className="rounded-lg outline-dashed outline-2 outline-offset-[3px] my-2 outline-light_blue px-4 py-2 bg-faint_blue/10 mb-3 w-[100%] md:w-[90%]"
                >
                  <div className="flex ">
                    <h1 className="md:text-xl text-lg font-bold text-gold">
                      {" "}
                      ID&nbsp;:&nbsp;{" "}
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">{project.pid}</h2>
                  </div>
                  <div className="flex ">
                    <h1 className="md:text-xl text-lg font-bold text-gold">
                      Project Name&nbsp;:&nbsp;{" "}
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">{project.title}</h2>
                  </div>
                  <div className="flex">
                    <h1 className="md:text-xl text-lg font-bold text-gold">
                      Lab&nbsp;: &nbsp;
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">{project.lab}</h2>
                  </div>
                  <div className="flex">
                    <h1 className="md:text-xl text-lg font-bold text-gold">
                      Domain&nbsp;:&nbsp;{" "}
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">
                      {projectDomains[project.domain]}
                    </h2>
                  </div>
                  <div className="md:flex">
                    <h1 className="md:text-xl text-lg font-bold text-gold">
                      Abstract&nbsp;:&nbsp;{" "}
                    </h1>{" "}
                    <h2 className="text-base md:text-lg font-normal">{project.abstract}</h2>
                  </div>
                  <Buttons
                    className="px-2 md:px-6 py-4 text-white font-semibold border border-transparent focus:outline-0 rounded-xl bg-faint_blue/30 transition-all duration-300 hover:text-gold hover:border-light_blue hover:bg-faint_blue/10"
                    onClick={() =>
                      navigate(
                        "/judge/impetus/evaluate/" + jid + "/" + project.pid
                      )
                    }
                    value={"Evaluate"}
                  ></Buttons>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
}

export default JudgeAllocation;