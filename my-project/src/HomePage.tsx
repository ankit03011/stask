import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => navigate('/services/new')}
      >
        Go to Services
      </button>
    </div>
//     <div className=' flex  bg-slate-600'>
//         <div className=" h-screen bg-slate-200 w-[5%]">1</div>
//         <div className="  bg-green-300 h-10 w-full">
//             <h1>Well Come</h1>
//         </div>
     
//     </div>
  );
};

export default HomePage;
