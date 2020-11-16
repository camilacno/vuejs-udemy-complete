function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000);
  })
}

falarDepoisDe(3, 'Olá, mundo')
  .then(frase => frase.concat('!!!'))
  .then(fraseFinal => console.log(fraseFinal))


function falarDepoisDe2(segundos2, frase2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(frase2)
    }, segundos2 * 1000);
  })
}

falarDepoisDe2(3, 'Olá, mundo')
  .then(frase2 => frase2.concat('!!!'))
  .then(fraseFinal2 => console.log(fraseFinal2))
  .catch(e => console.log(e)) // não vai cair no concat pois deu erro (reject)