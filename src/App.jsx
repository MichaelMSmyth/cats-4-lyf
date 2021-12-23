import React from "react";
import "./App.css";
// import { useState } from "react";

// https://source.unsplash.com/random/?cat

export default function App() {
  return (
    <div className="wrapper">
      <Card img src="https://unsplash.com/photos/9UUoGaaHtNE" alt="A beautiful cat" title="Cat Name" description="About this cat!"/>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
      <img src={props.img} alt={props.alt}/>
      <h2 className="card__title">{props.title}</h2>
      <p className="card__description">{props.description}</p>
      <button>Add to cart</button>
      </div>
    </div>
  );
}



        
        
        
        


// const App = () => {

//   // TODO - Get cat data from API

//   const[catData, setCatData] = useState("")

//   const apiKey = "7069bf1c-23bc-4ed2-925d-3c546afb9260";
//   const apiUrl = "https://api.thecatapi.com/v1/images/search";
//   const apiUrlLimited = "https://api.thecatapi.com/v1/images/search?limit=10"

//   const getpic = () => {
//     const response = await fetch(apiUrlLimited)
//     const data = await response.json();
//     setCatData(data);
//   }

//  useEffect( ( => {
//    getpic()
//  },[]))

//  if(!catData){
//    return null
//  }

//   return (
//   <div id='display'>
//     <h1>Cat Shop</h1>
//     {catData.map(cat) => {
//       return(
//         <div className="card">
//           <img src={cat.url} alt='no pic'/>>
//           <button>+</button>
//         </div>
//       )
//     }}
//   </div>
//   )
// }

// TODO - Create a card component

// TODO - Create basket component

// TODO - Create CSS layout
