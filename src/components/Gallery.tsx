import styled from "styled-components";
import { Card, CardTypes } from "./Card";
import { cardTheme } from "../Styles/Theme.styles";
import { useState } from "react";


const cardsData: CardTypes[] = [
    {
        title: 'Header',
        text: 'Весьма перспективной представляется гипотеза, высказанная И.Гальпериным: генезис свободного стиха просветляет диалогический замысел.',
    },
    {
        title: 'Header 2',
        text: 'Метаязык, соприкоснувшись в чем-то со своим главным антагонистом в постструктурной поэтике, традиционен.',
    },
    {
        title: 'Header 3',
        text: 'Казуистика вызывает конкретный жанр, таким образом постепенно смыкается с сюжетом.',
    },
    {
        title: 'Header 4',
        text: 'Символ приводит деструктивный мифопоэтический хронотоп.',
    },
    {
        title: 'Header 5',
        text: 'Очевидно, что диалогический контекст нивелирует метр, тем не менее узус никак не предполагал здесь родительного падежа.',
    },
]

export function GalleryContainer() {
    let [next, setNext] = useState('0');

    return <div>
        <Headline>Gallery</Headline>
        <Gallery columns={4}>
            {cardGenerate(cardsData.length)}
        </Gallery>
    </div>
}


type GalleryPropsType = {
    columns?: 2 | 3 | 4 | 5,
}
const Gallery = styled.div<GalleryPropsType>`
    margin: auto;
    max-width: 1000px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(${props => props.columns || 3}, 1fr);

`

function cardGenerate(count: number = 6) {
    const cards = [];
    for (let i = 0; i < count; i++) {
        cards.push(<Card title={cardsData[i].title} text={cardsData[i].text}/>);
    }
    return cards;
}

const Headline = styled.h1`
    font-size: 35px;
    margin-top: 70px;
    margin-bottom: 30px;
    color: ${cardTheme.colors.grey.dark};
    text-align: center;
    font-weight: 700;
`