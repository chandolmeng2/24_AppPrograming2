import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  id: string | undefined;
  pw: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }
   
  login() {
    // 여기에 로그인 처리 로직을 추가
    // Prepare JSON data
    const requestData = {
      id: this.id,
      pw: this.pw
    };

    // Send JSON data to the server
    this.http.post('http://34.64.194.169/project_login.php', requestData)
      .subscribe(
        (response:any) => {
          // Handle the server response if needed
          console.log('Server Response:', response);
          if(response.success){
            this.router.navigate(['/main']);
            console.log('Move to main page:', response);
          }          
        },
        (error) => {
          // Handle error if the request fails
          console.error('Error:', error);
        }
      );

    // 디버깅 내용 추가
    console.log('디버깅 내용 출력');
    console.log('ID:', this.id);
    console.log('PW:', this.pw);

    // input form reset
    this.id = '';
    this.pw = '';    

  }
}
