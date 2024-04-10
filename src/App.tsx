import React, { useEffect } from 'react';
import './App.css';
import { GalleryContainer } from './components/Gallery';
import { BackgroundGrid } from "./components/backgroundGrid/BackgroundGrid";

function App() {

    //const refComponent = createRef();
    const refComponent = React.useRef<HTMLDivElement>(null);

    const getHeight = () => {
        if (refComponent.current !== null) {
            return refComponent.current.getBoundingClientRect().height;
        }
        return 500; //? разобрать природу
    }

    return (
        <div className="App" ref={refComponent}>
            <GalleryContainer />
            <BackgroundGrid height={getHeight()}/>
        </div>
    );
}

export default App;
