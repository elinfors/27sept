import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [message, setMessage] = useState('Welcome to My Simple React App!');

  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault()
    console.log("Submitted")
    alert("Tack för din OSA!");
    const formData = new FormData(formEle)
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

  return (
    <div className="App">
      <header className="App-header">
        <p id="Homepage_title">
          Elin & Simon
     </p>
     <p id="Homepage_title">
          27 09 25
     </p>
     <p>Södermalm 
     </p>
     <p>27 September 2025
     </p>

      </header>
      <div className="Content">
        <p className="Section-title">Content</p>
      </div>
      <div className="Content">
        <form className="form" onSubmit={(e) => Submit(e)}>
          <p className="Form-title">För- och efternamn</p>
          <input placeholder="För- och efternamn" name="Name" type="text" />
          <p className="Form-title">Mailadress</p>
          <input placeholder="Mailadress" name="Email" type="email" />
         <label>
          <input type="radio" name="OSA" value="Jag kommer!" />
          Jag kommer!
          </label>
          <label>
          <input type="radio" name="OSA" value="Jag kan tyvärr inte" />
          Jag kan tyvärr inte
          </label>
          <p className="Form-title">Matpreferenser</p>
          <input placeholder="Matpreferenser" name="Preferences" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;

