import styled from "styled-components";
import { cardTheme } from "../../styles/Theme.styles";
import { useState } from "react";
import { OnOff } from "../onOffSet/onOff/OnOff";
import { Accordion } from "../accordionSet/accordion/Accordion";
import { Rating } from "../ratingSet/rating/Rating";
import { RatingControlled, RatingValueType } from "../ratingSet/ratingControlled/RatingControlled";
import { AccordionControlled, ItemType } from "../accordionSet/accordionControlled/AccordionControlled";
import { OnOffControlled } from "../onOffSet/onOffControlled/OnOffControlled";
import { Gallery } from "./Gallery";

export const accordionSet: ItemType[] = [
    {title: 'Hey', value: '1'},
    {title: 'how', value: '2'},
    {title: 'are', value: '3'},
    {title: 'you', value: '4'},
    {title: 'dude', value: '5'},
];

export function GalleryContainer() {

    let [onOff, setOnOff] = useState('Off');
    const onOffChange = (isOn: boolean) => {
        isOn ? setOnOff('On') : setOnOff('Off');
    }

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return <div>
        <Headline>Gallery</Headline>
        <OnOff callBack={onOffChange}/>
        <OnOff callBack={onOffChange}/>
        <OnOffControlled isOn={switchOn} onChange={setSwitchOn} />

        <span>Вы выбрали {onOff} в последний раз!</span>
        <div style={{ display: "flex", justifyContent: "center", gap: '60px' }}>
            <Accordion title={'Hey!'}/>
            <AccordionControlled title={'Controlled'} items={accordionSet} collapsed={accordionCollapsed} onClickTitle={() => setAccordionCollapsed(!accordionCollapsed)} onItemClick={()=>{}}/>
            <Rating onChange={()=>{}} />
            <RatingControlled value={ratingValue} onClick={setRatingValue}/>
        </div>

        <Gallery columns={4}/>
    </div>
}



const Headline = styled.h1`
    font-size: 35px;
    margin-top: 70px;
    margin-bottom: 30px;
    color: ${cardTheme.colors.grey.dark};
    text-align: center;
    font-weight: 700;
`