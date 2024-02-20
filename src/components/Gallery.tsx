import styled from "styled-components";
import { Card } from "./Card";
import { cardTheme } from "../Styles/Theme.styles";

export function GalleryContainer() {
  return <div>
   <Headline>Gallery</Headline>
   <p>sdfsdfs</p>
    <Gallery columns={4}>
      {cardGenerate(7)}
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
    cards.push(<Card />);
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