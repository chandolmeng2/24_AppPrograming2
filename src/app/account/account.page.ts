import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  AllDelete() {
    this.http.post('http://34.64.194.169/project_delete.php', {})
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
  }

  LogOut() {
    this.router.navigate(['/login']);
  }

}
