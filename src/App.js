import React, { useState } from 'react';
import './App.css';
import { Popup } from "./popup"
import { useRef } from 'react'
import torn from './hög_stroke.png'
import venue from './carls-red3.png'
import cheers from './cheers11.png'


function App() {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pref, setPref] = useState("");
  const [showPopup, setShowPopup] = useState(false)

  const handleChangeName= (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePref = (e) => {
    setPref(e.target.value);
  };

  const handleSubmit = (e) => {
    const formEle = document.querySelector("form");
    console.log(e.target.value)
    e.preventDefault();
    setName("");
    setEmail("");
    setPref("");
    setShowPopup(true);
    const formData = new FormData(formEle)
    formEle.reset();
    fetch("https://script.google.com/macros/s/AKfycbx2lj-xS4Ksevj-ayBCAvg7PB7Gm0HvhuAoCOJ67-6CFvVJnOzVPU4KdYgKPsBA-r3G/exec",
      {
      method: "POST",
      body: formData
      }
    )
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const scrollToBottom = () => window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'     
    })   

  

    const myRefBottom = useRef(null)


  return (
    <div className="App">
      <header className="App-header js-scroll scrolled">
        <div className='header-content'>
      <div className="header-small-title">
          27 september 2025
          </div>
        <div className="header-title-ElinSimon">
          ELIN & SIMON
          </div>
          <div className="header-date-small">
          Vi ska gifta oss och hoppas att du vill fira det ihop med oss!
          </div>
          <div className="header-button">
          <button className="OSA-button" onClick={scrollToBottom}>OSA</button>
          </div>
          </div>
      </header>
      <div className="Schedule-content js-scroll">
          <div className="Schedule-container">
            <p className="Section-title">Högalids&shy;kyrkan</p>
            <p className="Section-second-title">14.45</p>
            <p className="Section-description-light"> Vigsel mellan Simon & Elin i Högalidskyrkan.<br></br>Varmt välkomna att vara på plats med lite marginal så alla hinner ta plats innan vi drar igång.</p>
            <p className='Info-title'>HITTA DIT</p>
            <p className="Section-description-info"> Högalids kyrkväg 7 <br></br> 117 30 Stockholm </p>
          </div>
          <div className="Schedule-image-container">
          <img className="Church-image" src={torn}></img>
          </div>
      </div>  
      <div className="Venue-content js-scroll">
          <div className="Venue-image-container">
            <img className="Church-image" src={venue}></img>
          </div>
          <div className="Venue-container">
            <p className="Section-title">Carlshälls Gård</p>
            <p className="Section-second-title">16.30</p>
            <p className="Section-description"> Gemensam promenad till Carlshälls Gård på Långholmen för mingel från 16.30 med efterföljande middag & fest mellan 18 och 03.</p>
            <p className="Section-description"> Det tar ungefär 20 minuter att gå, men det går även bra att ta sig dit via taxi.</p>
            <p className='Info-title'>HITTA DIT</p>
            <p className="Section-description-direction"> Karlshällsvägen 14 <br></br> 117 33 Stockholm </p>
          </div>
      </div>      
      <div className="Info-content js-scroll">
      <div className="Info-container">
        <p className="Section-title">Info</p>
        <p className='Info-title'>TAL</p>
           <p className="Section-description-info"> Om ni vill hålla tal (kul!) så anmäler ni det till våra toastmasters XX på: xx@gmail.com. Anmäl gärna tal så snart som möjligt, men gärna inte senare än 1a september.</p>
        <p className='Info-title'>GÅVOR</p>    
            <p className="Section-description-info"> Er närvaro är den finaste gåvan vi kan få. Vill ni även ge oss en gåva så är det vi önskar oss mest utav allt ett bidrag till vår bröllopsresa (Swish till 076-867 98 75).</p>
        <p className='Info-title'>BARN</p>       
            <p className="Section-description-info"> Alla, barn som vuxna, är hjärtligt välkomna till vigseln. Efterföljande middag och fest är dock till för vuxna. Ammande barn och spädbarn är självklart välkomna.</p>
          <p className='Info-title'>KLÄDKOD</p>       
            <p className="Section-description-info"> Mörk kostym</p>
        </div>
        <div className="Info-image-container">
          <img className="Church-image" src={cheers}></img>
          </div>
      </div>
      <div className='Form-content js-scroll'>
          <div className="form-description">
          <div className="Section-title">OSA</div>
          <p className='Section-description'>OSA genom att fylla i formuläret, senast den <strong>1a juni 2025</strong>.</p>
          <p className='Section-description'>Vi uppskattar om ni vill OSA en gång per person så att vi kan hålla koll på matpreferenser och allergier, tack!</p>
         </div>
      <div className= "form-container" ref={myRefBottom}>
     
      {showPopup ? <Popup closePopup={() => setShowPopup(false)} /> : null}
  
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input-section">
            <label>För- och efternamn</label>
            <input
            type="text"
            name="Name"
            onChange={handleChangeName}
            value={Name}
            placeholder="För- och efternamn"
            className="form-input"
            required
            onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i ditt namn')}
            onInput={(e) => e.target.setCustomValidity('')}
            />
        </div>
        <div className="form-input-section">
        <label>Mailadress</label>
            <input
            type="text"
            name="Email"
            onChange={handleChangeEmail}
            value={Email}
            placeholder="Mailadress"
            className="form-input"
            /*required
            onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i din mailadress')}
            onInput={(e) => e.target.setCustomValidity('')}*/
          />
        </div>
        <div className="form-radio-section">
          <div className="form-radio-item">
              <input 
              type="radio" 
              name="OSA" 
              value="Kommer"
              className="form-input-radio"
              required
              checked
             /* onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i om du kan komma')}
              onInput={(e) => e.target.setCustomValidity('')}*/
              />
              <label for="Kommer">Jag kommer!</label>
          </div>
          <div className="form-radio-item">
              <input 
              type="radio" 
              name="OSA" 
              required
              value="Kommer inte"
              className="form-input-radio"/>
              <label for="Kommer inte"> Jag kan tyvärr inte komma</label>
            </div>
        </div>

      <div className="form-input-section">
            <label>Matpreferenser</label>
            <input
            type="text"
            name="Preferences"
            onChange={handleChangePref}
            value={Pref}
            placeholder="Matpreferenser"
            className="form-input"
          />
      </div>
    
      <button className="OSA-button" type="submit">OSA</button>
  
    </form>

      </div>
      </div>
    </div>
  );
}
export default App;

