import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ArticleService } from 'src/Services/article.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ArticleForm2Component } from '../article-form2/article-form2.component';
import { Article } from 'src/Modeles/Article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
  //injection de dépendences
  constructor(private AS:ArticleService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.getArticles();
  }

  datasource = new MatTableDataSource<Article>()
  displayedColumns: string[] = ['id','type', 'titre', 'date','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getArticles()
  {
    this.AS.GetAll().subscribe((r)=>{
      this.datasource.data=r;
    })
  }

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
        this.AS.OnDel(id).subscribe(()=>{
  
          this.getArticles();
        })
      }
    });
    
  }
  
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    dialogConfig.height = '500px';
    dialogConfig.width = '500px';
    let dialogRef = this.dialog.open(ArticleForm2Component,dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      this.AS.OnPost(data).subscribe(()=>{
        this.getArticles();
      });
    });
  }

  update(id:string)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    dialogConfig.height = '500px';
    dialogConfig.width = '500px';
    this.AS.OnGetID(id).subscribe((r)=>{
      dialogConfig.data= r;
    });
    
    let dialogRef = this.dialog.open(ArticleForm2Component,dialogConfig.data);
    dialogRef.afterClosed().subscribe(data => {
      this.AS.OnPut(id,data).subscribe(()=>{
        this.getArticles();
      });
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
}
