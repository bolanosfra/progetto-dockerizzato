import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data: any;
  constructor(private http: HttpClient)
  {
    this.http.get("https://5000-bolanosfra-progettodock-0h5x2udkls7.ws-eu114.gitpod.io/simple_json")
    .subscribe(
      (data) => this.data = data
    )
  }
}