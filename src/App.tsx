import React from 'react';
import './App.css';
import { GalleryContainer } from './components/Gallery';
import { cardsCount } from "./functions/CardsCount";

function App() {
    //console.log(cardsCount(["A", "2", "A", "9", "9"]));
    //console.log(cardsCount(["A", "A"]));
    //console.log(cardsCount(["A", "A"]));

    // Calculate scores with cards 2-10
    // console.log(cardsCount(["2", "3"]), 5);
    // console.log(cardsCount(["7", "7", "8"]), 22);
    // console.log(cardsCount(["4", "7", "8"]), 19);
    //
    // // should score J, Q and K as 10
    // console.log(cardsCount(["K", "J", "Q"]), 30);

    // should core hands with Aces correctly
    //console.log(cardsCount(["A", "3"]), 14);
    console.log(cardsCount(["A", "A"]), 12);
    //console.log(cardsCount(["A", "2", "A", "9", "9"]), 22);


  return (
    <div className="App">
      <GalleryContainer />
    </div>
  );
}

export default App;
