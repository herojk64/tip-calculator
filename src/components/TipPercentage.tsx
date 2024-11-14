import { useContext } from 'react'
import Input from './Input';
import { TipContext } from '../context/TipContext';
import './TipPercentage.scss'

const tipArray:number[] = [5,10,15,25,50];
const TipPercentage = () => {
    const {setTipData,tipData} = useContext(TipContext)

    const setTipPercentage = (value:number)=>{
        setTipData(e=>({...e,tip:value}))
    }

  return (
    <div className='tip__percentage__wrapper'>
        <header>Select Tip %</header>
        <div className='tip__percentage__btns'>
        {tipArray.map((e:number,index)=>{
            return (
                <button key={index} type='button' data-selected={tipData.tip === e} onClick={()=>setTipPercentage(e)}>
                    {e}%
                </button>
            )
        })
        }
        <Input 
        type='number'
        name='custom'
        placeholder='Custom'
        className='form-control'
        onChange={(e)=>setTipPercentage(Number(e.target.value))}
        />
        </div>
    </div>
  )
}

export default TipPercentage