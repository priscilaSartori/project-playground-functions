// Desafio 1
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let sentence = phrase.split(' ');
  return sentence;
}

// Desafio 4
function concatName(array) {
  let concatenado = array[array.length-1] + ', ' + array[0];
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = -10;
  let contNumero = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index];
    }
  }
  for (let index2 = 0; index2 <= numeros.length; index2 += 1) {
    if (numeros[index2] === maiorNumero) {
      contNumero += 1;
    }
  }
  return contNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = cat1 - mouse;
  if (gato1 < 0) {
    gato1 *= -1;
  }
  let gato2 = cat2 - mouse;
  if (gato2 < 0) {
    gato2 *= -1;
  }
  if (gato1 < gato2) {
    return 'cat1';
  } else if (gato2 < gato1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let div = [];
  for (let index = 0; index <= numeros.length-1; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      div.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      div.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      div.push('buzz');
    } else {
      div.push('bug!');
    }
  } return div;
}

// Desafio 9
function encode(phrase) {
  let frase1 = [''];
  let frase2 = ' ';
  for (let letter of phrase) {
    if (letter === 'a') {
      frase1.push('1');
    } else if (letter === 'e') {
      frase1.push('2');
    } else if (letter === 'i') {
      frase1.push('3');
    } else if (letter === 'o') {
      frase1.push('4');
    } else if (letter === 'u') {
      frase1.push('5');
    } else {
      frase1.push(letter);
    }
  } frase2 = frase1.join('');
  return frase2;
}

function decode(frase2) {
  let frase3 = [''];
  let frase4 = '';
  for (let letter1 of frase2) {
    if (letter1 === '1') {
      frase3.push('a');
    } else if (letter1 === '2') {
      frase3.push('e');
    } else if (letter1 === '3') {
      frase3.push('i');
    } else if (letter1 === '4') {
      frase3.push('o');
    } else if (letter1 === '5') {
      frase3.push('u');
    } else {
      frase3.push(letter1);
    }
  } frase4 = frase3.join('');
  return frase4;
}

// Desafio 10
function techList(array, string) {
  if (array === 0) {
    return "Vazio!";
  } else {
    let tecnologia2 = [''];
    let array2 = array.sort();
    for (let tec in array2) {
        let tecnologia = {
        'name': string,
        'tech': array[tec],
      };
      tecnologia2.push(tecnologia);
    }
    return tecnologia2;
  };
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
