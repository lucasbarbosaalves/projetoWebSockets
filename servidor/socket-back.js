import "dotenv/config";

import registrarEventosCadastros from "./registrarEventos/cadastro.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosLogin from "./registrarEventos/login.js";

import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const npsUsuarios = io.of("/usuarios")

npsUsuarios.use(autorizarUsuario);

npsUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, npsUsuarios);
  registrarEventosDocumento(socket, npsUsuarios);
})

io.on("connection", (socket) => {
  registrarEventosCadastros(socket, io);
  registrarEventosLogin(socket, io);

});
