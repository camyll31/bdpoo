const {Pool} = require("pg");
async function criarConexao() {
    const pool = new Pool({
        connectionString:'postgres://sgnswvlxovqxwq:2f9d82bb5e4b0da77368bc34a897311794301bdcbe1259f2e52ca025854985b6@ec2-34-230-167-186.compute-1.amazonaws.com:5432/da3c25bitgu0hc',
        ssl: {
            rejectUnauthorized: false
        }
});

let con = await pool.connect();
//await con.query("insert into Pedido (pizza) values ($1)",["chocolate"]);
//await con.query("insert into Pedido (refrigerante) values ($1), ($2), ($3)",["fanta", "coquinha", "doli"]);
//await con.query("delete from Pedido where refrigerante like 'guarana'");
//await con.query("delete from Pedido where refrigerante like 'doli'");
//await con.query("delete from Pedido where refrigerante like 'fanta'");
//await con.query("update Pedido set refrigerante = $1 where pizza = $2",["pepsi", "catupiry"]);
//await con.query("insert into Pedido (pizza) values ($1)",["mortadela"]);
//await con.query("insert into Pedido (refrigerante) values ($1), ($2), ($3)",["coca", "fanta", "guarana"]);
//await con.query("update Pedido set pizza = $1 where refrigerante = $2",["frango", "fanta"]);
//await con.query("insert into Pedido (pizza, refrigerante) values ($1, $2)",["chocolate", "coca"]);
await con.query("insert into Pedido (pizza, refrigerante) values ($1, $2)",["abacaxi", "dolly"]);
let res = await con.query("select * from Pedido");
let tuplas = res.rows;
for(let tupla of tuplas){
    console.log(tupla);
}
con.release();
} criarConexao();