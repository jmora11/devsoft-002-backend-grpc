import { CustomerDef, Comment } from '../proto/customer/customer_pb';
import { getCustomer, getCustomerComments } from '../services/CustomerService';

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

export const getCommentsBD = async (id: number): Promise<Comment[]> => {
    try {
        let comments: any[] = [];

        const commentsBD: any[] = await getCustomerComments(id) as Comment.AsObject[];
        commentsBD.forEach(comment => {
            const commentDef = new Comment();
            commentDef.setComment(comment.comment);
            comments.push(commentDef);
        });
        return Promise.resolve(comments);
    } catch (re) {
        return Promise.reject(re);
    }
}

export const getLiveChat = async (): Promise<any> => {
    getCommentsBD(34);
}