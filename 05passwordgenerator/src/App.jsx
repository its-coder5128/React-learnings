import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [spcharAllowed,setSpcharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordref = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed)
      str += "0123456789"
    if(spcharAllowed)
      str += "`~!@#$%^&*()-=+"
    for(let i=0;i<length;i++)
    {
      const index = Math.floor(Math.random()*(str.length) + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)
  },[length,numberAllowed,spcharAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,spcharAllowed])

  const copyToClipBoard = ()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className='max-w-screen-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-xl text-center text-white pb-2 '>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input className='outline-none w-full py-1 px-3 text-black'
               type='text'
               value={password}
               placeholder='Password'
               readOnly
               ref={passwordref}>
        </input>
        <button className='bg-blue-500 text-white outline-none px-4 hover:bg-blue-800'
                onClick={copyToClipBoard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-4'> 
          <div className='flex intems-center gap-x-1'>
              <input className='cursor-pointer'
                     type='range'
                     min={6}
                     max={100}
                     value={length}
                     onChange={(e) => {setLength(e.target.value)}}
              ></input>
              <label>Length: {length}</label>
          </div>
          <div className='flex intems-center gap-x-1'>
              <input className='cursor-pointer'
                     type='checkbox'
                     defaultChecked = {numberAllowed}
                      id='numberInput'
                     onChange={()=>{
                      setNumberAllowed((prev) => !prev);
                    }}
              ></input>
              <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex intems-center gap-x-1'>
              <input className='cursor-pointer'
                     type='checkbox'
                     defaultChecked = {spcharAllowed}
                      id='characterInput'
                     onChange={()=>{
                      setSpcharAllowed((prev) => !prev);
                    }}
              ></input>
              <label htmlFor='characterInput'>Special characters</label>
          </div>

      </div>

    </div>
  )
}

export default App
