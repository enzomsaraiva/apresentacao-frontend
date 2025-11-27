// Rolagem suave ao clicar no menu
const links = document.querySelectorAll(".main-nav a");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const alvo = document.querySelector(link.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});


// Deixar o item do menu marcado ao clicar
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


// Validação simples do formulário
const form = document.querySelector(".contact-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const nome = form.name.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.message.value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  form.reset();
});
