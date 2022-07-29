// Desafio 11
function generatePhoneNumber(numeros) {
  let repetido = [];
  let contNumero = 0;
  let telefone = '(' + numeros[0] + numeros[1] + ') ' + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9] + numeros[10];
  let test2;

    for (let index = 0; index <= numeros.length; index += 1) {
      if (numeros[index] < 0 || numeros[index] > 9) {
      test2 = 'menor';
    };
  }

  for (let index2 = 0; index2 <= numeros.length; index2 += 1) {
    for (let index3 = 0; index3 <= numeros.length; index3 += 1) {
      if (numeros[index2] === numeros[index3]) {
      contNumero += 1;
      };
    }
    if (contNumero >= 3) {
      repetido.push(numeros[index2]);
    }
    contNumero = 0;
  }

  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if(test2 === 'menor') {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if(repetido.length !== 0 ) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    return telefone;
  };
}


// Desafio 12
function triangleCheck(lineA, lineB, LineC) {
  let soma;
  let diferenca;
  if (lineA < lineB + LineC && lineB < lineA + LineC && LineC < lineA + lineB) {
    soma = 'sim';
  } else {
    soma = 'não';
  }

  if (lineA > Math.abs(lineB - LineC) && lineB > Math.abs(lineA - LineC) && LineC > Math.abs(lineB - lineA)) {
    diferenca = 'sim';
  } else {
    diferenca = 'não';
  }

  if (soma === 'sim' && diferenca === 'sim') {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
  let result = string.match(reg);
  let copo = 0;
  for (let index = 0; index < result.length; index += 1) {
    copo += parseInt(result[index]);
  }

  if (copo === 1) {
    return copo + ' copo de água';
  } else {
    return copo + ' copos de água';
  };
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};