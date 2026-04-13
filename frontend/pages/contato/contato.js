const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const buttonLogin = document.querySelector(".buttonLogin");
const openCarrinho = document.querySelector(".openCarrinho");
const contactForm = document.getElementById("contactForm");

const contactFields = [
  {
    input: document.getElementById("name"),
    error: document.getElementById("nameError"),
    message: "O nome deve ter pelo menos 3 caracteres.",
  },
  {
    input: document.getElementById("email"),
    error: document.getElementById("emailError"),
    message: "Digite um email valido",
  },
  {
    input: document.getElementById("message"),
    error: document.getElementById("messageError"),
    message: "A mensagem deve ter pelo menos 3 caracteres.",
  },
];

function updateFieldState(field) {
  if (!field.input || !field.error) {
    return;
  }

  const hasValue = field.input.value.trim().length > 0;
  const isValid = field.input.checkValidity();

  field.input.classList.toggle("is-valid", hasValue && isValid);
  field.input.classList.toggle("is-invalid", hasValue && !isValid);

  if (!hasValue) {
    field.error.textContent = "";
    field.input.setAttribute("aria-invalid", "false");
    return;
  }

  if (isValid) {
    field.error.textContent = "";
    field.input.setAttribute("aria-invalid", "false");
    return;
  }

  if (field.input.validity.valueMissing) {
    field.error.textContent = "Este campo e obrigatorio.";
  } else if (field.input.validity.tooShort || field.input.validity.patternMismatch || field.input.validity.typeMismatch) {
    field.error.textContent = field.message;
  } else {
    field.error.textContent = field.input.validationMessage;
  }

  field.input.setAttribute("aria-invalid", "true");
}

if (contactFields.length > 0) {
  contactFields.forEach((field) => {
    if (!field.input) {
      return;
    }

    field.input.addEventListener("input", () => updateFieldState(field));
    field.input.addEventListener("blur", () => updateFieldState(field));
  });
}

openCarrinho.addEventListener("click", () => {
  window.location.href = "../confirmar_compra/confirmar_compra.html";
});

buttonLogin.addEventListener("click", () => {
  window.location.href = "../login/login.html";
});

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("is-open");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    let formIsValid = true;

    contactFields.forEach((field) => {
      updateFieldState(field);
      if (field.input && !field.input.checkValidity()) {
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    contactForm.reset();

    contactFields.forEach((field) => {
      if (!field.input || !field.error) {
        return;
      }

      field.input.classList.remove("is-valid", "is-invalid");
      field.input.setAttribute("aria-invalid", "false");
      field.error.textContent = "";
    });

    window.alert("Mensagem enviada com sucesso!");
  });
}
