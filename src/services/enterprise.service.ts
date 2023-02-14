import Enterprise from "../entity/enterprise.entity";
import { Repository } from 'typeorm';

export default class EnterpriseService {
    constructor(private readonly repository:Repository<Enterprise>) {
    }

    public findAll = async (page: number, per_page: number) => {
        return await this.repository.createQueryBuilder("enterprise")
            .skip(((page - 1) * per_page)).take(per_page)
            .getMany();
    }
}