import Elysia from "elysia";
import RegisterUser from "../../core/user/service/RegisterUser.service";

export default class RegisterUserController {
    constructor(
        readonly server: Elysia,
        readonly usecase: RegisterUser
    ){
        server.post('/usuario', async ({ body }) => {
            const { name, email, password } = body as any;
            await usecase.execute({ name, email, password });

            return {
                status: 201,
                body: {
                    mensagem: 'Usuário criado com sucesso'
                }
            }
        })
    }
}