import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-lancamento',
  templateUrl: './relatorio-lancamento.component.html',
  styleUrls: ['./relatorio-lancamento.component.css']
})
export class RelatorioLancamentoComponent implements OnInit {

  periodoInicio: Date;
  periodoFim: Date;

  constructor() { }

  ngOnInit() {
  }

  gerar() {
    console.log('Inicio: ' + this.periodoInicio);
    console.log(`Fim: ${this.periodoFim}`);
  }

}
