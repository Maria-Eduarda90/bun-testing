import User from "../../model/User.model";

export default interface RepositoryUser {
    consultByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<User>
}