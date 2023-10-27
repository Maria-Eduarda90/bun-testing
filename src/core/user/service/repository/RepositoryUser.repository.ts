import User from "../../model/Usuario.model";

export default interface RepositoryUser {
    consultByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<User>
}