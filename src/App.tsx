import React, { useRef } from 'react';
import './App.css';
import { GalleryContainer } from './components/Gallery';
import { BackgroundGrid } from "./components/backgroundGrid/BackgroundGrid";

function App() {

    //const refComponent = createRef();
    const refComponent = useRef<HTMLDivElement>(null);

    const getHeight = () => {
        if (refComponent.current !== null) {
            return refComponent.current.getBoundingClientRect().height;
        }
        return window.innerHeight; //? разобрать природу
    }

    return (
        <div className="App" ref={refComponent}>
            <span>sf</span>
            <GalleryContainer />
            <BackgroundGrid height={getHeight()}/>
        </div>
    );
}


export default App;
