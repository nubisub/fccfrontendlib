import './App.css';
import {Box, Container, Grid, Paper, Slider, Stack, styled, Switch} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {VolumeDown, VolumeUp} from "@mui/icons-material";


const Option = (props) => {

    const [show, setShow] = useState("")

    useEffect(() => {
        setShow(props.drums)
    }, [props.drums]); // <- add the count variable here

    const handleChange = (e, val) => {
        setShow(val)
        props.changeVolume(val/100)
        setTimeout(function() {
            setShow("")
        }, 3000);
        // setShow("")
    }


    return(
        <div  className="grid grid-cols-1 sm:gap-4 gap-0 sm:max-w-xl sm:order-2 order-1  h-[200px] sm:h-auto ">
            <div>
                <p>Power</p>

                <Switch

                    // checked={true}
                    onChange={props.handlePower}
                    defaultChecked={true}
                    // inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div><p id="display" className=" min-h-[24px]" >
                {show}</p></div>
            <div>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown />
                    <Slider aria-label="Volume"
                            defaultValue={30}
                        // value={value}
                            onChange={handleChange}
                            disabled={!props.powerbool?true:false}
                    />
                    <VolumeUp />
                </Stack>
            </div>
            <div>
                <Switch
                    defaultChecked={false}
                    // checked={checked}
                    onChange={props.handleBank}
                    // inputProps={{ 'aria-label': 'controlled' }}
                />
                <p>Bank</p>
            </div>
        </div>
    )
}


const Button = (props) => {

    const[name, setName] = useState(" ")
    const drum = "drum-pad bg-[#E8A87C] rounded-lg flex items-center justify-center cursor-pointer active:scale-95 "

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            console.log('enter press here! ')
        }
        setName("Heater")
    }


    return(
<>
            <div  className="grid grid-cols-3  gap-4 max-w-xl order-2 sm:order-1" >
                <div onClick={() => props.hov("Heater 1","Chord 1")}  className={drum} >Q</div>
                <div onClick={e => props.hov("Heater 2", "Chord 2")}  className={drum} >W</div>
                <div onClick={e => props.hov("Heater 3", "Chord 3")} className={drum} >E</div>
                <div onClick={e => props.hov("Heater 4", "Shaker")} className={drum} >A</div>
                <div onClick={e => props.hov("Clap", "Open HH")} className={drum} >S</div>
                <div onClick={e => props.hov("Open HH", "Closed HH")} className={drum} >D</div>
                <div onClick={e => props.hov("Kick n' Hat", "Punchy Kick")} className={drum} >Z</div>
                <div onClick={e => props.hov("Kick", "Side Stick")} className={drum} >X</div>
                <div onClick={e => props.hov("Closed HH", "Snare")} className={drum} >C</div>
            </div>
                <Option
                    name={name}
                    drums={props.drum}
                    changeVolume={props.vol}
                    handlePower={props.pow}
                    handleBank={props.bank}
                    powerbool={props.power}
                />
</>


)

}


function App() {
    const [drum, setDrum] = useState("")
    const [volume, setVolume] = useState(0.3)
    const [power,setPower] = useState(true)
    const [play, setPlay] = useState(1)
    const [isBank, setisBank] = useState(false)

    useEffect(() => {
        if (power === false){
            return
        }

        if (!isBank){
        if (drum === "Heater 1"){
            audio.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        } else if (drum === "Heater 2"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        } else if (drum === "Heater 3"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        } else if (drum === "Heater 4") {
            audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        } else if (drum === "Clap"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        } else if (drum === "Open HH"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        } else if (drum === "Kick n' Hat"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        } else if (drum === "Kick"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        } else if (drum === "Closed HH"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }} else {

        if (drum === "Chord 1"){
            audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        } else if (drum === "Chord 2"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        }else if (drum === "Chord 3"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        }else if (drum === "Shaker"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        }else if (drum === "Open HH"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        } else if (drum === "Closed HH"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        } else if (drum === "Punchy Kick"){
        audio.src ='https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        }else if (drum === "Side Stick"){
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        }else {
            audio.src ='https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        }}

        audio.play()

    }, [play]);


    const toggle = () => {
        setPower(!power)
        if (power === true){
            setDrum("")
        }
    }


    let audio = new Audio("")
    audio.volume = volume


    const handleKeyPress = (event) => {
        if (power === false){
            return
        }
        setPlay(play+1)
        if (!isBank){
        if(event.key === 'q'){
            setDrum("Heater 1")
        } else if (event.key === 'w'){
            setDrum("Heater 2")
        }else if (event.key === 'e'){
            setDrum("Heater 3")
        }else if (event.key === 'a'){
            setDrum("Heater 4")
        }else if (event.key === 's'){
            setDrum("Clap")
        }else if (event.key === 'd'){
            setDrum("Open HH")
        }else if (event.key === 'z') {
            setDrum("Kick n' Hat")
        }else if (event.key === 'x') {
            setDrum("Kick")
        }else if (event.key === 'c'){
            setDrum("Closed HH")
        }}else{
            if(event.key === 'q'){
                setDrum("Chord 1")
            } else if (event.key === 'w'){
                setDrum("Chord 2")
            }else if (event.key === 'e'){
                setDrum("Chord 3")
            }else if (event.key === 'a'){
                setDrum("Shaker")
            }else if (event.key === 's'){
                setDrum("Open HH")
            }else if (event.key === 'd'){
                setDrum("Closed HH")
            }else if (event.key === 'z') {
                setDrum("Punchy Kick")
            }else if (event.key === 'x') {
                setDrum("Side Stick")
            }else if (event.key === 'c'){
                setDrum("Snare")
            }
        }
    }

    const ubahButton = (props, props2) => {
        if (power === false){
            return
        }
        setPlay(play+1)
        if(isBank){
            setDrum(props2)
        } else{
            setDrum(props)
        }
    }

    const changeVolume = (props) => {
        setVolume(props)
    }

  return (
      <div onKeyDown={handleKeyPress}  tabIndex="0" className="App h-screen flex justify-center items-center sm:bg-[#85CDCB] bg-[#41B3A3] ">
          <div id="drum-machine" className="grid gap-x-4 max-w-xl w-[600px] bg-[#41B3A3]  p-8 rounded-lg sm:grid-cols-2 grid-cols-1  sm:h-auto h-[75vh] " >
              <Button
                  drum={drum}
                  hov={ubahButton}
                  vol={changeVolume}
                  pow={toggle}
                  power={power}
                  bank={() => setisBank(!isBank)}
              />
          </div>
      </div>

  );
}

export default App;
