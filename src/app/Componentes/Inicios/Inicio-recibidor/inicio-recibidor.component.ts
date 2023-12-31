import { Router } from '@angular/router';
import { UserService } from './../../../Servicios/Service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-recibidor',
  templateUrl: './inicio-recibidor.component.html',
  styleUrls: ['./inicio-recibidor.component.css']
})
export class InicioRecibidorComponent {

  constructor(private userService: UserService,  private router: Router) {}

  ngOnInit(): void {
    this.userService.comprobarUser().subscribe(
      (response) => {
        console.log('response', response);
       
      },
      (error) => {
        console.log('error', error);
            this.router.navigate(['../../403']).then(() => {
              window.location.href = '../../403';
            });
      }
    );
  }
}
