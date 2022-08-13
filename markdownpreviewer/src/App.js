import './App.css';
import { marked } from 'marked';
import {Box, Button, Container} from "@mui/material";
import {useState} from "react";
const fcc = <svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M97.22,96.21c10.36-10.65,16-17.12,16-21.9,0-2.76-1.92-5.51-3.83-7.42A14.81,14.81,0,0,0,101,64.05c-8.48,0-20.92,8.79-35.84,25.69C23.68,137,2.51,182.81,3.37,250.34s17.47,117,54.06,161.87C76.22,435.86,90.62,448,100.9,448a13.55,13.55,0,0,0,8.37-3.84c1.91-2.76,3.81-5.63,3.81-8.38,0-5.63-3.86-12.2-13.2-20.55-44.45-42.33-67.32-97-67.48-165C32.25,188.8,54,137.83,97.22,96.21ZM239.47,420.07c.58.37.91.55.91.55Zm93.79.55.17-.13C333.24,420.62,333.17,420.67,333.26,420.62Zm3.13-158.18c-16.24-4.15,50.41-82.89-68.05-177.17,0,0,15.54,49.38-62.83,159.57-74.27,104.35,23.46,168.73,34,175.23-6.73-4.35-47.4-35.7,9.55-128.64,11-18.3,25.53-34.87,43.5-72.16,0,0,15.91,22.45,7.6,71.13C287.7,364,354,342.91,355,343.94c22.75,26.78-17.72,73.51-21.58,76.55,5.49-3.65,117.71-78,33-188.1C360.43,238.4,352.62,266.59,336.39,262.44ZM510.88,89.69C496,72.79,483.52,64,475,64a14.81,14.81,0,0,0-8.39,2.84c-1.91,1.91-3.83,4.66-3.83,7.42,0,4.78,5.6,11.26,16,21.9,43.23,41.61,65,92.59,64.82,154.06-.16,68-23,122.63-67.48,165-9.34,8.35-13.18,14.92-13.2,20.55,0,2.75,1.9,5.62,3.81,8.38A13.61,13.61,0,0,0,475.1,448c10.28,0,24.68-12.13,43.47-35.79,36.59-44.85,53.14-94.38,54.06-161.87S552.32,137,510.88,89.69Z"/></svg>


const Toolbar = (props) => {
    return (
    <div id="Toolbar" className="flex justify-between p-2 bg-[#353845]">
        <div className="flex align-center">
            {fcc}
            <p className="ml-2 my-0 text-white ">{props.name}</p>
        </div>
        <div>
            {props.isfull === true ? <svg onClick={props.fullInput} className="hover:fill-indigo-500 w-3.5 fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M215.1 272h-136c-12.94 0-24.63 7.797-29.56 19.75C45.47 303.7 48.22 317.5 57.37 326.6l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26 .0013l78.06-78.07l30.06 30.06c6.125 6.125 14.31 9.367 22.63 9.367c4.125 0 8.279-.7891 12.25-2.43c11.97-4.953 19.75-16.62 19.75-29.56V296C239.1 282.7 229.3 272 215.1 272zM296 240h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.5 12.5-32.76 .0002-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-78.06 78.07l-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C272 229.3 282.7 240 296 240z"/></svg>:
            <svg   onClick={props.fullInput} className="hover:fill-indigo-500 w-3.5 fill-white cursor-pointer"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 319.1v135.1c0 13.26-10.75 23.1-23.1 23.1h-135.1c-12.94 0-24.61-7.781-29.56-19.75c-4.906-11.1-2.203-25.72 6.937-34.87l30.06-30.06L224 323.9l-71.43 71.44l30.06 30.06c9.156 9.156 11.91 22.91 6.937 34.87C184.6 472.2 172.9 479.1 160 479.1H24c-13.25 0-23.1-10.74-23.1-23.1v-135.1c0-12.94 7.781-24.61 19.75-29.56C23.72 288.8 27.88 288 32 288c8.312 0 16.5 3.242 22.63 9.367l30.06 30.06l71.44-71.44L84.69 184.6L54.63 214.6c-9.156 9.156-22.91 11.91-34.87 6.937C7.798 216.6 .0013 204.9 .0013 191.1v-135.1c0-13.26 10.75-23.1 23.1-23.1h135.1c12.94 0 24.61 7.781 29.56 19.75C191.2 55.72 191.1 59.87 191.1 63.1c0 8.312-3.237 16.5-9.362 22.63L152.6 116.7l71.44 71.44l71.43-71.44l-30.06-30.06c-9.156-9.156-11.91-22.91-6.937-34.87c4.937-11.95 16.62-19.75 29.56-19.75h135.1c13.26 0 23.1 10.75 23.1 23.1v135.1c0 12.94-7.781 24.61-19.75 29.56c-11.1 4.906-25.72 2.203-34.87-6.937l-30.06-30.06l-71.43 71.43l71.44 71.44l30.06-30.06c9.156-9.156 22.91-11.91 34.87-6.937C440.2 295.4 447.1 307.1 447.1 319.1z"/></svg>}
        </div>
    </div>
    )
}

const Output = (props) => {
    const name = "Output"
    const mark = marked('# Marked in Node.js\n\nRendered by **marked**.')

    function getMarkdownText() {
        var rawMarkup = marked.parse(props.input);
        return { __html: rawMarkup };
    }

    const full = {minHeight: "85vh"}
    const noFull = {minHeight: "43vh"}
    const mtFull = {marginTop:"0"}
    const mtnoFull = {marginTop:"5vh"}


    return (
        <Box style={props.isFull === true ? mtFull: mtnoFull} sx={{ bgcolor: '#cfe8fc' , w:1}}>
            <Toolbar name={name} fullInput={props.fullInput} isfull={props.isFull} />
            <article style={props.isFull === true ? full: noFull} id="output" className="markdown-body">
                <div id="preview"  className="" dangerouslySetInnerHTML={getMarkdownText()} />
            </article>
        </Box>
    )
}


const Input = () => {
    const name = "Input"
    const coba = "# Welcome to my React Markdown Previewer!\n" +
        "\n" +
        "## This is a sub-heading...\n" +
        "### And here's some other cool stuff:\n" +
        "\n" +
        "Heres some code, `<div></div>`, between 2 backticks.\n" +
        "\n" +
        "```\n" +
        "// this is multi-line code:\n" +
        "\n" +
        "function anotherExample(firstLine, lastLine) {\n" +
        "  if (firstLine == '```' && lastLine == '```') {\n" +
        "    return multiLineCode;\n" +
        "  }\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "You can also make text **bold**... whoa!\n" +
        "Or _italic_.\n" +
        "Or... wait for it... **_both!_**\n" +
        "And feel free to go crazy ~~crossing stuff out~~.\n" +
        "\n" +
        "There's also [links](https://www.freecodecamp.org), and\n" +
        "> Block Quotes!\n" +
        "\n" +
        "And if you want to get really crazy, even tables:\n" +
        "\n" +
        "Wild Header | Crazy Header | Another Header?\n" +
        "------------ | ------------- | -------------\n" +
        "Your content can | be here, and it | can be here....\n" +
        "And here. | Okay. | I think we get it.\n" +
        "\n" +
        "- And of course there are lists.\n" +
        "  - Some are bulleted.\n" +
        "     - With different indentation levels.\n" +
        "        - That look like this.\n" +
        "\n" +
        "\n" +
        "1. And there are numbered lists too.\n" +
        "1. Use just 1s if you want!\n" +
        "1. And last but not least, let's not forget embedded images:\n" +
        "\n" +
        "![freeCodeCamp Logo](https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.svg)\n"


    const [input, setInput] = useState(coba)
    const [inputFull, setInputFull] = useState(false)
    const [outputFull, setOutputFull] = useState(false)


    const handlechange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
        console.log({input})
    }

    const full = {minHeight: "85vh"}
    const noFull = {minHeight: "30vh"}
    const hidden = {display : "none"}
    const display = {display : "inherit"}

    return (
        <>

            {!outputFull &&

                <Toolbar
                    name={name}
                    fullInput={() => setInputFull(!inputFull)}
                    isfull={inputFull}
                />

            }
            <div style={outputFull === true ? hidden: display} id="input" className="h-full">
                <textarea style={inputFull === true ? full: noFull}  id="editor" onChange={handlechange} className=" w-full h-full p-2 box-border border-none bg-[#0d1117] text-white">{coba}</textarea>
            </div>

            {!inputFull && <Output input={input} fullInput={() => setOutputFull(!outputFull)} isFull={outputFull} />}

        </>
    )
}


function App() {
    return (
        <div className="App bg-[#161b22] py-4">
        <Container  maxWidth="md">
            <Input />;
        </Container>
        </div>
        );

}

export default App;
