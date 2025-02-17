import { Suspense, lazy } from 'react';
import { FormsBanner, NoteBox } from '../components';
import { useGetLabAllocations } from '../hooks/admin.hooks';

const Table = lazy(() => import('../components/table.jsx'))

function ProjectsLabAllocation() {
    const { data: conceptsData, isLoading: isConceptsLoading } = useGetLabAllocations('concepts')

    const columns = [
        {
            name: 'PROJECT ID',
            selector: row => row['pid'],
            cellExport: row => row['pid'],
            width: '180px',
            sortable: true
        },
        {
            name: 'PROJECT TITLE',
            selector: row => row['title'],
            cellExport: row => row['title'],
            width: '240px',
        },
        {
            name: 'LAB ASSIGNED',
            selector: row => row['lab'],
            cellExport: row => row['lab'],
            width: '180px',
            sortable: true
        },
        {
            name: 'JUDGES ASSIGNED FOR DAY TWO',
            cell: row => row['jids']?.join(', '),
            ignoreRowClick: true,
            grow: 2,
            width: '1000px',
        }
    ];

    return (
        <>
            <FormsBanner eventName='Project-To-Lab Allocations' eventDescription='Please find below the list of project id and allocated judge id for day two ( 6th April 2024 ).' />
            <h1 className='text-4xl text-center mt-6 text-gold font-bold'>Concepts</h1>
            {!isConceptsLoading ?
                <Suspense fallback={<div>Loading Allocations...</div>}>
                    <Table
                        title={`Concepts Lab Allocations`}
                        columns={columns}
                        loading={isConceptsLoading}
                        data={conceptsData?.data}
                        outerClassName='mx-auto mb-10 md:w-[75%] w-full mx-5'
                        paginationPerPage={50}
                        pagination
                        searchPlaceholder='Search by Project ID or Title'
                    />
                </Suspense> :
                <div className='text-center text-2xl'>Loading Allocations...</div>


            }

            <div className='mx-5 md:mx-20 lg:mx-40 mt-5'>
                <div className='w-full rounded-lg outline-dashed outline-2 outline-offset-[3px] outline-light_blue px-4 py-2 bg-faint_blue/10 mb-3 text-lg text-justify'>
                    <span className='font-bold text-faint_blue/80 italic pr-2 text-justify'>NOTE : </span>
                    You are requested to visit the schedule along with lab allocation regularly on the website in case of any deviation. The schedule is also emailed to the team leader. Apart from the above allocation, there may be many visitors, judges, company delegates who will access your project for various awards, internships, pre-placement offers/placement, etc. In case of any queries please contact Sarthak at :
                    <span className='text-[#5a5abd]'>  &nbsp;
                        <a href='tel:+918180909092' className='text-blue-500 font-bold'>+91 8180909092</a>
                    </span>
                </div>

                {/* <NoteBox title="NOTE" text="You are requested to visit the schedule along with lab allocation regularly on website in case of any deviation. Schedule is also emailed to the team leader. Apart from the above allocation their may be many visitors judges, company deligates , who will acess your project for various awards internship,pre placement offer/placement, etc. 

In case of any queries please contact Sarthak at +91 8180909092" /> */}
            </div>




        </>
    )
}

export default ProjectsLabAllocation;
