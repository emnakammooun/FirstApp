import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  // injection de dépendence 
  constructor(private MS:MemberService,private router:Router,private activatedRoute:ActivatedRoute) {}
form!:FormGroup //bech njibo les données mte3 formulaire kemla fi west variable esemha form
idcourant!:string
ngOnInit(): void { // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
  //recuperer l'id de url
  this.idcourant=this.activatedRoute.snapshot.params['id'] ; //snapshot ta3mel capture 3ala url w params ta3mel recherche 3ala heki capture 
  if(!!this.idcourant) // !! hethoum ye9esdo bihom "troli" ma3neha ken idcourant mawjoud men asslo wala ma3neha différent undifined
  {
    this.MS.ONGETID(this.idcourant).subscribe((result)=>{
      this.initForm2(result);
    })
  }
  else
    this.initForm();
}

initForm2(m:Member): void
{
  this.form=new FormGroup({
    cin: new FormControl(m.cin,[Validators.required]),
    name:new FormControl(m.name,[Validators.required]),
    cv: new FormControl(m.cv,[Validators.required]),
    type:new FormControl(m.type,[Validators.required])
  })
}

initForm(): void
{
  this.form=new FormGroup({
    cin: new FormControl(null,[Validators.required]),
    name:new FormControl(null,[Validators.required]),
    cv: new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required])
  })
}

onsub():void {
  if(!!this.idcourant)
  {
    this.MS.ONUPDATE(this.idcourant,this.form.value).subscribe(()=>{
      this.router.navigate(['/members'])
    })
  }
  else{
    console.log(this.form.value);
    // appeler la fonction ONSAVE du service MemberService
    const memberToSave=this.form.value;
    this.MS.ONSAVE(memberToSave).subscribe(()=>{
      this.router.navigate(['/members'])
    })
  }
}
}
