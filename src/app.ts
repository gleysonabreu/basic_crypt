import Ascii from './classes/Ascii';

const ascii = new Ascii();
const encrypt = ascii.encrypt('HEY');
const decrypt = ascii.decrypt([72, 69, 89]);
console.log(encrypt);
console.log(decrypt);