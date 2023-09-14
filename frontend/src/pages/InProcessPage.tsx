


export const InProcessPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className='flex flex-col gap-6'>
        <h2 className="ml-2.5 mt-2.5 sm:mt-[63px] sm:ml-[144px] text-primary font-medium font-Ubuntu text-4xl">RallyFund</h2>
      </div>
        
      <div className="w-full md:w-[552px] h-[314px] flex flex-col justify-center items-center gap-10 mx-auto mt-20">
        <h3 className="text-center w-full md:w-[356px] text-2xl md:text-5xl font-bold font-Raleway">Transacción en proceso</h3>
        <p className="text-center text-base md:text-xl font-Poppins">Ayudando proyectos increíbles</p>

        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#13ADB7] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </div>



      <button className='w-[564px] h-[50px] max-w-[80%] m-auto sm:  bg-primary rounded-lg text-white font-bold font-Raleway text-m hover:bg-hover'>Finalizar</button>
    </div>
  
  );
};
