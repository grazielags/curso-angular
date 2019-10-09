import { Usuario } from './../../Models/usuario';
import { UsuarioService } from './../../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {
  usuarioForm: FormGroup;
  nome: string = '';
  descricao: string = '';
  quantidade: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'descricao': [null, Validators.required],
      'quantidade': [null, Validators.required],
    });
  }

  async onFormSubmit(form: Usuario) {
    await this.usuarioService.createUsuario(form)
      .subscribe(successCode => {
        this.router.navigate(['/usuarios']);
      }
      );
  }

}
