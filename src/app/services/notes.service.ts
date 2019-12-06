import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';



@Injectable()
export class NotesService {

  constructor(private httpClient:HttpClient,private authservice:AuthenticationService){ 
  }
  getNotes(): Observable<Note[]>
  {
    return this.httpClient.get<Note[]>('http://localhost:3000/api/v1/notes',{
      headers:new HttpHeaders().set('Authorization',`${this.authservice.getBearerToken()}`)
    });
}
  addNote(note: Note): Observable<Note> 
  {
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',note,{
        headers:new HttpHeaders().set('Authorization',`${this.authservice.getBearerToken()}`)
    });
  }
}
