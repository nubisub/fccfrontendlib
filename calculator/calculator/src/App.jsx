import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Display(){
    const [input, setInput] = useState('0')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(false)



     function handleInput(event, param) {
         const paramAsString = `${param}`;

         if (result === false) {
             if ((input === '0') && (paramAsString !== '.') && (paramAsString !== '0') && (operation !== '0')) {
                 console.log('1')
                 if ((input === '/') || (input === '+') || (input === '-') || (input === '*')) {
                     setInput(paramAsString)
                 } else {
                     setInput(paramAsString)
                 }
                 setOperation(operation + paramAsString)
             } else if((input === '0') && (paramAsString === '.') && ((operation === '') || (operation === '0'))){
                setInput(input+paramAsString)
                setOperation(input+paramAsString)
             } else if ((paramAsString === '.') && ((operation.slice(operation.length - 1) === '+') || (operation.slice(operation.length - 1) === '-') || (operation.slice(operation.length - 1) === '*') || (operation.slice(operation.length - 1) === '/'))){
                 setInput('0' + paramAsString)
                 setOperation(operation + '0' + paramAsString)
             }

             else if ((input === '0') && (paramAsString === '0')) {
                 console.log('2')

                 setInput(paramAsString)
                 setOperation(paramAsString)
             } else if ((operation === '0')){
                 setInput(paramAsString)
                 setOperation(paramAsString)
             }
             else if ((paramAsString === '.') && (input.includes("."))) {
                 console.log('4')

                 setInput(input)
                 setOperation(operation)
             } else {
                 setOperation(operation + paramAsString)
                 console.log('5')

                 if ((input === '/') || (input === '+') || (input === '-') || (input === '*')) {
                     setInput(paramAsString)
                 } else {
                     setInput(input + paramAsString)
                 }
             }
         }else{
            setResult(false)
             if ((input === '0') && (paramAsString !== '.') && (paramAsString !== '0') && (operation !== '0')) {
                 console.log('1')
                 if ((input === '/') || (input === '+') || (input === '-') || (input === '*')) {
                     setInput(paramAsString)
                 } else {
                     setInput(paramAsString)
                 }
                 setOperation(paramAsString)
             } else if((input === '0') && (paramAsString === '.') && ((operation === '') || (operation === '0'))){
                 setInput(input+paramAsString)
                 setOperation(input+paramAsString)
             }

             else if ((input === '0') && (paramAsString === '0')) {
                 console.log('2')

                 setInput(paramAsString)
                 setOperation(paramAsString)
             } else if ((operation === '0')){
                 setInput(paramAsString)
                 setOperation(paramAsString)
             }
             else if ((paramAsString === '.') && (input.includes("."))) {
                 console.log('4')
                 setInput(input)
                 setOperation(operation)
             } else {
                 setOperation(paramAsString)
                 console.log('5')

                 if ((input === '/') || (input === '+') || (input === '-') || (input === '*')) {
                     setInput(paramAsString)
                 } else {
                     setInput(paramAsString)
                 }
             }
         }
         // setOperation(operation+paramAsString)
     }

     function handleOperand(event, param){
         let paramAsString = `${param}`;
         if (result === false) {
             if ((input === '/') || (input === '+') || (input === '-') || (input === '*')) {


                 if ((paramAsString === '/') || (paramAsString === '+') || (paramAsString === '*')){
                     if(operation.slice(operation.length - 1) === '-'){
                         let op = operation.slice(0, -2)
                         op = op + paramAsString
                         setOperation(op)
                         setInput(paramAsString)
                         return
                     }
                     // console.log(operation.slice(operation.length - 1))
                     let op = operation.slice(0, -1)
                     op = op + paramAsString
                     setOperation(op)
                     setInput(paramAsString)
                     return
                 }
                 else if ((paramAsString === '-') && operation.slice(operation.length - 1) === '-'){
                     console.log('2')
                     let op = operation.slice(0, -1)
                     op = op + paramAsString
                     setOperation(op)
                     setInput(paramAsString)
                     return
                 }
             }
             setOperation(operation + paramAsString)
             setInput(paramAsString)
         } else {
             setResult(false)
             if ((input === '/') || (input === '+') || (input === '-') || (input === '*')) {
                 if ((paramAsString === '/') || (paramAsString === '+') || (paramAsString === '*')){
                     if(operation.slice(operation.length - 1) === '-'){
                         let op = operation.slice(0, -2)
                         op = op + paramAsString
                         setOperation(op)
                         setInput(paramAsString)
                         return
                     }
                     // console.log(operation.slice(operation.length - 1))
                     let op = operation.slice(0, -1)
                     op = op + paramAsString
                     setOperation(op)
                     setInput(paramAsString)
                     return
                 }
                 else if ((paramAsString === '-') && operation.slice(operation.length - 1) === '-'){
                     console.log('2')
                     let op = operation.slice(0, -1)
                     op = op + paramAsString
                     setOperation(op)
                     setInput(paramAsString)
                     return
                 }
             }
             setOperation(input + paramAsString)
             setInput(paramAsString)
         }
     }

    function evil(fn) {
        return new Function('return ' + fn)();
    }

    function handleResult(){
        if ((operation === '') && (input === '0')){
            return;
        }
        setResult(true)
        let input = operation.slice(operation.length - 1);
        if ((input === '/') || (input === '+') || (input === '-') || (input === '*')){
            setInput( evil(operation.slice(0,-1)) );
            return
        }
        setInput( (evil(operation)) );
    }

    function handleClear(){
        setInput('0')
        setOperation('')
    }

    const flek = "flex justify-center items-center"
    const angka = "bg-[#303136] border-[#303136] flex justify-center items-center text-[#2E83C3] sm:h-[75px] rounded-2xl hover:border-2 hover:border-[#2E83C3] cursor-pointer active:bg-[#2E83C3] active:text-[#FFFFFF] border-2 "
    const operator = "bg-[#2E83C3] border-[#2E83C3] border-2 flex justify-center items-center rounded-2xl sm:h-[75px] text-[#FFFFFF] cursor-pointer hover:border-2 hover:border-white active:bg-white active:text-[#303136]"

    return (



        <>
            <div className="w-[360px] col-span-4 text-right bg-black rounded-lg p-2 sm:h-auto min-h-[75px]" >
                <div className="text-white min-h-[30px] break-words ">{operation}</div>
                <div id="display" className="col-span-4 text-white  min-h-[30px] break-words">{input}</div>
            </div>

            <div id="clear" className="col-span-2 bg-[#5C5D5F] flex justify-center items-center rounded-2xl hover:border-2 hover:border-red-600 hover:text-red-600 cursor-pointer active:bg-red-600 active:text-white " onClick={handleClear} >AC</div>
            <div id="divide" className={operator} onClick={event => handleOperand(event, '/')}>/</div>
            <div id="multiply" className={operator}  onClick={event => handleOperand(event, '*')}>X</div>
            <div id="seven" className={angka} onClick={event => handleInput(event, 7)}>7</div>
            <div id="eight" className={angka} onClick={event => handleInput(event, 8)}>8</div>
            <div id="nine" className={angka} onClick={event => handleInput(event, 9)}>9</div>
            <div id="subtract" className={operator} onClick={event => handleOperand(event, '-')}>-</div>
            <div id="four" className={angka} onClick={event => handleInput(event, 4)}>4</div>
            <div id="five" className={angka} onClick={event => handleInput(event, 5)}>5</div>
            <div id="six" className={angka} onClick={event => handleInput(event, 6)}>6</div>
            <div id="add" className={operator} onClick={event => handleOperand(event, '+')}>+</div>
            <div id="one" className={angka} onClick={event => handleInput(event, 1)}>1</div>
            <div id="two" className={angka} onClick={event => handleInput(event, 2)}>2</div>
            <div id="three" className={angka} onClick={event => handleInput(event, 3)}>3</div>
            <div id="equals" onClick={handleResult} className="rounded-2xl  row-span-2 bg-[#1991FF] flex justify-center items-center  cursor-pointer hover:border-2 hover:border-white active:bg-white active:text-[#303136]" >=</div>
            <div id="zero" onClick={event => handleInput(event, 0)} className="rounded-2xl  col-span-2 bg-[#303136] flex justify-center items-center text-[#2E83C3]  hover:border-2 hover:border-[#2E83C3] cursor-pointer active:bg-[#2E83C3] active:text-[#FFFFFF] ">0</div>
            <div id="decimal" className={angka} onClick={event => handleInput(event, '.')}>.</div>
        </>
    )
}

function App() {
  return (
      <div className="App h-screen sm:h-auto sm:min-h-screen w-screen flex justify-center items-center sm:p-2">
          <div className=" wrap grid grid-cols-4 sm:rounded-xl gap-4 p-6 py-36 sm:py-6 font-bold text-xl sm:h-auto h-full rounded-none sm:w-auto w-full ">
              <Display/>
          </div>
      </div>
  )
}

export default App
