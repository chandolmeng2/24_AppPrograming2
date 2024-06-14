import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  data: any[] = [];  

  selectedDate: string = '';

  highlightedDates : any[] = [];
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadData();
    
  }

  loadData() {
    this.http.get<any>('http://34.64.194.169/project_datedata.php').subscribe(
      (response) => {
        if(response.success){
        this.highlightedDates = response.data.map((item: any) => ({
          date: item.date,
          textColor: item.textColor,
          backgroundColor: item.backgroundColor
        }));
      }},
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  show() {
    this.http.get<any>('http://34.64.194.169/project_show.php').subscribe(
      (response) => {
        if(response.success){
        this.data = response.data.map((item: any) => ({
          custom_date: item.custom_date,
          content: item.content
        }));
      }},
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

}
