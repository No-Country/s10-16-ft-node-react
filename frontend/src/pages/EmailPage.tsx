import { hand } from '../assets';
import { Link } from 'react-router-dom';

export const EmailPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col gap-6">
        <h2 className="ml-2.5 mt-2.5 sm:mt-[63px] sm:ml-[144px] text-primary font-medium font-Ubuntu text-4xl">
          RallyFund
        </h2>
        <div className="max-w-[80%] m-auto sm: w-[430px] flex flex-col items-center gap-12">
          <img src={hand} alt="email enviado" className="m-auto" />
          <h3 className="text-[40px] font-bold">¡Casi Listo!</h3>
          <p className="text-lg  font-Poppins text-center">
            Te enviamos por correo electrónico el link para confirmar tu cuenta.
            Por favor revisalo para confirmar.
          </p>
          <p className="font-Raleway text-sm">
            ¿No te llego el correo?{' '}
            <Link to={'#'} className="text-primary font-bold underline">
              Reenviar código
            </Link>
          </p>
        </div>
        <button className="max-w-[80%] m-auto sm: w-[564px] h-[50px] bg-primary rounded-lg text-white font-bold font-Raleway hover:bg-hover transition-all duration-300">
          Continuar
        </button>
      </div>
    </div>
  );
};
