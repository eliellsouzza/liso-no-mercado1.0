const btn = document.querySelector("#send");

/* campo nome do produto */
btn.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name");
  const value = name.value;

  console.log(value);
});

/* campo de quantidade */
btn.addEventListener("click", function (e) {
  e.preventDefault();

  const qtd = document.querySelector("#qtd");
  const value = qtd.value;

  console.log(value);
});

/* campo de preço */
btn.addEventListener("click", function (e) {
  e.preventDefault();

  const preco = document.querySelector("#preco");
  const value = preco.value;

  console.log(value);
});
