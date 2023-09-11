import { Link } from 'react-router-dom';
import { home1 } from '../../assets';
import { BookmarkSimple } from '@phosphor-icons/react';
import { useAuthStore } from '../../api/auth';
import { useEffect } from 'react';

type Cards  = {
  img: string,
  title: string,
  text: string
  subtitle: string
};

export const CardsHome = () => {

  const projects = useAuthStore((state)=>state.projects);
  const findProjects = useAuthStore((state)=>state.findProjects);
  
  useEffect(()=>{
    findProjects();   
  }, [findProjects]);



  return (
  
    <div className='flex justify-center  items-center  gap-4 ' id='proyecto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'   >
        {
          projects.map((project, index) =>(
            <div className='' key={index} >
              <img className='w-[333px] h-[197px] object-cover shadow-md ' src="" alt="" /> 
              <div className="w-[333px] px-2 pb-5 flex flex-col justify-center items-start gap-4">
                <div className='w-[317px] h-[30px]  text-black font-Poppins text-xl font-normal mt-4'>{project.tittle} </div>
                <div className='w-[317px] h-[84px] text-cards font-Poppins text-sm font-normal '>{project.description} </div>
                <div className='w-[317px]  text-cards font-Poppins text-xs font-normal '> {project.category_id} </div>

                <div className="text-sm font-Poppins w-[317px]">
                  <p className="text-cards ">Recolectado <span className="text-primary "> $10.848 </span> de <span className="text-primary"> ${project.goal_amount} </span> Deseados </p>
                </div>
              
                <div className='flex items-start gap-4 w-[317px] '>
                  <button className='flex w-11 px-4 py-3 justify-center items-center gap-2.5  rounded border-[1px] border-[#13ADB7]'><BookmarkSimple className='text-primary text-xl' weight="thin" /></button>
                  <Link to={`/detail/${project.id}`} className='flex px-20 py-3 justify-center gap-2.5 rounded border-[1px] border-[#13ADB7] font-Poppins text-sm font-normal text-primary '>Donar Ahora</Link>
                </div>
              </div>
            </div>
          ))     }
      </div>
   
   
    </div>
  );
};
