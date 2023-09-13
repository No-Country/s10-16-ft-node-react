import { Link } from 'react-router-dom';
import { BookmarkSimple } from '@phosphor-icons/react';
// import { useAuthStore } from '../../api/auth';
import { useEffect, useState } from 'react';
import { useFilterStore, useSearchStore } from '../../store/store';
import db from '../../api/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function removeAccentsAndLowerCase(text: string) {
  try {
    // Validar que el texto sea un string y no sea null
    if (typeof text !== 'string' || !text) {
      return '';
    }

    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  } catch (error) {
    console.error('Error al quitar acentos y poner la letra en minuscula', error);
    return '';
  }
}

type Project = {
  id: string;
  category_id: string;
  tittle: string;
  description: string;
  goal_amount: number;
  goal_acumulated: number;
  goal_currency: string;
  end_of_fundraiser: string;
  image: string;
};

export const CardsHome = () => {
  // const projects = useAuthStore((state)=>state.projects);
  // const findProjects = useAuthStore((state)=>state.findProjects);

  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    try {
      const projectsCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }) as Project);
      setProjects(projectsList);
    } catch (error) {
      console.error('Error al obtener los proyectos', error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  
  // useEffect(()=>{
  //   try {
  //     findProjects();   
  //   } catch (error) {
  //     console.error('Error al cargar los proyectos', error);
  //   }
  // }, [findProjects]);


  const filter = useFilterStore((FilterStoreState) => FilterStoreState.filter);
  const search = useSearchStore((SearchStoreState) => SearchStoreState.search);
    
  const filteredProjects = projects?.filter((project) =>{
    try {
      return filter
        ? removeAccentsAndLowerCase(project.category_id).includes(removeAccentsAndLowerCase(filter))
        : true;
    } catch (error) {
      console.error('Error al filtrar los proyectos:', error);
      return false;
    }    
  });

  const searchFilteredProjects = filteredProjects?.filter((project) => {
    const tittle = removeAccentsAndLowerCase(project.tittle);
    const description = removeAccentsAndLowerCase(project.description);
    const category = removeAccentsAndLowerCase(project.category_id);
    const searchInput = removeAccentsAndLowerCase(search);

    // Verifica si la busqueda esta vacia o no antes de aplicar el filtro
    if (!searchInput) {
      return true;
    }

    try {
      return (
        tittle.includes(searchInput) ||
        description.includes(searchInput) ||
        category.includes(searchInput)
      );
    } catch (error) {
      console.error('Error al filtrar los proyectos por busqueda:', error);
      return false;
    }
    
  });

  return (
    <div className='flex justify-center  items-center  gap-4 ' id='proyecto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          searchFilteredProjects?.map((project, index) =>(
            <div className='' key={index} >
              <img className='w-[333px] h-[197px] object-cover shadow-md ' src={project.image} alt="" /> 
              <div className="w-[333px] px-2 pb-5 flex flex-col justify-center items-start gap-4">
                <div className='w-[317px] h-[30px]  text-black font-Poppins text-xl font-normal mt-4'>{project.tittle} </div>
                <div className='w-[317px] h-[84px] text-cards font-Poppins text-sm font-normal '>{project.description} </div>
                <div className='w-[317px]  text-cards font-Poppins text-xs font-normal '> {project.category_id} </div>

                <div className="text-sm font-Poppins w-[317px]">
                  <p className="text-cards ">Recolectado <span className="text-primary "> {project.goal_currency}{project.goal_acumulated} </span> de <span className="text-primary"> {project.goal_currency}{project.goal_amount} </span> Deseados </p>
                </div>
              
                <div className='flex items-start gap-4 w-[317px] '>
                  <button className='flex w-11 px-4 py-3 justify-center items-center gap-2.5  rounded border-[1px] border-[#13ADB7]'><BookmarkSimple className='text-primary text-xl' weight="thin" /></button>
                  <Link to={`/detail/${project.id}`} className='flex px-20 py-3 justify-center gap-2.5 rounded border-[1px] border-[#13ADB7] font-Poppins text-sm font-normal text-primary '>Donar Ahora</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
