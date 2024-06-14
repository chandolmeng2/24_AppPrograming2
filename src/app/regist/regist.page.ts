import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage {

  id:  string | undefined;
	pw:  string | undefined;
	phone: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  regist() {
    const requestData = {
      id: this.id,
      pw: this.pw,
      phone: this.phone
    };

    // Send JSON data to the server
    this.http.post('http://34.64.194.169/project_regist.php', requestData)
      .subscribe(
        (response) => {
          // Handle the server response if needed
          console.log('Server Response:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          // Handle error if the request fails
          console.error('Error:', error);
        }
      );

    // 디버깅 내용 출력
    console.log('디버깅 내용 출력');
    console.log('id:', this.id);
    console.log('pw:', this.pw);
    console.log('phone:', this.phone);
    
    // input form reset
    this.id = '';
    this.pw = '';    
    this.phone = '';
  }  

}
