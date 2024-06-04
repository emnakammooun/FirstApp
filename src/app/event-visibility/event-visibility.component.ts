import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-visibility',
  templateUrl: './event-visibility.component.html',
  styleUrls: ['./event-visibility.component.css']
})
export class EventVisibilityComponent {
  id!:string;
  titre!:string;
  lieu!:string;
  dateDebut!:string;
  dateFin!:string;
  constructor(public dialogRef: MatDialogRef<EventVisibilityComponent>,@Inject(MAT_DIALOG_DATA) data:any) { 
    this.id=data.id;
    this.titre = data.titre;
    this.lieu = data.lieu;
    this.dateDebut = data.dateDebut;
    this.dateFin = data.dateFin;
  }


}
