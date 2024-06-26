//Desconto de Produto Com Prototypes
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * percentual) / 100;
};
const p1 = Object.create(Produto.prototype, {
  produto: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "Tenês Nike",
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value:300
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});
p1.desconto(30);
console.log(p1);
