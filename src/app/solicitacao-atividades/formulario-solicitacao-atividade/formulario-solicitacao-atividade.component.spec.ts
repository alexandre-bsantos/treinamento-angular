import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSolicitacaoAtividadeComponent } from './formulario-solicitacao-atividade.component';

describe('FormularioSolicitacaoAtividadeComponent', () => {
  let component: FormularioSolicitacaoAtividadeComponent;
  let fixture: ComponentFixture<FormularioSolicitacaoAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSolicitacaoAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSolicitacaoAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
