import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class GettingJSONService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
}

public getJSON(): Observable<any> {
    return this.http.get('../../assets/jsonFolder/panamaData.json');
}
}



// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { resolve } from 'dns';
// import { reject } from 'q';

// export interface Gender {
//   value: string;
//   viewValue: string;
// }

// @Injectable()
// export class GetJSONService {
//   constructor(public http: Http) {}

//   getGender(): Promise<any> {
//     return new Promise(
//       (resolve, reject) => {
//         this.http.get('../../assets/jsonFolder/gender.json').subscribe(
//           res => {
//             if (!res.ok) {
//               reject('wtf');
//             }
//             var jsonRes = res.json();
//             resolve(jsonRes);
//           }
//         );
//         }).catch(
//           (reason) => {
//             console.log('error')        );
//     }
//   }
