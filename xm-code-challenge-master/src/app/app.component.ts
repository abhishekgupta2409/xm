import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from './service/http.service';
import { User } from './models/user.model';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public users: User[];
  public subscriptionForUsers;
  public nameFilter = '';
  constructor(private _httpService: HttpService) {

  }
  ngOnInit() {
    this.subscriptionForUsers = this._httpService.getDataFromServer().subscribe(data => {
      this.users = data;
    });
  }

  nameClicked() {
    this.nameFilter === '' ? this.nameFilter = 'asc' :
      this.nameFilter === 'asc' ? this.nameFilter = 'desc' : this.nameFilter = 'asc';
  }

  ngOnDestroy() {
    this.subscriptionForUsers.unsubscribe();
  }
}
