import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Relevancia } from 'src/app/relevancia';
import { Responsavel } from 'src/app/responsavel';
import { Solicitante } from 'src/app/solicitante';
import { Urgencia } from 'src/app/urgencia';
import { Lista } from '../../lista';
import { SolicitacaoService } from 'src/app/solicitacao.service';

@Component({
  selector: 'app-formulario-solicitacao-atividade',
  templateUrl: './formulario-solicitacao-atividade.component.html',
  styleUrls: ['./formulario-solicitacao-atividade.component.css']
})
export class FormularioSolicitacaoAtividadeComponent implements OnInit {

  formulario: FormGroup;
  lista: Lista;
  lista1: Lista[];
  lista2: Lista[];
  lista3: Lista[];
  lista4: Lista[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private solicitacaoService: SolicitacaoService) { }

  ngOnInit(  ) { 

    this.lista1 = Solicitante;
    this.lista2 = Responsavel;
    this.lista3 = Urgencia;
    this.lista4 = Relevancia;

    this.formulario = this.formBuilder.group({
      atividade: [null, Validators.required, Validators.minLength[20], Validators.maxLength[256]],
      issue: [null, Validators.maxLength[20]],
      solicitante: [null, Validators.required],
      responsavel: [null, Validators.required],
      urgencia: [null, Validators.required],
      relevancia: [null, Validators.required]
    });
  }
  
  buscar(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.solicitacaoService.buscarPorId(id)
      .subscribe(lista =>  this.lista = lista);
  }

  voltar(): void {
    this.location.back();
  }

  salvar(): void {
    this.solicitacaoService.alterar(this.lista)
      .subscribe(() => this.voltar());
  }
}
