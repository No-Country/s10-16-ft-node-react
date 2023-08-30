import {  home2, home3 } from '../assets';
import { Hero, CardsHome, Step, ButtonSectionHome } from '../components/layout';



export const HomePage = () => {



  return (
    <div className='w-full bg-backgroundHome'>
      <div><Hero/></div>
     
      <div className='flex w-full py-10 justify-center items-center gap-2.5' >
        <h2 className=" text-primary text-center font-Raleway text-4xl  font-bold   ">¿Cómo Funciona?</h2>
      </div>

      <div><Step/></div>

      <div className='flex w-full py-10 justify-center items-center  ' >
        <h2 className=" text-primary text-center font-Raleway text-4xl  font-bold gap-2.5  ">Proyectos Abiertos</h2>
      </div>

      <div>
        <ButtonSectionHome/>
      </div>

      <div >   <CardsHome/></div>


      <div className='flex w-full py-10 md:py-20 flex-col items-center'>
        <div className='flex flex-col md:flex-row w-full mx-auto py-10 md:py-20 items-center  justify-center bg-primary'>
          <div className='flex p-4 md:p-6 items-center gap-4 self-stretch justify-center'>
            <h4 className='text-white text-2xl md:text-2xl lg:text-4xl font-bold '>1M+</h4>
            <p className='w-24 md:w-44 text-white font-Poppins text-xs md:text-sm lg:text-base font-normal'>Proyectos en listados en nuestra plataforma</p>
          </div>
          <div className='flex p-4 md:p-6 items-center gap-4 self-stretch justify-center'>
            <h4 className='text-white text-2xl md:text-2xl lg:text-4xl font-bold '>98%</h4>
            <p className='w-24 md:w-44 text-white font-Poppins text-xs md:text-sm lg:text-base font-normal'>De Crowfundings logran sus objetivos</p>
          </div>
          <div className='flex p-4 md:p-6 items-center gap-4 self-stretch justify-center'>
            <h4 className='text-white text-2xl md:text-2xl lg:text-4xl font-bold '>4.9</h4>
            <p className='w-24 md:w-44 text-white font-Poppins text-xs md:text-sm lg:text-base font-normal'>De 5 estrellas entre las mejores Crowfundings</p>
          </div>
        </div>
      </div>

      <div className='relative'>
        <img className='w-full object-cover' src={home2} alt="" />
        <div className='absolute inset-0 flex flex-col justify-center items-center mt-8 md:mt-0'>
          <h4 className='text-white font-Raleway text-3xl md:text-5xl lg:text-7xl text-center font-bold'>Apoya los mejores Proyectos</h4>
          <p className='text-white font-Raleway text-lg  lg:text-4xl text-center w-full md:w-[619px] h-[78px] mt-2 md:mt-4'>Dirigidos por emprendedoras</p>
          <button className='text-white font-Raleway text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-5 flex p-[12px] md:p-[16px] rounded-lg bg-primary mx-auto mb-6 md:mb-0'>Apoya Ahora</button>
        </div>
      </div>

      <div className='flex w-full py-20   justify-center items-center'>
        <div className='flex flex-col md:flex-row w-[1039px] justify-center items-center  md: mx-6 lg:mx-0 gap-16 '>
          <img className='w-[432px] h-[473px] object-cover rounded-xl ' src={home3} alt="" />
          <div className='flex flex-col  items-start gap-6 '>
   
            <p>RallyFund y su genial comunidad han llevado mi proyecto innovador a alcanzar cientos de personas alrededor del mundo.</p>

            <p>Regina Miles</p>
            <p>Designer</p>
    
          </div>
        </div>
      </div>


 



    </div>



    
  /*  <section className=" " >

      <div className='w-full  relative '>
        <img src= {world }alt="" className='w-screen  ' />
        <div className='absolute inset-0 flex justify-center items-center'> 
          <div className="text-center " >
            <h1 className=' text-primary  font-Raleway text-[66px] font-bold '>RallyFound</h1>
            <p className='text-white font-Ubuntu text-sm font-normal' >Invierte en Innovación: Emprende el Cambio, Inspira el Futuro</p>
            <button className='text-white font-Ubuntu text-lg font-medium leading-5 flex p-[10px] rounded-lg bg-primary mx-auto mt-8 ' >Apoya Ahora</button>
          </div>
        </div>
        <div className='absolute right-[83px] inset-y-1/4  '>
          <img src= {saly }alt='' className='w-[422px] h-[422px] '/>
        </div>
      </div>

     

    </section> */
  );
};
  

