import { Component } from '@angular/core';

import { GLOBAL } from '../app-config';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
nom = 'ali'
//injection de dépendences
constructor(private MS:MemberService,private dialog:MatDialog){}
//datasource:any[]=this.MS.tab
datasource = new MatTableDataSource(this.MS.tab)
displayedColumns: string[] = ['id','cin', 'name', 'cv', 'type','createdDate','action'];

delete(id:string):void
{
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '200px',
    width: '300px',
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result)
    {
      //appeler la fonction de service ONDELETE
      this.MS.ONDELETE(id).subscribe(()=>{

        this.datasource.data=this.MS.tab
      })
    }
  });
  
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.datasource.filter = filterValue.trim().toLowerCase();
}
}

