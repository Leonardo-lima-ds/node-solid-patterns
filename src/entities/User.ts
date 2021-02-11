import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    // Recebemos as variáveis acima omitindo os id
    constructor(props: Omit<User, 'id'>, id?: string) { // Passamos um id como opcional caso estejamos trabalhando0 com um usuário existente
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }

}