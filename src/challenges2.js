// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  } 
    
  for (let n in numeros){
  if (numeros[n] < 0 || numeros[n] > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let repetido = [];
  let contNumero = 0;
  for (let n2 in numeros) {
    for (let n3 in numeros) {
        if (numeros[n2] === numeros[n3]) {
          contNumero += 1;
        }
        if (contNumero >= 3){
          let numRepetido = numeros[n2];
          repetido.push(numRepetido);
        }
        for (let n4 in repetido)
        if (numeros[n2] === repetido[n4]){
          return 'não é possível gerar um número de telefone com esses valores'    
        } 
      }
    }
    let telefone = '(' + numeros[0]  + numeros[1] + ') ' + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9] + numeros[10];
    return telefone;
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
    diferenca = "sim";
  } else {
    diferenca = "não";
  }

  if (soma === "sim" && diferenca === "sim"){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
