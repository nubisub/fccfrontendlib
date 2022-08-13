import {useEffect, useState} from 'react'
import './App.css'
const playIcon = <svg className='w-[15px] fill-[#222831]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
const pauseIcon = <svg className='w-[15px] fill-[#222831]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"/></svg>
const reloadIcon = <svg className='w-[15px] fill-[#222831]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"/></svg>
const upIcon = <svg className='w-[15px] fill-[#222831]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"/></svg>
const downIcon = <svg className='w-[15px] fill-[#222831]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>
const audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav")
audio.preload
function Session(props) {
    return(
        <div className="flex flex-col justify-center items-center sm:py-0 py-8 ">
            <div id="session-label" className="text-2xl mb-2 sm:order-none order-2">Session Length</div>
            <div className="flex justify-center items-center sm:mb-0 mb-2">
                <button id="session-increment" className='bg-[#00ADB5]' onClick={props.incr}>{upIcon}</button>
                <div id="session-length" className="text-2xl mx-4 italic  min-w-[30px]">{props.time}</div>
                <button id="session-decrement" className='bg-[#00ADB5]' onClick={props.decr}>{downIcon}</button>
            </div>
        </div>
    )
}

function Break(props) {
    return (
    <div className="flex flex-col justify-center items-center">
        <div id="break-label" className="text-2xl mb-2">Break Length</div>
        <div className="flex justify-center items-center">
            <button id="break-increment" className='bg-[#00ADB5]' onClick={props.counter}>{upIcon}</button>
            <div id="break-length" className="text-2xl mx-4 italic  min-w-[30px]">{props.time}</div>
            <button id="break-decrement" className='bg-[#00ADB5]' onClick={props.countd}>{downIcon}</button>
        </div>
    </div>
    )
}

function Clock() {
    const [breakTime, setBreakTime] = useState(5)
    const [sessionTime, setSessionTime] = useState(25)
    const [isRun, setRun] = useState(false)
    const [isSession, setSession] = useState(true)
    const [sek, setSek] = useState(0)
    const [min, setMin] = useState(sessionTime)

    useEffect(() => {
        if (isRun) {
            let interval = setInterval(() => {
                handleNumber()
            }, 1000) //periodLength
            return () => {
                clearInterval(interval)
            }
        }
    });

    useEffect(() => {
        setMin(sessionTime)
        setSek(0)
    }, [sessionTime]);

    function handleNumber() {
        if (sek === 0) {
            if (min === 0) {
                switchesTimerMode()
                audio.play()
            }else {
                setSek(59)
                setMin(min - 1)
            }

        } else setSek(sek - 1)

    }

    function switchesTimerMode(){
        if(isSession){
            setMin(breakTime)
            setSek(0)
        } else {
            setMin(sessionTime)
            setSek(0)
        }
        setSession(!isSession)
    }

    function timeLeft() {
        let minutes = min < 10 ? '0' + min : min
        let seconds = sek < 10 ? '0' + sek : sek
        return minutes + ':' + seconds
    }

    function startTimer() {
            setRun(!isRun)
    }

    const breakIncr= () => {
        if (breakTime === 60){
            return;
        }
        if (isRun){
            return
        }
        setBreakTime(breakTime+1)
    }

    const breakDecr = () => {
        if (breakTime === 1){
            return;
        }
        if (isRun){
            return
        }
        setBreakTime(breakTime-1)
    }


    const sessIncr= () => {
        if (sessionTime === 60){
            return;
        }
        if (isRun){
            return
        }
        setSessionTime(sessionTime+1)
    }

    const sessDecr = () => {
        if (sessionTime === 1){
            return;
        }
        if (isRun){
            return
        }
        setSessionTime(sessionTime-1)
    }

    function handleReload(){
        setBreakTime(5)
        setSessionTime(25)
        setMin(sessionTime)
        setSek(0)
        setRun(false)
        audio.pause()
        audio.currentTime = 0
    }

    return(
        <>
            <div className="text-4xl font-bold ">25 + 5 Clock</div>
            <div className="flex sm:flex-row justify-around flex-col order-2 sm:order-none ">
                <Break
                    counter={breakIncr}
                    countd={breakDecr}
                    time={breakTime} />
                <Session
                    incr={sessIncr}
                    decr={sessDecr}
                    time={sessionTime}
                />
            </div>
            <div className='mt-8 sm:mt-0' >
                <div id="timer-label" className="text-3xl mb-2 font-bold ">{isSession?'Session':'Break'}</div>
                <div id="time-left"  className="text-7xl ">
                    {timeLeft()}
                </div>
            </div>
            <div className="flex justify-center mb-8 sm:mb-0">
                <button id="start_stop" className="flex justify-center items-center mx-2 bg-[#00ADB5] min-h-[50px] min-w-[100px]" onClick={startTimer}>
                    {isRun?pauseIcon:playIcon}
                </button>
                <button id="reset" onClick={handleReload} className="flex justify-center items-center mx-2 bg-[#00ADB5] min-h-[20px] min-w-[100px]">
                    {reloadIcon}
                </button>
            </div>
        </>
    )
}

function App() {
  return (
    <div className="App text-[#EEEEEE]  bg-[#393E46] flex flex-col p-12 sm:w-[700px] w-screen justify-between sm:min-h-[500px] rounded-xl shadow-2xl min-h-screen py-16 ">
      <Clock/>
    </div>
  )
}
export default App
