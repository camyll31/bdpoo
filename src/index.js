let db = require("./db");
let Cliente = require("./model/Cliente");

    async function sincronizar() {
        await db.sync();
}
sincronizar();
async function inserir(obj) {
   let res = await Cliente.create(obj)
       console.log(res);
}
//let c1 = {nome: "Fulano", sobrenome: "da Silva", endereco: "rua da Misericórdia", telefone: "98754312"};
//let c2 = {nome:"Marivalda", sobrenome: "Ferreira", endereco: "rua do Limoeiro", telefone: "87612309"};
//let c3 = {nome:"Marinete", sobrenome: "Bonjoura", endereco: "rua da Tangerina", telefone: "01846672"};
//let c4 = {nome:"Lorena", sobrenome: "Ritalva", endereco: "rua da Galinha", telefone: "93810462"};
let c5 = {nome:"Fiona", sobrenome: "Sherebelde", endereco: "baixa da Égua", telefone: "16854287"};

inserir(c5);

async function consultar() {
    let resultado = await Cliente.findAll();
    console.log(resultado);
}
consultar();
