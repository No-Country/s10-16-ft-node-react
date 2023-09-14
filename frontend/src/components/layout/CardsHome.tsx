// import { Link } from 'react-router-dom';
// import { useAuthStore } from '../../api/auth';
import { useEffect, useState } from 'react';
import { useFilterStore, useSearchStore } from '../../store/store';
import db from '../../api/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { PopUpDon } from './PopUpDon/PopUpDon';

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
    console.error(
      'Error al quitar acentos y poner la letra en minuscula',
      error,
    );
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
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    try {
      const projectsCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as Project,
      );
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

  const filteredProjects = projects?.filter((project) => {
    try {
      return filter
        ? removeAccentsAndLowerCase(project.category_id).includes(
          removeAccentsAndLowerCase(filter),
        )
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

  console.log('projects', projects);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  return (
    <div className="flex justify-center  items-center  gap-4 " id="proyecto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchFilteredProjects?.map((project, index) => (
          <div className="" key={index}>
            <img
              className="w-[333px] h-[197px] object-cover shadow-md "
              src={project.image}
              alt=""
            />
            <div className="w-[333px] h-[300px] px-2 pb-5 flex flex-col justify-center items-start gap-4">
              <div className="w-[317px] h-[40px]  text-black font-Poppins text-xl font-normal mt-4">
                {project.tittle}
              </div>
              <div className="w-[317px] h-[84px] overflow-y-auto text-cards font-Poppins text-sm font-normal ">
                {project.description}
              </div>
              <div className="w-[317px]  text-cards font-Poppins text-xs font-normal ">
                {project.category_id}
              </div>

              <div className="text-sm font-Poppins w-[317px]">
                <p className="text-cards ">
                  Recolectado {' '}
                  <span className="text-primary ">
                    {project.goal_currency}
                    {project.goal_acumulated}
                  </span>
                  {' '} de {' '}
                  <span className="text-primary">
                    {project.goal_currency}
                    {project.goal_amount}
                  </span>
                  {' '} Deseados
                </p>
              </div>

              {/* <div className="flex gap-4 w-[317px] justify-center">
                <Link
                  to={`/detail/${project.id}`}
                  className="flex px-20 py-3 justify-center gap-2.5 rounded border-[1px] border-[#13ADB7] font-Poppins text-sm font-normal text-primary "
                >
                  Donar Ahora
                </Link>
              </div> */}

              <div className="flex gap-4 w-[317px] justify-center">
                <button
                  className="flex px-20 py-3 justify-center gap-2.5 rounded border-[1px] border-[#13ADB7] font-Poppins text-sm font-normal text-primary hover:bg-hover hover:text-white transition-all duration-300 ease-in-out"
                  type='button'
                  onClick={() => {
                    setSelectedProject(project);
                    setShowModal(true);
                  }}
                >
                  Donar Ahora
                </button>
                {showModal && selectedProject ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none drop-shadow-2xl">
                      <div className="relative w-auto my-6 mt-12 mx-auto max-w-3xl ">
                        {/*content*/}
                        <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                          <div className="flex items-center text-center p-5 pl-14 border-b border-solid border-slate-200">
                            <h3 className="text-3xl font-semibold">
                              Estas donando a {selectedProject.tittle}
                            </h3>
                            <button
                              className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:scale-125 transition-all duration-300 ease-in-out"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                X
                              </span>
                            </button>
                          </div>
                          <div className='md:overflow-y-auto mb-6 bg-[#f2f5f7]'>
                            <PopUpDon project={selectedProject} closeModal={closeModal} />
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </> 
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
