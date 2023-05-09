import { MongoClient } from "mongodb";

const cliente = new MongoClient(
"mongodb+srv://lucas:123@cluster01.9rehtbl.mongodb.net/?retryWrites=true&w=majority"
);

let documentosColecao;
let usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("projeto-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
