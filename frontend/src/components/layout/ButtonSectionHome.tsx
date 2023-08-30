import { AiOutlineSearch } from 'react-icons/ai';
type ButtonHome = {
  title:string,
};

export const ButtonSectionHome = () => {

  const buttonHome : ButtonHome[] = [
    { title: 'Tecnología' },
    { title: 'Nuevos' },
    { title: 'Educación' },
    { title: 'Agricultura' },
    { title: 'Salud' },
    { title: 'Movilidad' },
    { title: 'Equidad' },
    { title: 'Medio Ambiente' },    
  ];
  return (
    <div className='flex flex-col items-center gap-4 w-full md:w-[774px] mx-auto mb-10 px-4 md:px-0'>
      <form className='flex w-full md:w-[774px] h-16 rounded-full bg-[#F3F8F7] shadow px-4 py-2 md:py-5 justify-between items-center' action="">
        <input className='bg-[#F3F8F7] w-full text-sm md:text-base' type="text" placeholder='Buscar proyectos...' />
        <AiOutlineSearch className='text-2xl text-[#9EA1B4]' />
      </form>
      <div className='flex flex-wrap justify-between items-center gap-4'>
        {
          buttonHome.map((pass, index) => (
            <div key={index}>
              <button className='p-2.5 flex justify-center items-center gap-1 border-[#13ADB7] border-[1px] rounded-full text-primary text-xs font-medium'>{pass.title}</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};
