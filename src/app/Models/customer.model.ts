export class Customer {
        // Use string for Id (GUID from backend)
        id?: string;
        firstName?: string;
        lastName?: string;
        address?: string;
        email?: string;
        password?: string;
        // required field
        phone: string = '';
        userName?: string;
        token?: string;
        role?: string;
        searchText?: string;
        embeddingJson?: string;

        constructor(init?: Partial<Customer>) {
                Object.assign(this, init);
        }
}

