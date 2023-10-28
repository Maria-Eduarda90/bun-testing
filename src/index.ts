import { Elysia } from "elysia";
import RepositoryUserMemory from "./external/memory/RepositoryUser.memory";
import RegisterUser from "./core/user/service/RegisterUser.service";
import RegisterUserController from "./adapters/controller/RegisterUser.controller";

const app = new Elysia();

const repositoryUser = new RepositoryUserMemory();
const regiterUser = new RegisterUser(repositoryUser);
new RegisterUserController(app, regiterUser);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
