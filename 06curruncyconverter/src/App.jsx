import { useState } from 'react'
import  InputBox  from './components/InputBox.jsx'
import useCurrencyinfo from './hooks/useCurrencyinfo.js'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyinfo(from)
  const options = Object.keys(currencyInfo)
  
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
      >
        <div className="w-full">
          <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                  
                  }}
            >
              
              <InputBox 
                      label = "from"
                      currencyOptions={options}
                      Amount = {amount}
                      currencyFrom = {from}
                      onAmountChange = {(e) => setAmount(e)}
                      onCurrencyChange = {(e) => setFrom(e)}
              />
              <div className="relative w-full h-0.5">
                  <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                      onClick={swap}
                  >
                      swap
                  </button>
              </div>
              <InputBox 
                      label = "To"
                      currencyOptions={options}
                      Amount = {convertedAmount}
                      currencyFrom = {to}
                      onAmountChange = {(e) => setConvertedAmount(e)}
                      onCurrencyChange = {(e) => setTo(e)}
              />
              <button className='bg-blue-600 text-white px-4 py-3 rounded-lg w-full text-lg font-medium'
                      type='submit'
              >
                CONVERT {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
