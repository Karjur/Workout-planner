export interface IUserData {
    name: string;
    surname: string;
    age: number;
    weight: number;
    height: number;
    gender: Gender;
}

export enum Gender {
    Female = "0",
    Male = "1",
}