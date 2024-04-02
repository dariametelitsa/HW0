function zero() {
    const num = 0;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function one() {
    const num = 1;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function two() {
    const num = 2;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function three() {
    const num = 3;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function four() {
    const num = 4;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function five() {
    const num = 5;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function six() {
    const num = 6;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function seven() {
    const num = 7;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function eight() {
    const num = 8;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}
function nine() {
    const num = 9;
    if(arguments.length === 0)
        return num;
    return (arguments[0][0](num, arguments[0][1]));
}

function plus(number: number) {
    return [action.plus, number];
}
function minus(number: number) {
    return [action.minus, number];
}
function times(number: number) {
    return [action.times, number];
}
function dividedBy(number: number) {
    return [action.dividedBy, number];
}

export const action = {
    plus: (a:number,b:number) => a+b,
    minus: (a:number,b:number) => a-b,
    times: (a:number,b:number) => a*b,
    dividedBy: (a:number,b:number) => a/b,
}