import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'Message from Serverless API: ';
  apiMessage = '';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // // Headers
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*',
    })
  }

  ngOnInit() { this.getMessage() }

  getMessage() {
    return this.httpClient.get('https://b7jn5q0oa8.execute-api.us-east-1.amazonaws.com/dev', this.httpOptions)
    .subscribe(
      response => {
        this.apiMessage = response.message || ''
      },
      erro => {
        this.apiMessage = erro.statusText
      }
    )
  }
}
