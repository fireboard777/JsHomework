'use strict';

for (let p = 0;p <=10; p++){
if (p == 0){
    console.log(p + 'это ноль');
} else if (p % 2 == 0) {
    console.log(p + '- это четное число')
} else {
    const newLocal = '- это НЕ четное число';
    console.log(p + newLocal)
}
}