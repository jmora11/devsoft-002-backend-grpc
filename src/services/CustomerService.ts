
import { sequelizeMySQL } from '../database/bd';

export async function createCustomer(
    nameCustomer:string,
    age:number,
    status:string,
    ): Promise<any>{
    try {
        const responseQuery = await sequelizeMySQL.query(
            `INSERT INTO customersstrem (name, age, status) VALUES (:nameCustomer, :age, :status)`,
            {
                type: sequelizeMySQL.QueryTypes.INSERT,
                replacements: {
                    nameCustomer,
                    age,
                    status
                }
            }
        );
        return Promise.resolve('ok');
    } catch (error) {
        return Promise.reject('error in bd');
    }
}

export async function countCustomers(): Promise<any>{
    try {
        const responseQuery = await sequelizeMySQL.query(
            `SELECT count(*) FROM customersstrem`,
            {
                type: sequelizeMySQL.QueryTypes.SELECT
            }
        );
        return Promise.resolve(responseQuery);
    } catch (error) {
        return Promise.reject('error in bd');
    }
}

export async function getCustomer(id: number): Promise<any>{
    try {
        const responseQuery = await sequelizeMySQL.query(
            `SELECT * FROM customersstrem WHERE id_customer=:id`,
            {
                type: sequelizeMySQL.QueryTypes.SELECT,
                replacements: {
                    id
                }
            }
        );
        return Promise.resolve(responseQuery);
    } catch (error) {
        return Promise.reject('error in bd');
    }
}

export async function getCustomerId(name: string): Promise<any>{
    try {
        const responseQuery = await sequelizeMySQL.query(
            `SELECT id_customer FROM customersstrem where name=:name limit 1;`,
            {
                type: sequelizeMySQL.QueryTypes.SELECT,
                replacements: {
                    name
                }
            }
        );
        return Promise.resolve(responseQuery);
    } catch (error) {
        return Promise.reject('error in bd');
    }
}

export async function getCustomerComments(id: number): Promise<any>{
    try {
        const responseQuery = await sequelizeMySQL.query(
            `SELECT comment FROM customersstrem INNER JOIN comments WHERE customersstrem.id_customer=:id AND comments.id_user=:id`,
            {
                type: sequelizeMySQL.QueryTypes.SELECT,
                replacements: {
                    id
                }
            }
        );
        return Promise.resolve(responseQuery);
    } catch (error) {
        return Promise.reject('error in bd');
    }
}