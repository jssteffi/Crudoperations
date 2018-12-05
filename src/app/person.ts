import { constructor } from "events";

export interface Person {
    title: string;
    FirstName: string;
    LastName: string;
    EmailId:string;
    PhoneNo:Int32Array;
}

export class Person{
    public title: string;
    public FirstName: string;
    public LastName: string;
    public EmailId: string; 
    public PhoneNo:Int32Array;
}

