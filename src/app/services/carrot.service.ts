import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, Response } from '@angular/http';;

@Injectable()
export class CarrotService {

  constructor(private http:Http) {
  }

  getCarrots():Observable<Array<any>> {
    return this.http.get('http://cdn.iamsap.com/courses/2017-angular2-material/carrots/carrots.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error:Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg:string;
    if ( error instanceof Response ) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

