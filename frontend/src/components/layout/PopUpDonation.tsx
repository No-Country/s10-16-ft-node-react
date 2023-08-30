import { imgExample } from '../../assets';
import { CaretLeft } from '@phosphor-icons/react';
export const PopUpDonation = () => {

  return (
    <section className="w-[550px] h-[843px] m-auto">
      <div className='flex flex-col items-start gap-8'>
        <button className='flex items-center px-3 font-Poppins text-sm gap-3 border-solid border-disabled border-[1px] rounded-md'><CaretLeft /><p className='p-2.5'>Volver a la donacion </p></button>
        <div className='flex gap-[11px]'>
          <img src={imgExample} alt="" />
          <div>
            <p className='font-Poppins text-sm'> Estas apoyando a : <span className=' text-primary'>La educacion</span></p>
            <p className='font-Poppins text-sm'>Tu donacion sera para : <span className='text-primary'>ProSkills</span></p>
          </div>
        </div>
        <div>
          <div>$ amount</div>
          <hr />
          <div className='flex'>
            <div>
              <input className='text-primary' type="radio" name='amount' id="50"/>
              <label htmlFor="50">$ 50</label>
            </div>
            <div>
              <input className='text-primary' type="radio" name='amount' id="100" />
              <label htmlFor="100">$ 100</label>
            </div>
            <div>
              <input className='text-primary' type="radio" name='amount' id="200" />
              <label htmlFor="200">$ 200</label>
            </div>  
            <div>
              <input className='text-primary' type="radio" name='amount' id="500" />
              <label htmlFor="500">$ 500</label>
            </div>  
            <div>
              <input className='text-primary' type="radio" name='amount' id="750" />
              <label htmlFor="750">$ 750</label>
            </div>  
            <div>
              <input className='text-primary' type="radio" name='amount' id="1000" />
              <label htmlFor="1000">$ 1000</label>
            </div>  
            <div>
              <input className='text-primary' type="radio" name='amount' id="1500" />
              <label htmlFor="1500">$ 1500</label>
            </div>  
            <div>
              <input className='text-primary' type="radio" name='amount' id="otro" />
              <label htmlFor="otro">Otro</label>
            </div>   
          </div>      
        </div>
        <div>
          <div>
            <input type="radio" name='payment' id="creditDebit" />
            <label htmlFor="creditDebit">Credit or debit card</label>
          </div>
          <div>
            <input type="radio" name='payment' id="googlePay" />
            <label htmlFor="googlePay">Google pay</label>
          </div> 
          <div>
            <input type="radio" name='payment' id="applePay" />
            <label htmlFor="applePay">Apple Pay</label>
          </div>   
        </div>
        <div>
          <div>
            <input type='checkbox' id="nameDonation"  />
            <label htmlFor='nameDonation'>No mostras mi nombre en la donacion</label>
          </div>
          <div>
            <input type='checkbox' id="emailProyect" />
            <label htmlFor='emailProyect'>Obtener ocasionalmente Email sobre nuevos proyectos</label>
          </div>
        </div>
        <div>
          <p>Tu donacion</p>
          <div>
            <div>
              <p>Tu donacion</p>
              <p>$ 100</p>
            </div>
            <div>
              <p>Impuestos</p>
              <p>0%</p>
            </div>
            <hr />
            <div>
              <p>Total</p>
              <p>$ 100</p>
            </div>
          </div>
        </div>
        <button>Pagar ahora</button>
      </div>
    </section>
  );
};

