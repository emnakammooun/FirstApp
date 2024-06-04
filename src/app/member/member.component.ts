import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberModalComponent } from '../member-modal/member-modal.component';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  nom = 'ali';
  datasource!: Member[];
  displayedColumns: string[] = ['id', 'cin', 'name', 'cv', 'type', 'createdDate', 'action'];

  constructor(private MS: MemberService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getmember();
  }

  delete(id: string): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.MS.ONDELETE(id).subscribe(() => {
          console.log('success');
        });
      }
    });
  }

  getmember(): void {
    this.MS.GetAll().subscribe((r: Member[]) => {
      this.datasource = r;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.datasource.filter = filterValue.trim().toLowerCase();
  }

  toggleVisibility(element: any) {
    element.showPublications = !element.showPublications;
  }

  openModal(memberId: string) {
    const dialogRef = this.dialog.open(MemberModalComponent, {
      width: '500px',
      data: { memberId: memberId }
    });
  }
}
