import { Injectable, ModuleWithProviders } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http: HttpClient) {}

  url: string = "https://localhost:3001/";
}



function InsertCliente(user: any, User: any) {
  throw new Error('Function not implemented.');
}

