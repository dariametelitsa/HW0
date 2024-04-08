import styled from "styled-components";
import { cardTheme } from "../Styles/Theme.styles";
import { Button } from "./Button";
import myimage from './desert.jpg';


export type CardTypes = {
    title: string;
    text: string;
}
export function Card(props: CardTypes) {
  return (
    <CardStyle>
      <Image width='280' height='170' src={myimage} alt="The desert." />
      <div>
        <Headline>{props.title}</Headline>
        <Text>{props.text}</Text>
        <Button as='a' href="#">See more</Button>
        <Button outline>Save</Button>
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
    /* max-width: min-content; */
    align-self: start;
    min-width: 20%;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);

    div {
        padding: 20px 10px 0;

        @media screen and (max-width: 1000px) {
            display: flex;
            flex-direction: column;
            padding: 10px 0 0 0;

            a {
                margin-right: 0;
            }
        }
    }

    Button {
        margin-bottom: 12px;
    }

    a {
        text-align: center;
        margin-right: 12px;
        margin-bottom: 12px;
    }
`

const Headline = styled.h2`
  margin-bottom: 20px;
  color: ${cardTheme.colors.grey.dark};
  font-size: ${cardTheme.fontSize.headline};
`

const Text = styled.p`
  margin-bottom: 20px;
  color: ${cardTheme.colors.grey.light};
  font-size: ${cardTheme.fontSize.main};
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
`