import CategoriesRepository from "../repositories/categories.repository.mjs";

class CategoriesService {
    constructor() {
        this.repository = new CategoriesRepository();
    }

    async getCategories() {
        return await this.repository.getCategories();
    }
}

export default CategoriesService;
