import React, { useRef, useState } from 'react';
import './App.css';
import { GalleryContainer } from './components/Gallery';
import { BackgroundGrid } from "./components/backgroundGrid/BackgroundGrid";

function App() {

    const refComponent = useRef<HTMLDivElement>(null);
    const getHeight = () => {
        if (refComponent.current !== null) {
            return refComponent.current.getBoundingClientRect().height;
        }
        //return window.innerHeight;
        return document.documentElement.scrollHeight;
    }

    let [height, setHeight] = useState(0);
    setTimeout(() => setHeight(getHeight()), 100);

    return (
        <div className="App" ref={refComponent}>
            <span>Height + {document.documentElement.scrollHeight}</span>
            <GalleryContainer />
            <BackgroundGrid height={getHeight()}/>
        </div>
    );
}


export default App;
