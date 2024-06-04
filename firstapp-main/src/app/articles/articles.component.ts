import { Component, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ArticleService } from 'src/Services/article.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ArticleFormComponent } from '../article-form/article-form.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  //injection de dépendences
  constructor(private AS:ArticleService,private dialog:MatDialog){}
  //datasource:any[]=this.MS.tab
  datasource = new MatTableDataSource(this.AS.tab)
  displayedColumns: string[] = ['id','type', 'titre', 'date','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
        this.AS.ONDELETE(id).subscribe(()=>{
  
          this.datasource.data=this.AS.tab
        })
      }
    });
    
  }
  
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    this.dialog.open(ArticleFormComponent, dialogConfig);
    const dialogRef = this.dialog.open(ArticleFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );  
  }
}
