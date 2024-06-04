import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EvtService } from 'src/Services/evt.service';
import { EventCreateComponent } from '../event-create/event-create.component';
import { EventVisibilityComponent } from '../event-visibility/event-visibility.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  constructor(private EVS:EvtService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.getEvent();
  }

  datasource!: Event[]
  displayedColumns: string[] = ['id','titre', 'lieu', 'dateDebut','dateFin' , 'action'];


  getEvent():void
  {
    this.EVS.Get().subscribe((r)=>{
      this.datasource=r;
    })
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    dialogConfig.height = '500px';
    dialogConfig.width = '300px';
    let dialogRef = this.dialog.open(EventCreateComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      this.EVS.Post(data).subscribe(()=>{
        this.getEvent();
      });
    });
  }

  visibilitie(id:string)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    dialogConfig.height = '300px';
    dialogConfig.width = '300px';
    this.EVS.OnGetID(id).subscribe((r)=>{
      dialogConfig.data= r;
      this.dialog.open(EventVisibilityComponent,dialogConfig);
    });
  }
}
