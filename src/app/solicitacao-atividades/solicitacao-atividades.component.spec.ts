import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoAtividadesComponent } from './solicitacao-atividades.component';

describe('SolicitacaoAtividadesComponent', () => {
  let component: SolicitacaoAtividadesComponent;
  let fixture: ComponentFixture<SolicitacaoAtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoAtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
