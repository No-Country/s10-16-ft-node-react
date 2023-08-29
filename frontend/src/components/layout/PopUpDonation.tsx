import { imgExample } from '../../assets';

export const PopUpDonation = () => {


  return (
    <section className="w-[550px] h-[843px] m-auto">
      <div>
        <button> Volver a la donacion </button>
        <div>
          <img src={imgExample} alt="" />
          <div>
            <p> Estas apoyando a : <span>La educacion</span></p>
            <p>Tu donacion sera para : <span>ProSkills</span></p>
          </div>
        </div>
        <div>$ amount</div>
        <hr />
        <div className='flex'>
          <div>
            <input type="radio" name='amount' id="50"/>
            <label htmlFor="50">50</label>
          </div>
          <div>
            <input type="radio" name='amount' id="100" />
            <label htmlFor="100">100</label>
          </div>
          <div>
            <input type="radio" name='amount' id="200" />
            <label htmlFor="200">200</label>
          </div>  
          <div>
            <input type="radio" name='amount' id="500" />
            <label htmlFor="500">500</label>
          </div>  
          <div>
            <input type="radio" name='amount' id="750" />
            <label htmlFor="750">750</label>
          </div>  
          <div>
            <input type="radio" name='amount' id="1000" />
            <label htmlFor="1000">1000</label>
          </div>  
          <div>
            <input type="radio" name='amount' id="1500" />
            <label htmlFor="1500">1500</label>
          </div>  
          <div>
            <input type="radio" name='amount' id="otro" />
            <label htmlFor="otro">Otro</label>
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
      </div>
    </section>
  );
};

