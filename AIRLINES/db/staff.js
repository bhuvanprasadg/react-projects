const pool = require("./pool");

async function checkCredentials(email, password){
    const client = await pool.connect();
    try{
        const text = "select email, password, role from staff where email = $1 and password = $2";
        const values = [email, password];
        const result = await client.query(text, values);
        return result;
    }catch(err){
        console.log(err);
    }finally{
        client.release();
    }
}

module.exports = {checkCredentials};