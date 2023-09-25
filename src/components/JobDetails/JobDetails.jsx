import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 p-2">
                        <h2 className="text-4xl">Details coming here</h2>
                        <h2><span className="font-semibold">Job Details of: </span>{job.job_title}</h2>
                        <p><span className="font-semibold">Job Description:</span> {job.job_description}</p>
                        <p><span className="font-semibold">Job Responsibility: </span>{job.job_responsibility}</p>
                        <p><span className="font-semibold">Educational Requirement:</span> {job.educational_requirements} </p>
                        <p><span className="font-semibold">Experiences:</span> {job.experiences}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl font-semibold">Job Details</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;