import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    SegurancaRoutingModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        // no domínio "localhost:8080",
        // todas as requisições serão interceptadas e o token será adicionado.
        whitelistedDomains: ['localhost:8080'],

        // "http://localhost:8080/oauth/token" não ocorrerá nenhuma interceptação,
        // pois neste endpoint, não utilizamos o token armazendo,
        // e sim a autenticação básica
        blacklistedRoutes: ['http://localhost:8080/oauth/token']
      }
    })
  ],
  providers: [JwtHelperService]
})
export class SegurancaModule { }