import './App.css';
import data from './data/db.json'
import Generator from './Generator'
import React, { useState } from 'react';
import Homeboy1 from './assets/homeboy1.mp3'
import {Howl, Howler} from 'howler'

const audioClips = [
  {sound: Homeboy1, label: 'Homeboy1'}
]

function App() {
  let flavors=[];
  let spirits=[];
  let cocktails=[];
  let themes=[];
  let containers=[];
  {data.flavor.map((item, i) => (flavors.push(item)))}
  {data.spirit.map((item, i) => (spirits.push(item)))}
  {data.cocktail.map((item, i) => (cocktails.push(item)))}
  {data.theme.map((item, i) => (themes.push(item)))}
  {data.container.map((item, i) => (containers.push(item)))}

  const [drink, setDrink] = useState(Generator(flavors,spirits,cocktails,themes,containers));

  const SoundPlay = (src) =>{
    const sound = new Howl({
      src
    })
    sound.play();
  }

  function handlePress(){
    console.log("pressed");
    SoundPlay(Homeboy1);
    setDrink(Generator(flavors,spirits,cocktails,themes,containers));
  }

  return (
    <div className="App">
      <div className="Title">
        <h1 className="Header">Not feeling tipsy enough?</h1>
        <button onClick={()=>handlePress()}/>
        <h2>{drink}</h2>
      </div>
    </div>
  );
}

export default App;
