
export const cardsCount = (cards: Array<string>) => {
    let a = 0;
    let res = 0;

    res =  cards.map(el => {
        if(/^[b-zB-Z]+$/.test(el)) {
            return 10;
        }
         if(/^[aA]+$/.test(el)) {
             a++;
             return 0;
         }
        return +el;
    }).reduce((sum, el) => {
        return sum += el;
     }, 0);

    while (a > 0) {
        if(res + 11 <= 21) {
            res = res + 11;
            --a;
            continue;
        }
        res = res + 1;
        --a;
    }
    return res;
}