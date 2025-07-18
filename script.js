const produtos = [
  {
    nome: "Iphone 12",
    preco: 250,
    imagem: "img/iphone_12.png",
    quantidade: 1,
  },
  {
    nome: "iPhone 13",
    preco: 300,
    imagem: "img/iphone_13.png",
    quantidade: 1,
  },
  {
    nome: "iPhone 14",
    preco: 450,
    imagem: "img/iphone_14.png",
    quantidade: 1,
  },
  {
    nome: "iPhone 15",
    preco: 500,
    imagem: "img/iphone_15.png",
    quantidade: 1,
  },
  {
    nome: "iPhone 16",
    preco: 800,
    imagem: "img/iphone_16.png",
    quantidade: 1,
  },
  {
    nome: "Relogio Lacoste",
    preco: 400,
    imagem: "img/relogioLacoste.png",
    quantidade: 1,
  },
];
const card = [];
const botoes = document.querySelectorAll(".botao");
const containerProdutos = document.getElementById("container-produtos");
const total = document.getElementById("total");
const carrinho = document.getElementById("carrinho");
const containerCard = document.getElementById("container-card");
const containerCardProdutos = document.getElementById("container-produto");
const cardTexto = document.getElementById("cardTexto");
let totalValor = 0;

carrinho.addEventListener("click", () => {
  containerCard.style.display = "block";
  containerProdutos.classList.add("container-opacity");
});
containerProdutos.addEventListener("click", () => {
  containerCard.style.display = "none";
  containerProdutos.classList.remove("container-opacity");
});

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    const produto = produtos[index];
    const produtoNoCard = card.find((item) => item.nome === produto.nome);
    if (produtoNoCard) {
      produtoNoCard.quantidade++;
    } else {
      card.push({ ...produto, quantidade: 1 });
    }

    atualizarCarrinho();
  });
});
function atualizarCarrinho() {
  containerCardProdutos.innerHTML = "";
  totalValor = 0;
 containerCardProdutos.appendChild(cardTexto);

  card.forEach((item, index) => {
    totalValor += item.preco * item.quantidade;

    const div = document.createElement("div");
    div.classList.add("produto-carrinho");

    const img = document.createElement("img");
    img.src = item.imagem;
    img.alt = item.nome;
    img.width = 60;
    img.style.padding = "10px";

    const button = document.createElement("button");
    button.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    button.classList.add("botao-remover");

    button.addEventListener("click", () => {
      card.splice(index, 1);
      atualizarCarrinho();
    });

    const p = document.createElement("p");
    p.textContent = `${item.nome} - $${item.preco.toFixed(2)} X${
      item.quantidade
    }`;
    p.classList.add("texto");

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(button);
    containerCardProdutos.appendChild(div);
  });
  total.textContent = `Total: $${totalValor.toFixed(2)}`; // Atualiza o total do carrinho
}
