import { UsuarioService } from './../../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
  usuarioForm: FormGroup;
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder,private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuario(this.route.snapshot.params['id']);
    this.usuarioForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'nome': [null, Validators.required],
      'endereco': [null, Validators.required],
      'perfil': [null, Validators.required],
      'login': [null, Validators.required],
      'senha': [null, Validators.required]
    });
  }

  async getUsuario(id) {
    this.usuarioService.getUsuarioById(id).subscribe(usu => {
      this.usuarioForm.controls['id'].setValue(usu.id);
      this.usuarioForm.controls['nome'].setValue(usu.nome);
      this.usuarioForm.controls['endereco'].setValue(usu.endereco);
      this.usuarioForm.controls['perfil'].setValue(usu.perfil);
      this.usuarioForm.controls['login'].setValue(usu.login);
      this.usuarioForm.controls['senha'].setValue(usu.senha);
      return usu;
    });
    this.isLoadingResults = false;
  }

  async onFormSubmit(form:NgForm) {
    await this.usuarioService.updateUsuario(form)
      .subscribe(successCode => {
        this.router.navigate(['/usuarios']);
      }
      );
  }

  usuarioDetails() {
    this.router.navigate(['/usuario-details', this.route.snapshot.params['id']]);
  }

}
