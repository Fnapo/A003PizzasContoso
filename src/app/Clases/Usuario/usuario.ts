export class Usuario {
	public nombre: string;
	public contrasegna: string;

    constructor() { 
		this.nombre="";
		this.contrasegna="";
	}

    public EsIgual(usuario: Usuario): boolean {
        return (this.nombre == usuario.nombre && this.contrasegna == usuario.contrasegna);
    }
}
