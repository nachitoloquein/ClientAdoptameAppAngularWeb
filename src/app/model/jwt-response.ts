export interface JwtResponse {
    dataUsuario:{
        _id: string,
        nombreUsuario: string,
        email: string,
        accesToken: string,
        expiresIn: string
    }
}
