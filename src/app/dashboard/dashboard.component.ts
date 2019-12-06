import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  errMessage:string;
  note: Note;
  notes: Note[];
   
  constructor(private noteservice:NotesService){
    this.note = new Note();
    this.notes = [];
  }
  ngOnInit(){
  this.noteservice.getNotes().subscribe(notedata=>{
  this.notes = notedata;
  },
  (err)=>{
this.errMessage = err.message;  
  });
  }
  addNote()
  { 
    if((this.note.title) && (this.note.text))     
    {
  this.notes.push(this.note);     
  this.noteservice.addNote(this.note).subscribe(data=>{    
    },
  err=>{
    this.notes.pop();
    this.errMessage = err.message;
  console.error(this.errMessage);  
  });
   this.note=new Note();
}
  else
  {    
  this.errMessage = 'Title and Text both are required fields';
  }
}

}