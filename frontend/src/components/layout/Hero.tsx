import { home1 } from '../../assets';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../api/auth';


export const Hero = () => {
  const login = useAuthStore((state)=>state.loginUser);

  return (
    <div className='relative  ' id='inicio'>
      <img className='w-full object-cover' src={home1} alt="" />
      <div className='absolute inset-0 flex flex-col justify-center items-center mt-8 md:mt-0 '>
        <h1 className=' text-primary  font-Raleway text-3xl md:text-5xl lg:text-6xl font-bold text-center'>RallyFound</h1>
        <p className='text-white font-Raleway my-4 text-sm md:text-2xl lg:text-4xl text-center w-full md:w-[619px] h-[78px] ' >Invierte en Innovación: Emprende el Cambio, Inspira el Futuro</p>
        <div className='flex gap-8'>
          <a href="#projects" className='text-white font-Raleway text-lg md:text-xl lg:text-2xl font-bold leading-5 flex p-[12px] md:p-[16px] rounded-lg bg-primary mx-auto mb-6 md:mb-0'>
            Apoya Ahora
          </a>       
          {
            login 
              ? <Link to='/createProject' className='text-white font-Raleway text-lg md:text-xl lg:text-2xl font-bold leading-5 flex p-[12px] md:p-[16px] rounded-lg bg-primary hover:bg-hover'>Crear Proyecto</Link>
              : <Link to='/auth/login' className='text-white font-Raleway text-lg md:text-xl lg:text-2xl font-bold leading-5 flex p-[12px] md:p-[16px] rounded-lg bg-primary hover:bg-hover'>Crear Proyecto</Link>
          }       
        </div>
      </div>
    </div>
  );
};
