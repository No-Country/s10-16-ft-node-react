import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { collection, addDoc } from 'firebase/firestore';
import db, { storage } from '../api/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


interface CreateProjectProps {
  tittle: string,
  description: string,
  goal_currency: string,
  goal_amount: number,
  goal_acumulated: number,
  category_id: string,
  end_of_fundraiser: string,
  image: FileList | string
  /* image: string */
}

export const CreateProject: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateProjectProps>();

  const [token, setToken] = useState<string | null>('');
  
  
  useEffect(()=>{
    if (sessionStorage.getItem('token')) {
      setToken(sessionStorage.getItem('token'));
    } else {
      setToken('');
    }
  }, []);

  const projectCategory = watch('category_id');

  const handleFileUpload = async (file: File) => {
    console.log(file);
    try {
      const filename = `${crypto.randomUUID()}-${crypto.randomUUID()}`;
      const storageRef = ref(storage, `images/${filename}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      return url;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data: CreateProjectProps) => {
    console.log(data);

    let dowloadURL = '';
    
    if (typeof data.image !== 'string') {
      const fileInput = data.image as FileList;
      const selectedFile = fileInput.item(0);
    
      if (selectedFile) {
        const urlAsyncStorage = await handleFileUpload(selectedFile);
        if (urlAsyncStorage) {
          dowloadURL = urlAsyncStorage; 
        }
      } else {
        console.error('No se ha seleccionado ningún archivo.');
      }
    }
  
    if (token === null || token === '') {
      navigate('/auth/login');
    } else {
      try {
        const newData : CreateProjectProps = {
          ...data, 
          goal_amount: Number(data.goal_amount),
          goal_acumulated: 0, 
          end_of_fundraiser: new Date(data.end_of_fundraiser).toISOString(),
          image: dowloadURL,
        };
        await addDoc(collection(db, 'projects'), newData);
        console.log('Datos guardados en Firestore', newData);
      } catch (error) {
        console.log('Error al guardar datos en Firestore', error);
      }

      navigate('/loadingProject');
    }
  };

  return (
    <div className="bg-background pb-10">
      <div>
        <h1 className="text-4xl font-medium font-Ubuntu text-primary text-center py-10">
          RallyFund
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden p-6 shadow-xl"
      >
        {/* Empieza una campaña / titulo y subtitulo */}
        <div>
          <h1 className="text-4xl font-bold font-Raleway text-primary p-3">
            Empieza una campaña
          </h1>
          <p className="text-xl font-Poppins p-3 my-4">
            Añade toda la informacion necesaria para este proyecto, recuerda
            seguir los{' '}
            <a href="#" className="text-[#13ADB7] underline">
              terminos y condiciones
            </a>
          </p>
        </div>

        {/* Inicio de formulario */}

        {/* Titulo y seleccion de categoria */}
        <div className="flex flex-wrap mb-4 gap-6">
          {/* Titulo */}
          <div className="flex-1">
            <label
              htmlFor="projectTitle"
              className="block text-2xl font-bold mb-2 text-primary"
            >
              Titulo del proyecto
            </label>
            <input
              type="text"
              id="tittle"
              {...register('tittle', { required: true })}
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
              placeholder="Colocale un nombre al proyecto"
            />
            {errors.tittle && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
          {/* Seleccion categoria */}
          <div className="flex-1">
            <label
              htmlFor="projectCategory"
              className="block text-2xl font-bold mb-2 text-primary"
            >
              Selecciona la categoria
            </label>
            <select
              id="category_id"
              {...register('category_id', {
                required: true,
                validate: (value) => value !== '',
              })}
              className={`w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8] ${
                projectCategory === '' ? 'text-[#a8a3b6]' : ''
              }`}
            >
              <option value="" className="text-black">
                Selecciona la categoria del proyecto
              </option>
              <option value="Tecnología" className="text-black">
                Tecnología
              </option>
              <option value="Educación" className="text-black">
                Educación
              </option>
              <option value="Agricultura" className="text-black">
                Agricultura
              </option>
              <option value="Salud" className="text-black">
                Salud
              </option>
              <option value="Movilidad" className="text-black">
                Movilidad
              </option>
              <option value="Equidad" className="text-black">
                Equidad
              </option>
              <option value="Medio ambiente" className="text-black">
                Medio ambiente
              </option>
            </select>
            {errors.category_id && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
        </div>

        {/* Descripcion del proyecto */}
        <div className="mb-4">
          <label
            htmlFor="projectDescription"
            className="block text-2xl font-bold mb-2 text-primary"
          >
            Describe tu proyecto
          </label>
          <textarea
            id="description"
            {...register('description', { required: true })}
            className="w-full h-[145px] px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
            placeholder="Busca una descripcion indicada..."
          />
          {errors.description && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>

        {/* Subir foto y video */}
        <div className="flex flex-wrap mb-4 border border-[#D7D7D7] rounded">
          {/* Subir foto */}
          <div className="flex-1 border-r text-center py-16">
            {/* <label htmlFor="projectImage">
              <button
                type="button"
                onClick={handleUploadButtonClick}
                className="px-12 py-2 text-primary bg-[#F2F5F7] border border-[#13ADB7] rounded mx-auto block hover:bg-primary hover:text-white transition-all duration-500"
              >
                Subir una foto
              </button>
              <span className="block font-semibold text-[#BEBEBE] py-1">
                1087 x 290px
              </span>
            </label> */}
            <input
              type="file"
              id="image"
              accept='image/*'
              {...register('image', { required: false })}
              className='bg-primary text-white font-Poppins'
            />
            {/* {selectedFile && imgPreview && (
              <img
                src={imgPreview}
                alt="preview"
                className="mx-auto w-1/2 h-1/2"
              />
            )} */}

            {/* {errors.image && (
              <span className="text-red-500">Este campo es requerido</span>
            )} */}
          </div>

          {/* Subir video */}
          <div className="flex-1 border-l text-center py-16">
            <label htmlFor="projectVideo">
              <button
                type="button"
                // onClick={handleUploadButtonClick}
                className="px-12 py-2 text-primary bg-[#F2F5F7] border border-[#13ADB7] rounded mx-auto block hover:bg-primary hover:text-white transition-all duration-500"
              >
                Subir un video
              </button>
              <span className="block font-semibold text-[#BEBEBE] py-1">
                mp4, m4a, mkv
              </span>
            </label>
            <input
              type="file"
              id="projectVideo"
              /* {...register('projectVideo', { required: false })} */
              className="hidden"
              // ref={fileInputRef}
            />
            {/* {errors.projectVideo && (
              <span className="text-red-500">Este campo es requerido</span>
            )} */}
          </div>
        </div>

        {/* Cantidad deseada */}
        <div className="mb-4">
          <label
            htmlFor="goal_amount"
            className="block text-2xl font-bold mb-2 text-primary"
          >
            Cantidad deseada
          </label>
          <input
            type="number"
            id="goal_amount"
            {...register('goal_amount', { required: true })}
            placeholder="Ejemplo: 1000"
            className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
            accept="image/*"
          />
          {errors.goal_amount && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>

        {/* Fechas */}
        <div className="flex flex-wrap mb-4 gap-6">
          {/* Fecha de inicio */}
          <div className="flex-1">
            <label
              htmlFor="projectStartDate"
              className="block text-2xl font-bold mb-2 text-primary"
            >
              Fecha de inicio
            </label>
            <input
              type="date"
              id="projectStartDate"
              /*               {...register('projectStartDate', { required: true })}
 */              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8] uppercase"
            />
            {/* {errors.projectStartDate && (
              <span className="text-red-500">Este campo es requerido</span>
            )} */}
          </div>

          {/* Fecha de finalizacion */}
          <div className="flex-1">
            <label
              htmlFor="end_of_fundraiser"
              className="block text-2xl font-bold mb-2 text-primary"
            >
              Fecha de finalizacion
            </label>
            <input
              type="date"
              id="end_of_fundraiser"
              {...register('end_of_fundraiser', { required: true })}
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8] uppercase"
            />
            {errors.end_of_fundraiser && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
        </div>

        {/* Ubicacion y tipo de moneda */}
        <div className="flex flex-wrap mb-4 gap-6">
          {/* Ubicacion */}
          <div className="flex-1">
            <label
              htmlFor="projectLocation"
              className="block text-2xl font-bold mb-2 text-primary"
            >
              Elige tu pais
            </label>
            <select
              id="projectLocation"
              /* {...register('projectLocation', {
                required: true,
                validate: (value) => value !== '',
              })} */
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
            >
              <option value="">Elige tu pais</option>
              <option value="1">Lugar 1</option>
              <option value="2">Lugar 2</option>
              <option value="3">Lugar 3</option>
              <option value="4">Lugar 4</option>
            </select>
            {/* {errors.projectLocation && (
              <span className="text-red-500">Este campo es requerido</span>
            )} */}
          </div>

          {/* Tipo de moneda */}
          <div className="flex-1">
            <label
              htmlFor="projectCurrency"
              className="block text-2xl font-bold mb-2 text-primary"
            >
              Tipo de moneda
            </label>
            <select
              id="goal_currency"
              {...register('goal_currency', {
                required: true,
                validate: (value) => value !== '',
              })}
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
            >
              <option value="">Elige el tipo de moneda</option>
              <option value="$">ARS</option>
              <option value="$">USD</option>
            </select>
            {errors.goal_currency && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
        </div>

        {/* Boton de crear */}
        <button
          type="submit"
          className="mt-10 mb-5 px-32 py-3 text-white bg-primary mx-auto block font-Poppins text-2xl font-bold hover:bg-[#108087] transition-all duration-300"
        >
          Crear ahora
        </button>
      </form>
    </div>
  );
};
