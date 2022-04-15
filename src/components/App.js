import React, { useState } from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {

  const [text, setText] = useState("hello world");
  const [padding, setPadding] = useState(5);
  const [fontSize, setFontSize] = useState(10);
  return (
    <div id="main">
      <div>
        {/* add input elememnts inside here */}
        <label htmlFor="">Content</label><input type="text" id="contentInput" value={text} onChange={(e) => { setText(e.target.value) }} /> <br />
        <label htmlFor="">Padding</label><input type="number" id="paddingInput" value={padding} onChange={(e) => { setPadding(e.target.value) }} /> <br />
        <label htmlFor="">Font Size</label><input type="number" id="fontSizeInput" value={fontSize} onChange={(e) => { setFontSize(e.target.value) }} />
      </div>
      {/* render Preview component here */}
      {/* <h1>{text.content}</h1> */}
      <Preview fontSize={fontSize} content={text} padding={padding} />
    </div>
  )
}


export default App;
