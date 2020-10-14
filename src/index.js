const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];

	for (let i = 0; i < expr.length / 10; i++) {
		arr[i] = expr.slice(i * 10, (i + 1) * 10);
		if (arr[i] === '**********') {
			arr[i] = ' ';
		} else {
			arr[i] = parseInt(arr[i], 10).toString();
			arr[i] = define(arr[i]);
		}
	}
	return arr.join('');
}

function define(str) {
	let bet = '';

	for (let j = 0; j < str.length; j += 2) {
		if (str.slice(j, j + 2) === '10') {
			bet +=  '.';
		} else {
			bet += '-';
		}
	}
	return MORSE_TABLE[bet];
}

module.exports = {
    decode
}