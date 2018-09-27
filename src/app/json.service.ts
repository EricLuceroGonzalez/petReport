import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GettingJSONService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        // console.log(data);
        // console.log('In here! - json.service.ts [11]');
    });
}

public getJSON(): Observable<any> {
    return this.http.get('../assets/jsonFolder/jsonTest.json');
}
}
