import {Entity} from "./Entity";

export interface EntityRepository {
    findByName(name: string): Entity;
}