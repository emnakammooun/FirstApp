import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/Modeles/Article';
import { GLOBAL } from 'src/app/app-config';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab:Article[]=GLOBAL.DB.articles;
  constructor(private httpClient:HttpClient) { }
  ONSAVE(articleToSave:any): Observable<any>
  {
    // generer la requete http en mode post vers back end
    // a3melneha commentaire 5ater ma 3andenech back end
    //return this.httpClient.post('127.0.0.1:8080/api/Member',memberToSave)

    const article1={
      id: Math.ceil(Math.random()*1000),
      ...articleToSave,
      date:new Date().toISOString()
    }
    this.tab.push(article1)

    //bech na3mel observable a la main 5ater na7ina return mte3 back end
    return new Observable(observer => observer.next())
  }
  ONUPDATE(idc:string,articleToUpdate:any):Observable<any>
  {
    //return this.httpClient.post('127.0.0.1:8080/api/Member/$(id)',memberToUpdate)
    const index=this.tab.findIndex(item=>item.id ==idc)
    this.tab[index]={id:idc,
      ...articleToUpdate,
      createdDate:new Date().toISOString()}
    return new Observable(observer => observer.next())
  }

  ONDELETE(id:string): Observable<any>
  {
    //return this.httpClient.delete('127.0.0.1:8080/api/Member/$(id)');
    this.tab=this.tab.filter(item=>item.id !=id)
    return new Observable(observer => observer.next())
  }

  ONGETID(id:string):Observable<Article>
  {
    //return this.httpClient.get<Member>('127.0.0.1/api/Member/$(id)');
    
    let ele:Article =this.tab.filter(item =>item.id ==id)[0] ?? null  // ?? kif ta3mel hethoum zouz yetsamew sinon ma3neha ken l9ah yraj3o sinon yraja3 null
    return new Observable(observer =>observer.next(ele))
  }
  
}
