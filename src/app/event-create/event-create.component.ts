import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {


  constructor(private dialogRef : MatDialogRef<EventCreateComponent>){}
  
  form!:FormGroup
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void
  {
    this.form=new FormGroup({
      id:new FormControl(null,[Validators.required]),
      titre: new FormControl(null,[Validators.required]),
      lieu:new FormControl(null,[Validators.required]),
      dateDebut:new FormControl<Date | null>(null),
      dateFin:new FormControl<Date | null>(null),
      
    })
  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }
}
