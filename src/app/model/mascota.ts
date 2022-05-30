import { TipoAnimal } from "./tipoAnimal";
import { Raza } from "./raza";

export interface Mascota {
    nombre: string,
    tipoAnimal:TipoAnimal,
    raza: Raza,
    _id?: string
}