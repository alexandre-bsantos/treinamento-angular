import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lista } from '../../lista';

@Component({
  selector: 'app-formulario-solicitacao-atividade',
  templateUrl: './formulario-solicitacao-atividade.component.html',
  styleUrls: ['./formulario-solicitacao-atividade.component.css']
})
export class FormularioSolicitacaoAtividadeComponent implements OnInit {

  formulario: FormGroup;
  lista: Lista[];
  itemSelecionado: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      atividade: [null, Validators.required, Validators.minLength[20], Validators.maxLength[256]],
      issue: [null, Validators.maxLength[20]],
      solicitante: [null, Validators.required],
      responsavel: [null, Validators.required],
      urgencia: [null, Validators.required],
      relevancia: [null, Validators.required]
    })

    this.lista = [ {id:1, nome:'Alexandre'}, {id:2, nome:'Teste'}];
    
  }

}
