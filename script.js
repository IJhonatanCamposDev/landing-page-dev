const botao = document.querySelector(".hero button");

botao.addEventListener("click", () => {
  const numero = "5521991234695";
  const mensagem = "Olá! Gostaria de um orçamento para um site.";
  
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
});
