import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-form2',
  templateUrl: './article-form2.component.html',
  styleUrls: ['./article-form2.component.css']
})
export class ArticleForm2Component implements OnInit{
  constructor(private dialogRef : MatDialogRef<ArticleForm2Component>){}
  
  form!:FormGroup
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void
  {
    this.form=new FormGroup({
      id:new FormControl(null,[Validators.required]),
      type: new FormControl(null,[Validators.required]),
      titre:new FormControl(null,[Validators.required]),
      date:new FormControl(null,[Validators.required])
    })
  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }
}
