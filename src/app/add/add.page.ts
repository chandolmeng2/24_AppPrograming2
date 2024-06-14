import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit{

  custom_date: string | undefined;
  datecolor: string = '#000000';
  textcolor: string = '#ffffff';
  content: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const today = new Date();
    this.custom_date = today.toISOString();
  }
   
  addData() {
    if(this.custom_date) {
      this.custom_date = this.custom_date.split('T')[0];
    }
    const formData = new FormData();
    formData.append('custom_date', this.custom_date || '');
    formData.append('datecolor', this.datecolor || '');
    formData.append('textcolor', this.textcolor || '');
    formData.append('content', this.content || '');

    // Send JSON data to the server
    this.http.post('http://34.64.194.169/project_adddata.php', formData)
      .subscribe(
        (response) => {          
          console.log('Server Response:', response);
          console.log('Move to main page:', response);
        },
        (error) => {
          // Handle error if the request fails
          console.error('Error:', error);
        }
      );

    // 디버깅 내용 추가
    console.log('디버깅 내용 출력');
    console.log('custom_date:', this.custom_date);
    console.log('datecolor:', this.datecolor);
    console.log('textcolor:', this.textcolor);
    console.log('content:', this.content);

    // input form reset
    this.custom_date = '';
    this.datecolor = '';
    this.textcolor = '';
    this.content = '';

  }
}
