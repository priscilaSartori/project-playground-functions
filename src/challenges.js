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
  let concatenado = array[array.length -1] + ', ' + array[0];
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao
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
        if (numeros[index2] === maiorNumero){
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
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
