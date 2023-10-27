export default interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  createdIn?: Date;
  updated?: Date;
}