import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UsuarioService } from './../../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../Models/usuario';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'endereco', 'perfil', 'login'];
  isLoadingResults = true;
  data: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();
  statusCode: number;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getAllUsuarios();
  }
  getAllUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(
        data => {
          if (data) {
            this.data = new MatTableDataSource<Usuario>(data);
          }
          this.isLoadingResults = false;
        },
        errorCode => this.statusCode = errorCode);
  }
}
