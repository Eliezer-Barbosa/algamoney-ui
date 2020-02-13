import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {
    const headers = new HttpHeaders();
    headers.set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(this.categoriasUrl, { headers })
      .toPromise()
      // tslint:disable-next-line: no-string-literal
      .then(response => response['content']);
  }

}
