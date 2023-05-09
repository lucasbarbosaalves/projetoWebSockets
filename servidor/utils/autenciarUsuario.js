import { scryptSync, timingSafeEqual } from "crypto";

function autenciarUsuario(senhaDigitada, usuario) {
    const hashTeste = scryptSync(senhaDigitada, usuario.salSenha, 64); 

    const hashReal = Buffer.from(usuario.hashSenha, "hex");

    const autenticado = timingSafeEqual(hashTeste, hashReal); // retorno bo

    return autenticado;
}

export default autenciarUsuario;