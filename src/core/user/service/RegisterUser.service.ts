import UseCase from "../../shared/Usecase.shared";
import RepositoryUser from "./repository/RepositoryUser.repository";

type EntryType = {
    name: string;
    email: string;
    password: string;
}

export default class RegisterUser implements UseCase<EntryType, void> {

    constructor(private readonly repository: RepositoryUser){}

    async execute(data: EntryType): Promise<void> {
        const { name, email, password} = data;

        const emailExists = await this.repository.consultByEmail(email);

        if(emailExists){
            throw new Error("Esse email já existe").message;
        };

        await this.repository.create({ name, email, password });
    }

}