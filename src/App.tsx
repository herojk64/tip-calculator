import './App.scss'
import HeaderLogo from './assets/images/logo.svg'
import Input from './components/Input'
import IconDollar from './assets/images/icon-dollar.svg'
import IconPerson from './assets/images/icon-person.svg'
import TipPercentage from './components/TipPercentage'
import { useContext } from 'react'
import { TipContext } from './context/TipContext'
import Computation from './components/Computation'
function App() {

  const {tipData,setTipData,reset} = useContext(TipContext)

  const setBillData = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setTipData(e=>({...e,bill:Number(event.target.value)}));
  } 

  const setNumberData = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setTipData(e=>({...e,number:Number(event.target.value)}));
  } 

  console.log(tipData);

  const tipTotal:()=>number =()=> tipData.bill*(tipData.tip/100);
  const tipPerPersonAmount:() => number = ()=>tipData.number !== 0 ?parseFloat((tipTotal()/tipData.number).toFixed(2)):0;

  return (
    <div className='App'>
      <h1>
      <img src={HeaderLogo} alt="header logo" />
      </h1>
      <main>
        <div className='card__component'>
        <section className='font-semibold text-neutral-dark-grayish-cyan'>
        <Input 
        type='number'
        name='bill'
        placeholder='0'
        icon={IconDollar}
        className='form-control mb-6 w-full'
        onChange={setBillData}
        />

<TipPercentage />

<Input 
        type='number'
        name='number-of-people'
        label='Number of People'
        placeholder='0'
        icon={IconPerson}
        onChange={setNumberData}
        />
        </section>
        <section className='flex flex-col'>
          <Computation 
          title='Tip Amount'
          amount={tipPerPersonAmount()}
          />

          <Computation 
          title='Total'
          amount={tipTotal()}
          />

          <button type='button' className='reset-btn' onClick={reset} disabled={tipData.bill === 0 && tipData.tip === 0 && tipData.number === 0}>
            Reset
          </button>  
        </section>
        </div>
      </main>
    </div>
  )
}

export default App
