# Building Sample Front End Applicaton for Executing CRUD Operation 

**Note:** 
- Node Version >= 14 
- NPM Version => 5.6

- To Start a new Application

```
node -v
npm -v
```
_Result_
![image](https://user-images.githubusercontent.com/111234771/213954966-37a38b1e-5b67-4c8a-aca9-b0d4f8ebd17c.png)


```
npx create-react-app 001_fe-crudrestapi_react_v01 # Will Install Defaullt React pacakages
cd 001_fe-crudrestapi_react_v01
npm start
```

<table>
  <th>
  <td>Command</td> <td>Comments</td>
  </th>
  <tr>
    <td><pre>npm start</pre></td> <td>Starts the development server.</td>
  </tr>
  <tr>
    <td><pre>npm run build</pre></td> <td>Bundles the app into static files for production.</td>
  </tr>
  <tr>
    <td><pre>npm test</pre></td> <td>Starts the test runner.</td>
  </tr>
  <tr>
    <td><pre>npm run eject</pre></td> <td>Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!</td>
  </tr>

**Note:** We suggest that you begin by typing:
</table>


## Setting Up App with functional method
```
echo "import './App.css';

function App() {
  return (
    <div>
      <h1>This is the 1st Project with Functional Method app</h1>
    </div>
  );
}

export default App;

" > src/App.js
```

_Result of src/App,js_
![image](https://user-images.githubusercontent.com/111234771/213956742-dc1a1031-86d2-484a-af7f-6274d0f8342b.png)


## Setting Up API request with AXIOS / Fetch

**Note:** Sample API
```
https://official-joke-api.appspot.com/random_joke
```

**Installation of Axios**
```

npm install axios --save
```

```
echo "import React, { useState } from 'react';
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


" > src/App.js
```

**Run the Application**
**Note:** 
- Start the DB Server
- Start the Backend Application
- Start the Frontend Application with the following
```
npm start
```
_Result of Running Applocation_
![image](https://user-images.githubusercontent.com/111234771/213983786-a04741b0-cb34-45d1-ade6-dd5437f30274.png)


# Git Push
```
git init
git add .
git commit -m "push the FE Settup 1st Time"
git remote add YIRJohnGit git@github.com:YIRJohnGit/001_fe-CRUDRestAPI_react.git
git push --set-upstream YIRJohnGit master
```
