function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ""); // Remove tudo que não for dígito

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  let resto;

  // Valida o Primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  // Valida o Segundo dígito verificador
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true; // Se passou por tudo, CPF é válido
}

document.getElementById("cpfForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const cpfInput = document.getElementById("cpf").value;
  const messageDiv = document.getElementById("message");

  if (validarCPF(cpfInput)) {
    messageDiv.textContent = "CPF Válido";
    messageDiv.className = "message sucess";
  } else {
    messageDiv.textContent = "CPF Inválido";
    messageDiv.className = "message erro";
  }

  messageDiv.style.display = "block";

  // Apaga a mensagem e limpa o formulário após 5 segundos
  setTimeout(() => {
    messageDiv.style.display = "none";
    messageDiv.textContent = "";
    document.getElementById("cpfForm").reset();
  }, 5000);
});

// Script de animação 3D do background da página

VANTA.GLOBE({
  el: "#vantaglobe",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x1e3a5f, // Azul escuro
  color2: 0x87a8c5, // Azul claro
  backgroundColor: 0xf0f4f8, // Cinza muito claro para fundo neutro
});
