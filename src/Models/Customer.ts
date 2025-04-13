// models/Customer.ts
import { Table, Column, Model } from "sequelize-typescript";

@Table
export class Customer extends Model<Customer> {
    @Column
    name!: string;

    @Column
    surname!: string;

    @Column
    phone_number!: string;

    @Column
    country_code!: string;

    @Column
    email!: string;

    @Column
    password!: string;
}
