import pg from "pg";
const {Pool} = pg;

const pool = new Pool({
    host: 'areabot.ru',
    user: 'angryraven',
    password: 'gregori1',
    database: 'areabot.ru'
});

export default pool;
