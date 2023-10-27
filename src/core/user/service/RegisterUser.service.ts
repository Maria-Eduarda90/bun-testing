import UseCase from "../../shared/Usecase.shared";

type EntryType = {
    name: string;
    email: string;
    password: string;
}

export default class RegisterUser implements UseCase<EntryType, void> {
    execute(data: EntryType): Promise<void> {
        throw new Error("Method not implemented.");
    }

}