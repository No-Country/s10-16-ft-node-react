// import { useAuthStore } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export const LoadingProjectPage = () => {
  const navigate = useNavigate();
  // const isProject = useAuthStore((state)=> state.project);

  // console.log(isProject);


  setTimeout(() => {
    navigate('/ready');
  }, 5000); // 5 segundos

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className='flex flex-col gap-6'>
        <h2 className="ml-2.5 mt-2.5 sm:mt-[63px] sm:ml-[144px] text-primary font-medium font-Ubuntu text-4xl">RallyFund</h2>
      </div>
      
      <div className="w-full md:w-[552px] h-[314px] flex flex-col justify-center items-center gap-10 mx-auto mt-20">
        <h3 className="text-center w-full md:w-[356px] text-4xl  font-bold font-Raleway">Creando tu Funding</h3>
        <p className="text-center text-xl  font-Poppins">Lleva tus sueños donde merecen estar</p>

        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#13ADB7] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </div>

    </div>
  );
};
