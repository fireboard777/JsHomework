function getDigitsOfNumber(num){
    if (num.isInteger(num) || num <0 || num> 999){
        console.log('Значение аргумента должно быть числом в диапазоне [0 .. 999]');
        return {};
}
}
return {
    units:num % 10,
    hundreds: Math.floor(num/100),
    tens: Math.floor(num / 10) % 10,
}

console.log(getDigitsOfNumber(123));