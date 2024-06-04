import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/Modeles/Article';
import { ArticleService } from 'src/Services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit{
   // injection de dépendence 
   constructor(private AS:ArticleService,private router:Router,private activatedRoute:ActivatedRoute) {}
   form!:FormGroup //bech njibo les données mte3 formulaire kemla fi west variable esemha form
   idcourant!:string
   ngOnInit(): void { // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
     //recuperer l'id de url
     this.idcourant=this.activatedRoute.snapshot.params['id'] ; //snapshot ta3mel capture 3ala url w params ta3mel recherche 3ala heki capture 
     if(!!this.idcourant) // !! hethoum ye9esdo bihom "troli" ma3neha ken idcourant mawjoud men asslo wala ma3neha différent undifined
     {
       this.AS.ONGETID(this.idcourant).subscribe((result)=>{
         this.initForm2(result);
       })
     }
     else
       this.initForm();
   }
   
   initForm2(a:Article): void
   {
     this.form=new FormGroup({
       type: new FormControl(a.type,[Validators.required]),
       titre:new FormControl(a.titre,[Validators.required])
     })
   }
   
   initForm(): void
   {
     this.form=new FormGroup({
       type: new FormControl(null,[Validators.required]),
       titre:new FormControl(null,[Validators.required])
     })
   }
   
   onsub():void {
     if(!!this.idcourant)
     {
       this.AS.ONUPDATE(this.idcourant,this.form.value).subscribe(()=>{
         this.router.navigate(['/articles'])
       })
     }
     else{
       console.log(this.form.value);
       const articleToSave=this.form.value;
       this.AS.ONSAVE(articleToSave).subscribe(()=>{
         this.router.navigate(['/articles'])
       })
     }
   }
}
