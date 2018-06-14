import { Timestamp } from "rxjs";
import { Time } from "@angular/common";


export interface Currency{
    id?:number;
    success?: boolean;
    timestamp?: number;
    base?: string;
    date?: string;
    rates?: object;
}


