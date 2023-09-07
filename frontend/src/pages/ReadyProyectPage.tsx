import { ready } from '../assets';

 

export const ReadyProyectPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className='flex flex-col gap-6'>
        <h2 className="ml-2.5 mt-2.5 sm:mt-[63px] sm:ml-[144px] text-primary font-medium font-Ubuntu text-4xl">RallyFund</h2>
      </div>
        
      <div className="w-full md:w-[552px] h-[383px] flex flex-col justify-center items-center gap-12 mx-auto mt-20">
        <img className='w-[265px] h-[191px] object-cover shadow-md ' src={ready} alt="" /> 
        <h3 className="text-center w-full md:w-[356px] text-5xl  font-bold font-Raleway">Todo Listo</h3>
        <p className="text-center text-xl font-Poppins">Tu proyecto esta publicado, esperamos recaudes lo esperado.</p> 
      </div>

      <button className='w-[564px] h-[50px] max-w-[80%] m-auto sm:  bg-primary rounded-lg text-white font-bold font-Raleway text-m hover:bg-hover'>Finalizar</button>
    </div>
  );
};
