const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
// bind: método responsável por amarrar um determminado objeto para que ele seja
// o dono da execução daquele método sempre que for chamado
falarDePessoa()