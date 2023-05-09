import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
    definirCookie("tokenJwt", tokenJwt); // recebendo chave e valor
    alert("Usuario autenticado com sucesso!")
    window.location.href = "/"; // redirecionando
});
socket.on("autenticacao_erro", () => alert("Erro na autenticação do usuario."));
socket.on("usuario_nao_encontrado", () => alert("Usuario não encontrado."));


export { emitirAutenticarUsuario }