import { CustomerDef } from '../proto/customer/customer_pb';
import { getCustomer } from '../services/CustomerService';

export const getCustomerBD = async (count: number): Promise<CustomerDef> => {
    const customer = new CustomerDef();
    const idCustomer = Math.floor(Math.random() * (count - 1)) + 1;

    try {
        const customers = await getCustomer(idCustomer);
        const custDef = customers[0];
        customer.setName(custDef.name);
        customer.setAge(custDef.age);
        customer.setStatus(custDef.status);
        return Promise.resolve(customer);
        
    } catch (error) {
        return Promise.reject(error);
    }
}
