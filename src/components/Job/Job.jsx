import { MdLocationOn } from 'react-icons/Md';
import { AiOutlineDollar } from 'react-icons/Ai';
import { Link } from 'react-router-dom';

const JobDetails = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='mt-5' src={logo} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#474747] font-semibold">{job_title}</h2>
                    <p className='text-[#757575] font-semibold'>{company_name}</p>
                    <div>
                        <button className="px-4 py-2 font-semibold border-2 rounded-lg border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        <button className="px-4 py-2 font-semibold border-2 rounded-lg border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                    </div>
                    <div className='flex'>
                        <h2 className='flex mr-4 text-base text-[#757575] font-semibold'><MdLocationOn className='text-2xl'></MdLocationOn>{location}</h2>
                        <h2 className='flex text-base text-[#757575] font-semibold'><AiOutlineDollar className='text-2xl'></AiOutlineDollar>{salary}</h2>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;