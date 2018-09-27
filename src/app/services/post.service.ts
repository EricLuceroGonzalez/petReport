import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
@Injectable()

export class PostService {
  constructor(
    private httpClient: HttpClient,
    private http: Http  ) {}

  getPosts() {
    return this.http.get('http://localhost:3000/api/posts')
    .pipe(
      map( res => res.json()
    )
  );
  }
}
