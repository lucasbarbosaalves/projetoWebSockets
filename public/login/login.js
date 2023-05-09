import { emitirAutenticarUsuario } from "./socket-front-login.js";

const form = document.getElementById("form-login"); // devolve array

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = form["input-usuario"].value; // valor do input-usuario
    const senha = form["input-senha"].value; // valor do input-usuario

    emitirAutenticarUsuario({ nome, senha });
})