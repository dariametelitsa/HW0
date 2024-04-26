// @flow
import * as React from 'react';
import styled from "styled-components";
import { Card } from "./Card";
import { useState } from "react";

type CardsDataType = {
    title: string;
    text: string;
}

export type GalleryPropsType = {
    columns?: 2 | 3 | 4 | 5,
}

const cardsData: Array<CardsDataType> = [
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
    {
        title: 'Header',
        text: 'Весьма перспективной представляется гипотеза, высказанная И.Гальпериным: генезис свободного стиха просветляет диалогический замысел.',
    },
]

export const Gallery = (props: GalleryPropsType) => {
    let [next, setNext] = useState(0);
    function changeText() {
        return next < cardsData.length - 1 ? setNext(next + 1) : setNext(0);
    }

    function cardGenerate(count: number = 6) {
        const cards = [];
        for (let i = 0; i < count; i++) {
            cards.push(<Card title={cardsData[next].title} text={cardsData[next].text} changeText={changeText}/>);
        }
        return cards;
    }
    return (
        <GalleryStyled columns={props.columns}>
            {cardGenerate(cardsData.length)}
        </GalleryStyled>
    );
};

const GalleryStyled = styled.div<GalleryPropsType>`
    margin: auto;
    max-width: 1000px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
`