import { Injectable } from '@angular/core';
import { Word } from '../interfaces/word.model'
import { Observable, of, throwError } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WordService {

  private apiURL = 'https://localhost:44364/api/';

   constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }

    private cache$?: Observable<Word>;

  getWordOfTheDay(): Observable<Word> {
    if(!this.cache$){
    let reqHeaders = new HttpHeaders().set('Accept', 'application/json');
    this.cache$ = this.http.get<Word>(this.apiURL + "wordoftheday",{headers: reqHeaders}).pipe(shareReplay(1));

  }
  return this.cache$;
}

  getWords(): Observable<Word[]>{
    let reqHeaders = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Word[]>(this.apiURL + "newwords",{headers: reqHeaders}).pipe(catchError(this.handleError));
  }

}


