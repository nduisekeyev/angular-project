export interface IUser<S, C, Z> {
  id: number;
  name: string;
  email: string;
  address: {
    street: S;
    city: C;
    zipcode: Z;
  };
}

export type IUsers = IUser<string, string, string>[];
