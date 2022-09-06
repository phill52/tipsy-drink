import './App.css';
import data from './data/db.json'
import Generator from './Generator'
import React, { useState } from 'react';
import Homeboy1 from './assets/homeboy1.mp3'
import {Howl} from 'howler'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Snicker-Bold.ttf';

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
      <div  className="Header">
        <h5 style={{fontSize:0}}>⠀</h5>
        <h1 style={{marginTop:'5%', textAlign: 'center'}}>Feeling Tipsy?</h1>
          <Button variant="danger" style={{justifyContent: 'center'}} onClick={()=>handlePress()}>Tipsy</Button>
          <h4 style={{textAlign: 'center', marginTop:'10%'}}>Try the</h4>
          <h2 style={{textAlign: 'center', alignContent: 'center'}}><span style={{backgroundColor: 'rgb(235,235,235)'}}>{drink}</span></h2>
          <h5 className="Bottom">Drink responsibly. Never drink and drive.</h5>
      </div>
      {/* <h5 className="Bottom">Drink responsibly. Never drink and drive.</h5> */}
    </div>
  );
}

export default App;
