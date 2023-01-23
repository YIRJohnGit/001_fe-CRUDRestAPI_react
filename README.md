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


## Setting Up API request with AXIOS 

**Note:** Sample API
```
https://official-joke-api.appspot.com/random_joke
```

**Installation of Axios**
```
npm install axios --save
```

