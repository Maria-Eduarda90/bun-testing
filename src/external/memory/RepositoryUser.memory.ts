import User from "../../core/user/model/User.model";
import RepositoryUser from "../../core/user/service/repository/RepositoryUser.repository";

export default class RepositoryUserMemory implements RepositoryUser {
    constructor(private readonly user: User[]){}

    async consultByEmail(email: string): Promise<User | null> {
        return this.user.find(user => user.email === email) ?? null;
    }

    async create(user: User): Promise<User> {
        const newUser = {...user, id: Math.random()};
        this.user.push(newUser);
        return newUser;
    }

}