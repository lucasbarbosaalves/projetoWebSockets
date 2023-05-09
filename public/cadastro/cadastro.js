import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.getElementById("form-cadastro"); // devolve array

console.log(form);

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = form["input-usuario"].value; // valor do input-usuario
    const senha = form["input-senha"].value; // valor do input-usuario

    emitirCadastrarUsuario({ nome, senha });
})