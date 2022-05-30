export interface Usuario {
    _id?:string,
    nombre: string,
    apellido: string,
    email: string,
    pass: string, 
    phoneNumber?: number,
    nombreUsuario: string,
    region?: string,
}
