import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/Usuario/usuario';
import { LoginService } from 'src/app/Servicios/Login/login.service';
import { TuplaLoginService } from 'src/app/Servicios/TuplaLogin/tupla-login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements AfterViewInit {
    public usuario: Usuario = new Usuario();
    @ViewChild("inputNombre")
    inputNombre!: ElementRef;

    constructor(private loginService: LoginService, private router: Router,
        private tuplaServicio: TuplaLoginService) { }

    ngAfterViewInit(): void {
        const elemento = this.inputNombre.nativeElement;

        elemento.focus();
    }

    public Submit(): void {
        let paso = 0;
        this.loginService.login(this.usuario).subscribe({
            next: (dato: number) => { paso = dato; },
            error: (error) => { paso = 0; },
            complete: () => { }
        });
        if (paso > 0) {
            this.tuplaServicio.SetTuplaLogin(paso, this.usuario.nombre);
            this.router.navigate(["/cocina/dashboard"]);
        }
        else {
            alert("Error en el nombre o la contraseña ...")
        }
    }

    public Volver(): void {
        this.router.navigate(["/front/sobreNosotros"]);
    }
}
