import React from 'react';

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = () => {
    let [stars, setStars] = React.useState(0);
    const starArr = [1, 2, 3, 4, 5];

    return (
        <div>
            {
                starArr.map((star, i) => {
                    return <Star selected={stars > i} changeRating={() => setStars(star)}/>
                })
            }
        </div>
    );
};

function Star({ selected, changeRating }: {selected: boolean, changeRating: () => void}) {
    return selected ? (<span onClick={() => changeRating()} style={{margin: '0 10px', cursor: 'pointer'}}><b style={{color: 'black'}}>Star</b></span>
    ) : (
        <span onClick={() => changeRating()} style={{margin: '0 10px', cursor: 'pointer'}}>Star</span>
    );
}
