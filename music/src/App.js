import './App.css';
import React, { useState } from 'react';
import en from './translations/en/common.json'
import vn from './translations/vn/common.json'
import Header from './layout/header'
import Footer from './layout/footer'
import Body from './layout/body'

function App() {
  //language init

  const [language, setLanguage] = useState(en)

  const changeLanguage = (data) => {
    if (data === "VN")
      setLanguage(vn)
    else if (data === "EN")
      setLanguage(en)
    else console.log("Language is not available")
  }

  return (
    <div className="App">
      <Header language={language} changeLanguage={changeLanguage}></Header>
      <Body language={language}/>
      <Footer language={language}></Footer>
    </div>
  );
}

export default App;
