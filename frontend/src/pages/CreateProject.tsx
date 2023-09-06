import { useForm } from 'react-hook-form';
import { useRef } from 'react';

interface CreateProjectProps {
  projectTitle: string;
  projectDescription: string;
  projectCategory: string;
  projectImage: FileList;
  projectVideo: FileList;
  projectGoal: number;
  projectStartDate: Date;
  projectEndDate: Date;
  projectLocation: string;
  projectCurrency: string;
}

export const CreateProject: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateProjectProps>();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    // fileInputRef.current?.click(); // Optional chaining // Esto sirve para que no se caiga la app si no existe el elemento
  };

  const projectCategory = watch('projectCategory');

  const onSubmit = (data: CreateProjectProps) => {
    console.log(data);
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
              id="projectTitle"
              {...register('projectTitle', { required: true })}
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
              placeholder="Colocale un nombre al proyecto"
            />
            {errors.projectTitle && (
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
              id="projectCategory"
              {...register('projectCategory', {
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
              <option value="1" className="text-black">
                Categoria 1
              </option>
              <option value="2" className="text-black">
                Categoria 2
              </option>
              <option value="3" className="text-black">
                Categoria 3
              </option>
              <option value="4" className="text-black">
                Categoria 4
              </option>
            </select>
            {errors.projectCategory && (
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
            id="projectDescription"
            {...register('projectDescription', { required: true })}
            className="w-full h-[145px] px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
            placeholder="Busca una descripcion indicada..."
          />
          {errors.projectDescription && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>

        {/* Subir foto y video */}
        <div className="flex flex-wrap mb-4 border border-[#D7D7D7] rounded">
          {/* Subir foto */}
          <div className="flex-1 border-r text-center py-16">
            <label htmlFor="projectImage">
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
            </label>
            <input
              type="file"
              id="projectImage"
              {...register('projectImage', { required: true })}
              className="hidden"
              ref={fileInputRef}
            />
            {errors.projectImage && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>

          {/* Subir video */}
          <div className="flex-1 border-l text-center py-16">
            <label htmlFor="projectVideo">
              <button
                type="button"
                onClick={handleUploadButtonClick}
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
              {...register('projectVideo', { required: true })}
              className="hidden"
              ref={fileInputRef}
            />
            {errors.projectVideo && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
        </div>

        {/* Cantidad deseada */}
        <div className="mb-4">
          <label
            htmlFor="projectGoal"
            className="block text-2xl font-bold mb-2 text-primary"
          >
            Cantidad deseada
          </label>
          <input
            type="number"
            id="projectGoal"
            {...register('projectGoal', { required: true })}
            placeholder="Ejemplo: 1000"
            className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
          />
          {errors.projectGoal && (
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
              {...register('projectStartDate', { required: true })}
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8] uppercase"
            />
            {errors.projectStartDate && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>

          {/* Fecha de finalizacion */}
          <div className="flex-1">
            <label
              htmlFor="projectEndDate"
              className="block text-2xl font-bold mb-2 text-primary"
            >
              Fecha de finalizacion
            </label>
            <input
              type="date"
              id="projectEndDate"
              {...register('projectEndDate', { required: true })}
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8] uppercase"
            />
            {errors.projectEndDate && (
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
              {...register('projectLocation', {
                required: true,
                validate: (value) => value !== '',
              })}
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
            >
              <option value="">Elige tu pais</option>
              <option value="1">Lugar 1</option>
              <option value="2">Lugar 2</option>
              <option value="3">Lugar 3</option>
              <option value="4">Lugar 4</option>
            </select>
            {errors.projectLocation && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
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
              id="projectCurrency"
              {...register('projectCurrency', {
                required: true,
                validate: (value) => value !== '',
              })}
              className="w-full px-4 py-4 border border-[#D7D7D7] rounded bg-[#F8F8F8]"
            >
              <option value="">Elige el tipo de moneda</option>
              <option value="1">Moneda 1</option>
              <option value="2">Moneda 2</option>
              <option value="3">Moneda 3</option>
              <option value="4">Moneda 4</option>
            </select>
            {errors.projectCurrency && (
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
