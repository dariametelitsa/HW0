export const cardsCount = (cards: Array<string>) => {
    return cards.reduce((sum, el) => {
        if (/^[b-zB-Z]+$/.test(el)) {
            return sum + 10;
        }
        if (/^[aA]+$/.test(el)) {
            return (sum + 11) <= 21 ? (sum + 11) : (sum + 1);
        }
        return sum + +el;
    }, 0);
}

function disemvowel(str: string) {
    return str.replace(/[aeiou]/gi, '');
}

function findOdd(arr: Array<number>) {
    const obj:any = {}
    arr.forEach((el, index) => {
        if(!obj.hasOwnProperty(el)) {
            obj[el] = 1;
        }
        else obj[el]++;
    });
    for (let key in obj) {
        if(obj[key] % 2 === 1) {
            return +key;
        }
    }
}

