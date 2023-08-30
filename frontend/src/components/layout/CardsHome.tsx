import { home1 } from '../../assets';
import { BookmarkSimple } from '@phosphor-icons/react';

type Cards  = {
  img: string,
  title: string,
  text: string
  subtitle: string
};

export const CardsHome = () => {


  const cards : Cards [] = [
    { 
      img: home1,
      title:'Educación',
      text: 'Proyecto E-learning con el que esperamos desarrollar un aplicacion educativa para los niños y jovenes de ecuador, asi tengan acceso a la informacion',
      subtitle: 'Educación',
    },
    { 
      img: home1,
      title:'Educación',
      text: 'Proyecto E-learning con el que esperamos desarrollar un aplicacion educativa para los niños y jovenes de ecuador, asi tengan acceso a la informacion',
      subtitle: 'Educación',
    },
    { 
      img: home1,
      title:'Educación',
      text: 'Proyecto E-learning con el que esperamos desarrollar un aplicacion educativa para los niños y jovenes de ecuador, asi tengan acceso a la informacion',
      subtitle: 'Educación',
    },
    { 
      img: home1,
      title:'Educación',
      text: 'Proyecto E-learning con el que esperamos desarrollar un aplicacion educativa para los niños y jovenes de ecuador, asi tengan acceso a la informacion',
      subtitle: 'Educación',
    },
    { 
      img: home1,
      title:'Educación',
      text: 'Proyecto E-learning con el que esperamos desarrollar un aplicacion educativa para los niños y jovenes de ecuador, asi tengan acceso a la informacion',
      subtitle: 'Educación',
    },
    { 
      img: home1,
      title:'Educación',
      text: 'Proyecto E-learning con el que esperamos desarrollar un aplicacion educativa para los niños y jovenes de ecuador, asi tengan acceso a la informacion',
      subtitle: 'Educación',
    },
  ];

  return (
  
    <div className='flex justify-center  items-center  gap-4 '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'   >
        {
          cards.map((pass, index) =>(
            <div className='' key={index} >
              <img className='w-[333px] h-[197px] object-cover shadow-md ' src={pass.img} alt="" /> 
              <div className="w-[333px] px-2 pb-5 flex flex-col justify-center items-start gap-4">
                <div className='w-[317px] h-[30px]  text-black font-Poppins text-xl font-normal mt-4'>{pass.title} </div>
                <div className='w-[317px] h-[84px] text-cards font-Poppins text-sm font-normal '>{pass.text} </div>
                <div className='w-[317px]  text-cards font-Poppins text-xs font-normal '>{pass.subtitle} </div>

                <span className="text-sm font-Poppins w-[317px]">
                  <span className="text-cards ">Recolectado </span>
                  <span className="text-primary ">$10.848 </span> 
                  <span className="text-cards ">de </span>
                  <span className="text-primary"> $10.000</span> 
                  <span className="text-cards "> Deseados </span>
                </span>
              
                <div className='flex items-start gap-4 w-[317px] '>
                  <button className='flex w-11 px-4 py-3 justify-center items-center gap-2.5  rounded border-[1px] border-[#13ADB7]'><BookmarkSimple className='text-primary text-xl' weight="thin" /></button>
                  <button className='flex px-20 py-3 justify-center gap-2.5 rounded border-[1px] border-[#13ADB7] font-Poppins text-sm font-normal text-primary '>Donar Ahora</button>
                </div>
              </div>
            </div>
          ))     }
      </div>
   
   
    </div>
  );
};
