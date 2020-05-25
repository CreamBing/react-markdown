import { type } from "os";

export const UPDATE = 'UPDATE'
export type UPDATE = typeof UPDATE;

export interface UPDATEACTION{
    type: UPDATE;
    path: string
}

export type ACTION = UPDATEACTION | any

export function update(path:string): UPDATEACTION{
    return {type: UPDATE,path}
}

