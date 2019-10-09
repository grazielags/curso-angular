import { UsuarioService } from './../../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from './../../Models/usuario';
declare var $ : any;

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  usuario: Usuario;
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }

  async ngOnInit() {
    await this.getUsuarioDetails(this.route.snapshot.params['id']);
  }

  async getUsuarioDetails(id) {
    this.usuarioService.getUsuarioById(id).subscribe(res => this.usuario = res);
    this.isLoadingResults = false;
  }

  async deleteUsuario(id) {
    await this.usuarioService.removeUsuario(id)
      .subscribe(successCode => {
        $('#myModal').modal('hide');
        this.router.navigate(['/usuarios']);
      }
      );
  }

}
