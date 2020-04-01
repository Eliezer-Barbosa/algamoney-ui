import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatorioLancamentoComponent } from './relatorio-lancamentos/relatorio-lancamento.component';

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    RelatoriosRoutingModule
  ],
  declarations: [RelatorioLancamentoComponent]
})
export class RelatoriosModule { }
