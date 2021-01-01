import { Injectable } from '@angular/core';
import { Word } from '../interfaces/word.model'
import { Observable, of, throwError } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { WORDS } from '../words/mock-words';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private apiURL = 'https://localhost:5001/api/WordOfTheDay';


  /*call Get Word of the day endpoint
  getWords(): Observable<Word[]>{
    this.messageService.add('Retrieved Words from API');
    return this.http.get<Word[]>(this.apiURL);
  }
*/
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


  getWords() {
    let reqHeaders = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get(this.apiURL,{headers: reqHeaders}).pipe(catchError(this.handleError));
  }
}


