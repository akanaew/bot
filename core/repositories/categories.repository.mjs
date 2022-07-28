import postgres from "../db/postgres.mjs";

class CategoriesRepository {
    constructor() {
        this.db = postgres;
    }

    async getCategories() {
        const result = await this.db.query('SELECT * FROM categories');
        return result.rows;
    }
}

export default CategoriesRepository;
