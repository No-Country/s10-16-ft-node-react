import { world, paso1, paso2, paso3, saly } from '../assets';

type Paso = {
  img: string,
  paso: string,
  text: string
};

export const HomePage = () => {

  const paso : Paso[] = [
    { img: paso1, paso: 'Paso 1', text: 'Explora entre cientos de proyectos innovadores' },
    { img: paso2, paso: 'Paso 2', text: 'Explora entre cientos de proyectos innovadores' },
    { img: paso3, paso: 'Paso 3', text: 'Explora entre cientos de proyectos innovadores' },
  ];

  return (
    <section className=" " >

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

      <div className='flex w-full py-2.5 justify-center items-center' >
        <h2 className=" text-primary text-center font-Raleway text-[35px]  font-bold leading-[50px] py-2.5 gap-[10px] ">¿Cómo Funciona?</h2>
      </div>

      <div className='flex w-screen justify-around items-start flex-col md:flex-row md:items-center'>
        {
          paso.map((pass, index) =>(
            <div key={index} >
              <img src={pass.img} />
              <p className='flex flex-col items-center gap-[6px] text-[#6E6E6E] text-center font-Ubuntu text-base font-normal leading-6 ' >{pass.paso}</p>
              <p className=' w-[243px]  text-[#6E6E6E]  text-center  font-Ubuntu text-sm font-normal leading-6  ' >{pass.text}</p>
            </div>
          ))
        }
      </div>

    </section>
  );
};
  

