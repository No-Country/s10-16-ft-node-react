import { CheckBox } from '../../components';
import { master, visa, google, apple } from '../../assets';
import { CaretLeft } from '@phosphor-icons/react';
import { FC, useState } from 'react';
import db from '../../api/firebaseConfig';
import { updateDoc, doc } from 'firebase/firestore';
import { PaymentForm } from '../../pages';
import { useNavigate } from 'react-router-dom';

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

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  project: Project
  category: string;
  isChecked: boolean; // Recibe la prop isChecked
  selectedValue: number | string; // Recibe la prop selectedValue
  onCheckboxChange: () => void; // Recibe la prop onCheckboxChange
  onCheckboxClick: (value: string | number) => void;
  id: string;
  setSelectedValue: (value: number ) => void
};

const calcularPorcentaje = (selectedValue: number, tax: number): number => {
  // Calcula el resultado restando el porcentaje de la cantidad original
  const result = selectedValue - (selectedValue * tax) / 100;
  return result;
};
const updateGoalAcumulated = async (id: string, newGoalAcumulated: number, project: Project) => {
  const documentRef = doc(db, 'projects', id); // Reemplaza 'tu_coleccion' y 'documentId' con los valores correctos
  try {
    await updateDoc(documentRef, {
      goal_acumulated: project.goal_acumulated + newGoalAcumulated,
      
    },
    );
    console.log(project.goal_acumulated);
    console.log('Campo "goal_acumulated" actualizado exitosamente en Firestore.');
  } catch (error) {
    console.error('Error al actualizar el campo "goal_acumulated" en Firestore:', error);
  }
};
export const PopUpDonation: FC<PopupProps> = ({ isOpen, onClose, image, category, isChecked, selectedValue, onCheckboxClick, id, setSelectedValue, project }) => {
  const navigate = useNavigate();
  // const [selectedValue, setSelectedValue] = useState<number | string >(0);
  // const [isChecked, setIsChecked] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [isOpenPayment, setIsOpenPayment] = useState(false);

  const handleButtonClick = () => {
    setIsOpenPayment(true);
  };

  
  if (!isOpen) {
    return null;
  }

  
  // const handleCheckboxClick = (value: string | number ) => {
  //   setSelectedValue(value);
  //   setIsChecked(value === 'otro');
  // };

  const handleCheckboxPayment = (value: string)=>{
    setSelectedPayment(value);
  };
  
  const cantidad = [50, 100, 200, 500, 750, 1000, 1500, 'otro'];
  const payment = [{ img: master, img1: visa, pay: 'Credit or debit card' }, { img: google, pay: 'Google pay' }, { img: apple, pay: 'Apple pay' }];
  
  const tax = 1;
  const result = calcularPorcentaje(
    typeof selectedValue === 'number' ? selectedValue : 0,
    tax,
  );

  
    
  const handlePayment = async () => {
  
    try {
      const res = await updateGoalAcumulated(id, result, project);
      console.log('Resultado:', res);      
      navigate('/loadingTransaction');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // updateGoalAcumulated(id, result);
    
  return (
    <section className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none py-6">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50 h-[980px]"></div>
      <div className="w-[550px] m-auto font-Poppins bg-white p-6 rounded-lg z-10">
        <div className='flex flex-col items-start gap-8'>
          <button onClick={onClose} className='flex items-center px-3 font-Poppins text-sm gap-3 border-solid border-disabled border-[1px] rounded-md'><CaretLeft /><p className='p-2.5'>Volver a la donacion </p></button>
          <div className='flex gap-[11px]'>
            <img src={image} alt="" className="w-56" />
            <div>
              <p className='font-Poppins text-sm'> Estas apoyando a : <span className=' text-primary'>{category}</span></p>
              <p className='font-Poppins text-sm'>Tu donacion sera para : <span className='text-primary'>ProSkills</span></p>
            </div>
          </div>
          <div>
            {
              !isChecked
                ? <input className='text-primary mb-2' value={`$ ${selectedValue}`} />
                : <><span className='text-primary mb-2 mr-1'>$</span><input type='number' className='text-primary mb-2' ref={isChecked ? (input)=> input && input.focus() : null} onChange={(e)=>{
                  setSelectedValue(Number(e.target.value)); 
                }}/></>
            }
            <hr />
            <fieldset className="flex justify-between mt-4">
              {cantidad.map((item, index) => (
                <CheckBox
                  key={index}
                  value={item}
                  isSelected={selectedValue === item}
                  onClick={() => onCheckboxClick(item)}
                />
              ))}
            </fieldset>
          </div>
          <div className='border-[1px] border-black rounded-lg w-[90%]'>
            <div className='py-4 flex gap-2.5 flex-col text-cards' >
              {
                payment.map((pay, index)=>(
                  <div className={`flex items-center pl-4 ${index < 2 ? 'border-b-[1px] border-black pb-4' : ''}`}>
                    <CheckBox  key={index} value='' isSelected={selectedPayment === pay.pay} onClick={()=>handleCheckboxPayment(pay.pay)}/>
                    <img className='w-6 mr-2.5' src={pay.img} alt=''/>
                    {
                      pay.img1 && <img className='w-6 mr-2.5' src={pay.img1} alt=''/>
                    }
                    <p className=' text-xs'>{pay.pay}</p>
                  </div>
                ))
              }
            </div> 
          </div>
          <div className='text-cards'>
            <div className='flex gap-3'>
              <input type='checkbox' id="nameDonation"  />
              <label htmlFor='nameDonation'>No mostrar mi nombre en la donacion</label>
            </div>
            <div className='flex gap-3'>
              <input type='checkbox' id="emailProyect" />
              <label htmlFor='emailProyect'>Obtener ocasionalmente Email sobre nuevos proyectos</label>
            </div>
          </div>
          <div className='text-cards w-full'>
            <p className='text-sm pb-4'>Tu donacion</p>
            <div className='text-xs'>
              <div className='flex justify-between pb-[13px]'>
                <p>Tu donacion</p>
                {
                  selectedValue === 'otro'
                    ? <p>0</p>
                    : <p>$ {selectedValue}</p>
                }
              </div>
              <div className='flex justify-between pb-[13px]'>
                <p>Impuestos</p>
                <p>{tax}%</p>
              </div>
              <hr className='pb-[13px] border-black' />
              <div className='flex justify-between text-base'>
                <p>Total</p>
                <p>$ {result}</p>
              </div>
            </div>
          </div>
          <button onClick={handleButtonClick} className="m-auto p-2.5 rounded-lg bg-primary text-white hover:bg-hover">Pagar ahora</button>
          <PaymentForm isOpenPayment={isOpenPayment} onClosePayment={() => setIsOpenPayment(false)} onClickPayment={handlePayment} />
        </div>
      </div>
    </section>
  );
};

