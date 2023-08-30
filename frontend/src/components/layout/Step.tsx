import { paso1, paso2, paso3 } from '../../assets';

type StepG = {
  img: string,
  paso: string,
  text: string
};

export const Step = () => {

  const step : StepG[] = [
    { img: paso1, paso: 'Paso 1', text: 'Explora entre cientos de proyectos innovadores' },
    { img: paso2, paso: 'Paso 2', text: 'Explora entre cientos de proyectos innovadores' },
    { img: paso3, paso: 'Paso 3', text: 'Explora entre cientos de proyectos innovadores' },
  ]; 
  return (
  
    <div className='   flex justify-around items-center flex-col md:flex-row '>
      {
        step.map((pass, index) =>(
          <div key={index} >
            <img src={pass.img} />
            <p className='flex flex-col items-center gap-[6px] text-[#6E6E6E] text-center font-Poppins text-2xl font-bold ' >{pass.paso}</p>
            <p className=' w-60  text-[#6E6E6E]  text-center  font-Poppins text-base font-normal ' >{pass.text}</p>
          </div>
        ))
      }
    </div>
  );
};
