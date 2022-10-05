import { useState } from 'react';
import './App.css';

import LiturgyTreeDisplay from "./components/LiturgyTreeDisplay.js";
import LiturgyEditor from "./components/Editor/LiturgyEditor.js";
import FooterNavigator from "./components/FooterNavigator.js";





function App() {
  let [liturgyObj, setLiturgyObj] = useState(null);
  let [liturgy, setLiturgy] = useState(null);
  let [currentLiturgyPath, setCurrentLiturgyPath] = useState(null);
  
  const fetchLiturgy = async _ => {
    const response = await fetch("http://127.0.0.1:9001/api/liturgy");
    const liturgyToState = await response.json();
    console.log("Database loaded.");
    return liturgyToState;
  }

  const liturgyRefresh = async _ => {
    const liturgy = await fetchLiturgy();
    setLiturgyObj(liturgy);
  }
  
  const cloneLiturgy = async (data, pathInObj) => {
    console.log("POST http://127.0.0.1:9001/api/" + pathInObj)
    const response = await fetch("http://127.0.0.1:9001/api/" + pathInObj, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(`Success: ${response.status} ${response.statusText}`);
    liturgyRefresh();
  }
  
  const updateLiturgy = async (data, pathInObj) => {
    console.log("PUT http://127.0.0.1:9001/api/" + pathInObj)
    console.log(data);
    const response = await fetch("http://127.0.0.1:9001/api/" + pathInObj, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(`Success: ${response.status} ${response.statusText}`);
    liturgyRefresh();
  }
  
  const deleteLiturgy = async (pathInObj) => {
    console.log("DELETE http://127.0.0.1:9001/api/" + pathInObj)
    const response = await fetch("http://127.0.0.1:9001/api/" + pathInObj, {
      method: "DELETE"
    });
    console.log(`Success: ${response.status} ${response.statusText}`);
    liturgyRefresh();
  }
  
  const treeMethods = {
    delete: deleteLiturgy,
    update: updateLiturgy,
    clone: cloneLiturgy,
    refresh: setLiturgy,
    setPath: setCurrentLiturgyPath
  }

  return (
    <div className='App'>
      <div className='main-display'>
        <LiturgyTreeDisplay data={liturgyObj} methods={treeMethods} />
        <LiturgyEditor data={liturgy} methods={treeMethods} path={currentLiturgyPath}/>
      </div>
      <FooterNavigator refreshbutton={liturgyRefresh} methods={treeMethods}/>
    </div>
  );
}

export default App;
