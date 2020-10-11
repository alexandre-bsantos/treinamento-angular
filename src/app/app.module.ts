import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitacaoAtividadesComponent } from './solicitacao-atividades/solicitacao-atividades.component';
import { FormularioSolicitacaoAtividadeComponent } from './solicitacao-atividades/formulario-solicitacao-atividade/formulario-solicitacao-atividade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SolicitacaoAtividadesComponent,
    FormularioSolicitacaoAtividadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
