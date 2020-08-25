class Ascii {

  constructor(){}

  encrypt = (text: string): number => {
    let textInAscii: string = '';
    for(let i: number = 0; i <= text.length - 1; i++){
      textInAscii = textInAscii + text.charCodeAt(i);
    }

    return Number(textInAscii);
  }

  decrypt = (ascii: Array<number>): string => {
    let asciiInText: string = '';
    ascii.forEach(numberAscii =>
      asciiInText = asciiInText + String.fromCharCode(numberAscii)
    );
    return asciiInText;
  }

  

}

export default Ascii;