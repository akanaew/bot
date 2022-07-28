import ClientsRepository from "../repositories/clients.repository.mjs";

class ClientsService {
    constructor() {
        this.repository = new ClientsRepository();
    }

    async checkClient(id) {
        const rows = await this.repository.checkClient(id);
        return rows.length !== 0;
    }
}

export default ClientsService;
