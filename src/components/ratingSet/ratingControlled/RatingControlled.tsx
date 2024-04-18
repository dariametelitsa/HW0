import React from 'react';

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const RatingControlled = (props: RatingProps) => {
    let [stars, setStars] = React.useState(0);
    const starArr = [ 0, 1, 2, 3, 4];

    return (
        <div>
            {
                starArr.map((star: number, index) => {
                    return <Star selected={props.value > index} />
                })
            }
        </div>
    );
};

function Star({ selected }: {selected: boolean}) {

   if(selected) {
       return <span><b>Star </b></span>
   } else {
       return <span>Star </span>
   }
}
