import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { componentFactoryName } from '@angular/compiler';
import { filter, map } from 'rxjs/operators';


@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getDataFromServer() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((items: any) => {
          return items.filter(item => {
            return !item.phone.includes('x');
          });
        }));
  }
}
