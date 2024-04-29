import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingProps = {
    defaultValue?: RatingValueType;
    onChange: (value: RatingValueType) => void;
}

export const Rating = ({defaultValue, onChange}: RatingProps) => {
    let [stars, setStars] = React.useState(defaultValue ? defaultValue : 0);
    const starArr: RatingValueType[] = [ 0, 1, 2, 3, 4];

    return (
        <div>
            {
                starArr.map((star) => {
                    return <Star selected={stars > star} changeRating={() => {setStars(star + 1); onChange(star)}} />
                })
            }
        </div>
    );
};

function Star({ selected, changeRating }: {selected: boolean, changeRating: () => void}) {

    return <span onClick={() => changeRating()} style={{margin: '0 10px', cursor: 'pointer'}}>
        {selected ? <b style={{color: 'black'}}>Star</b> : 'Star'}
    </span>
}
