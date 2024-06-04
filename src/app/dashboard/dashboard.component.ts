import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/Services/article.service';
import { EvtService } from 'src/Services/evt.service';
import { MemberService } from 'src/Services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Member } from 'src/Modeles/Member';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nb_Members!: number;
  data_member: string[] = [];
  data_student: string[] = [];
  data_m: number[] = [];
  nb_Articles!: number;
  nb_Events!: number;
  nb_teachers!: number;
  nb_students!: number;

  constructor(private MS: MemberService, private AS: ArticleService, private ES: EvtService) { }

  chartData: ChartDataset[] = [
    {
      label: '$ in millions', 
      data: this.data_m
    }
  ];

  chartLabels: string[] = [];
  chartOptions: ChartOptions = {};
  
  chartDatapie: ChartDataset[] = [
    {
      label: '', 
      data: []
    }
  ];

  chartLabelspie: string[] = ['teachers', 'students'];
  chartOptionspie: ChartOptions = {};

  chartDataBAR: ChartDataset[] = [
    {
      label: 'Events per student',
      data: []
    }
  ];
  chartLabelsBAR: string[] = [];

  ngOnInit(): void {
    this.getMember();

    forkJoin([
      this.AS.GetAll(),
      this.ES.Get(),
      this.MS.GetAll()
    ]).subscribe(([articles, events, members]) => {
      this.nb_Articles = articles.length;
      this.nb_Events = events.length;
      this.nb_Members = members.length;

      this.nb_teachers = 0;
      this.nb_students = 0;
      const eventsPerStudent: number[] = [];
      members.forEach(member => {
        if (member.type === "teacher") {
          this.nb_teachers++;
        } else {
          this.nb_students++;
          let eventsCount = member.tab_evt.length;
          eventsPerStudent.push(eventsCount);
          this.data_student.push(member.name  );
        }
      });

      this.chartDatapie = [
        {
          label: '', 
          data: [this.nb_teachers, this.nb_students]
        }
      ];
      this.chartDataBAR[0].data = eventsPerStudent;
      this.chartLabelsBAR = this.data_student; // Corrected this line
    });
  }

  getMember() {
    this.MS.GetAll().subscribe((res) => {
      this.nb_Members = res.length;
      for (let i = 0; i < this.nb_Members; i++) {
        this.data_member.push(res[i].name);
        this.data_m.push(res[i].tab_pub.length);
      }
      this.chartLabels = this.data_member;
    });
  }
}
