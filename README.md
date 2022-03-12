# to-arabic-numbers

convert numeric strings contains arabic numbers to english numbers and vice versa.

##### Run this commad to install the package:
```npm install to-arabic-numbers```

#### usage:
```js
const { convertNumbers2Arabic , convertNumbers2English } = require('to-arabic-numbers');

let stringWithArabicNumbers =  convertNumbers2Arabic('١٢٣ 123 أبجد abc');
console.log(stringWithArabicNumbers);  // '١٢٣ ١٢٣ أبجد abc'

let stringWithEnglishNumbers =  convertNumbers2English('١٢٣ 123 أبجد abc');
console.log(stringWithEnglishNumbers);  // '123 123 أبجد abc'