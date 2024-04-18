import React from 'react';

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const RatingControlled = () => {
    let [stars, setStars] = React.useState(0);
    const starArr = [ 0, 1, 2, 3, 4];

    return (
        <div>
            {
                starArr.map((star) => {
                    return <Star selected={stars > star} changeRating={() => setStars(star + 1)}/>
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
