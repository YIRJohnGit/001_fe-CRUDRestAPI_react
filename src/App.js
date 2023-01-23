import React, { useState } from 'react';
import Axios from 'axios'

import './App.css';

function App() {
  //Declaring the state for tutorial_result variable
  const [tutorial_result, settutorial_result] = useState('') 

  // Adding User Function for fetching a Joke using API
  const gettutorial_result = () => {

    /*
  Axios('http://localhost:8091/api/tutorials/', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET',
      'Content-Type': 'application/json',
    },
    withCredentials: false,
    credentials: 'same-origin',
  })
  .then(
    (response) => {
      console.log(response.data);
      // Setting up the result in the joke' state
      setJoke(JSON.stringify(response.data));
      // setJoke(response.data);
    }
  );
  */

  
  //Option 1- Getting  the data using Axios
  Axios.get('http://localhost:8091/api/tutorials/').then(
    (response) => {
      //console.log(response);
      // Setting up the result in the joke' state
      settutorial_result(JSON.stringify(response.data));
    }
  );
  
    /*
    //Option 2- Getting the data sing Fetch
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((data) => {
      setJoke(data.setup + ' ...'+ data.punchline) ;
    });
    */
    /*
    fetch('http://localhost:8091/api/tutorials/', {
      method: get, //usermethod, //* GET, POST, PUT, DELETE, etc.,
      mode: "cors", //no-cors, cors, *same-origin
      cache: "no-cache", //*default, no-cache, reload, force-cahe, only
      credentials: "same-origin", //include, *same-origin, omit
      headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", //manual, *follow, error
      referrer: "no-referrer" //, //no-referrer, *client
      //body: JSON.stringify(data), //body data type must match "ontent-Type"
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // setJoke(data.setup + ' ...'+ data.punchline) ;
    });
*/

  };

  return (
    <div>
      <h1>This is the 1st Project with Functional Method app</h1>
      <button onClick={gettutorial_result}>Get the result from DB...</button>
      <hr/>
      {tutorial_result}
      {/* <pre dangerouslySetInnerHTML={{__html:joke}}></pre> */}

    </div>
  );
}

export default App;
