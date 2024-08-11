import React from 'react';
import './App.css'
import Rock from './components/stone.png'
import Paper from './components/paper.png'
import Scissors from './components/kathi.png'

function App() {
  const choices = ['Rock', 'Paper', 'Scissors']; //  determined 3 values in an array  this arr has index 0 , 1 , 2 👍 //this name is choices  arr

  const generateComputerChoice = () =>{       
    const wholenumber = Math.floor(Math.random() * choices.length); 
    // console.log(randomIndex);
    // this is generateComputerchoice function ,  this is created because to produce a random selection of the choices , it works using Math.random() this gives value between 0 and 1 which mean 0.001 and 0.99  ; here we mutiply with arr.length which will be 3 , if the random value 0.23 * 3 it will be 0.69 if it is 0.99  it will be some 2.98 like that ; but we need some whole number , for poining the index ;  so we use Math.floor  // which will take the number before decimal as an whole number for ex 0.99 as 0 , 1.99 as 1 ,  2.99 as 2;
     return choices[wholenumber];   
// normally  for arr["a", "b" , "c"];  if we console a[2]  ; it will result c , right so for the above random index value will be the result
  };   
                                                                   

  const determineWinner = (player, computer) => { // this is build logical part for determining the winner as it is easy to understand by seeing the below code ,, this is mentioned in handleplayerchoice function , at there we pass two value as user choice and computer choice , and with that the result will be calculated
    if (player === computer) {
      return 'Draw!😊';
    }

    else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'You Win 😁!';
    }
else{
    return 'You Lose 😒!';
}
  };


  //choice is a variable dont confuse it with arr name this is singular
  const monish = (choice) => {  // this was the main thing that will send to the the deteminewinner()  , this is used in butto onclick value
    const computerGeneratedChoice = generateComputerChoice();  // here we created a variable and assigned it with a function , the main reason is to send as parameter to the other function
    const gameResult = determineWinner(choice, computerGeneratedChoice);  //you can see here that two values has beem sent 
    alert(`You choise: ${choice}\nComputer choise: ${computerGeneratedChoice}\nResult: ${gameResult}`); //and this is alert we used  template litral method , which mean  this is a feature that allows you to embed expressions inside string literals. They provide an easier and more readable way to create strings, especially when you need to include variables or expressions.
  };

  return (// here each button will be sent as an choice if rock is clicked then it will play according to it.
    <div className='main'>  
      <h1 className='heading'>Rock Paper Scissors</h1>
      <div className='buttons'>
      <button onClick={() => monish('Rock')}><img src={Rock} className='button-image' alt='img'/></button> 
      <button onClick={() => monish('Paper')}><img src={Paper} className='button-image' alt='img'/></button>
      <button onClick={() => monish('Scissors')}><img src={Scissors} className='button-image' alt='img'/></button>
      </div>
      <div className='result'>
        
      </div>
    </div>
  );
}

export default App;
