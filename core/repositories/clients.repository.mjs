import postgres from "../db/postgres.mjs";

class ClientsRepository {
    constructor() {
        this.db = postgres;
    }

    async checkClient(id) {
        const query = await this.db.query(`SELECT * FROM clients WHERE telegram_id = ${id}`);
        return query.rows
    }
}

export default ClientsRepository;
