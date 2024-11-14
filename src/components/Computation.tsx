import './Computation.scss'

interface computationInterface {
  title: string;
  amount: number
}

const Computation = ({
  title,
  amount
}: computationInterface) => {
  return (
    <div className='tip__total__wrapper'>
      <span>
        <header>{title}</header>
        <p>/ Person</p>
      </span>
      <span>${amount}</span>
    </div>
  )
}

export default Computation