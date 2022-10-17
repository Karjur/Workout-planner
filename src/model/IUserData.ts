export interface IUserData {
    name: string;
    surname: string;
    DoB: string;
    weight: number;
    height: number;
    gender: Gender;
}

export enum Gender {
    Female = "0",
    Male = "1",
}