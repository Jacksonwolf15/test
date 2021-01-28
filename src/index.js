import ReactDOM from 'react-dom';
import React, {useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped)
    };
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div name = "Jackson Wolf" occupation = "Wizard"
         email = "jtw3vhz@virginia.edu" numba = "(540) 359-2825">
             hi
         <button onClick={handleClick()}>Click to flip</button>
         </div>
  
         <div name = "Jared Nguyen" occupation = "Sorceror"
         email = "idk" numba = "(359) 540-2825">
             bye
         <button onClick={handleClick()}>Click to flip</button>
         </div>
      </ReactCardFlip>
    );
  }
  
//   const BusinessCard = ({name, occupation, email, numba}) => {
//    return (
//    <div className = "card" >
//      <TopHalf name = {name} occupation = {occupation}/>
//      <BottomHalf email = {email} numba = {numba}/>
//    </div> 
//   )}
  
//   const TopHalf = ({name, occupation}) => <div classname = "card">
//     <h1>{name}</h1>
//      <h4>{occupation}</h4>
//   </div>
  
//   const BottomHalf = ({email, numba}) => <div>
//     <h5>{email}</h5>
//      <h5>{numba}</h5>
//   </div>

ReactDOM.render(<CardFlip />, document.querySelector("#root"));
