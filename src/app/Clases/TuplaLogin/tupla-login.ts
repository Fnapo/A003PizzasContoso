export class TuplaLogin {
    private _token: number = 0;
    private _nombreUsuario: string = "";

    constructor() { }

    public set token(token: number) {
        this._token = token;
    }

    public get token(): number {
        return this._token;
    }

    public set nombreUsuario(nombre: string) {
        this._nombreUsuario = nombre;
    }

    public get nombreUsuario(): string {
        return this._nombreUsuario;
    }
}
