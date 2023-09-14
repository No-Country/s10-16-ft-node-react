import { Link } from 'react-router-dom';
import { readyDonaction } from '../assets';


export const ReadyDonationPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className='flex flex-col gap-6'>
        <h2 className="ml-2.5 mt-2.5 sm:mt-[63px] sm:ml-[144px] text-primary font-medium font-Ubuntu text-4xl">RallyFund</h2>
      </div>
      
      <div className="w-full md:w-[552px] h-[383px] flex flex-col justify-center items-center gap-12 mx-auto mt-20">
        <img className='w-[206px] h-[206px] object-cover shadow-md ' src={readyDonaction} alt="" /> 
        <h3 className="text-center w-full md:w-[356px] text-4xl  font-bold font-Raleway">Donación enviada</h3>
        <p className="text-center text-xl font-Poppins">Gracias por apoyar, recibiras un correo de confirmacion con tu factura en tu E-mail</p> 
      </div>

      <Link to={'/'} className='w-[564px] h-[50px] max-w-[80%] m-auto flex items-center justify-center sm:bg-primary rounded-lg text-white font-bold font-Raleway text-m hover:bg-hover'>Finalizar</Link>
    </div>
  );
};


