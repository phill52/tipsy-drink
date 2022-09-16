import './App.css';
import data from './data/db.json'
import Generator from './Generator'
import React, { useState } from 'react';
import Homeboy1 from './assets/homeboy1.mp3'
import {Howl} from 'howler'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Snicker-Bold.ttf';
import cocktail from './assets/cocktail.PNG';
import { useSpring, animated } from 'react-spring'

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
  let [baseGradient, baseDrink] = Generator(flavors,spirits,cocktails,themes,containers);
  const [drink, setDrink] = useState(baseDrink);
  const [gradient, setGradient] = useState(`linear-gradient(#ebebeb,${baseGradient})`);
  const fade = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  })
  const SoundPlay = (src) =>{
    const sound = new Howl({
      src
    })
    sound.play();
  }

  function handlePress(){
    console.log("pressed");
    SoundPlay(Homeboy1);
    let [color, drink] = Generator(flavors,spirits,cocktails,themes,containers);
    setDrink(drink);
    setGradient(`linear-gradient(#ebebeb,${color})`);
  }

  return (
    <div style={{width:'100%', minHeight:'100vh',background:gradient, transition:'0.2s linear' }} >
      <div  className="Header">
        <h5 style={{fontSize:0}}>⠀</h5>
        <h1 style={{fontFamily: 'Snicker', marginTop:'5%', textAlign: 'center', color: '#004E98', fontSize: 102}}>Feeling tipsy?</h1>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop:50}}>
          <img src={cocktail}height={108} width={83}/>
          <Button variant="danger" style={{fontFamily: 'Snicker', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>handlePress()}>Make me a drink!</Button>
          <img src={cocktail}height={108} width={83}/>
        </div>
        <h4 style={{fontFamily: 'Cafeteria', textAlign: 'center', marginTop:71, color: '#004E98', fontSize:35}}>And there you have it homeboy!</h4>
        <h2 style={{fontFamily: 'Snicker', textAlign: 'center', marginTop: 18, alignContent: 'center', color: '#004E98'}}><span style={{borderRadius:10,padding:7, margin:5,backgroundColor: 'rgb(235,235,235)'}}>{drink}</span></h2>
        <h5 className="Bottom" style={{fontSize:40}}>Drink responsibly. Never drink and drive.</h5>
      </div>
      {/* <h5 className="Bottom">Drink responsibly. Never drink and drive.</h5> */}
    </div>
  );
}

export default App;
