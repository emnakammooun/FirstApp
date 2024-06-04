import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Article } from 'src/Modeles/Article';
import { Member } from 'src/Modeles/Member';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.css']
})
export class MemberModalComponent {
  @Input() id!: string;
  publications: Article[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPublications();
  }

  loadPublications() {
    this.http.get<Member>(`/api/member/${this.id}`).subscribe(
      (member: Member) => {
        this.publications = member.tab_pub;
      },
      (error) => {
        console.error('Error loading publications:', error);
        // Handle error: Display a message to the user or log it for debugging
      }
    );
  }
  
  
}
