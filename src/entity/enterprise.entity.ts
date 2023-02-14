import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("TBL_MTR_ENTERPRISE")
export default class Enterprise extends BaseEntity{
    @PrimaryGeneratedColumn("uuid", {name: "idEnterprise"})
    id: string;

    @Column()
    name: string;

    @Column()
    documentType: string;

    @Column()
    documentNumber: string;

    @Column({nullable: true})
    verifier: string;

}