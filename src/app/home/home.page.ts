import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showSplash = true;
  constructor(private router: Router, private loadingController: LoadingController) {}
  ionViewDidEnter() {
    this.presentLoading();
    setTimeout(() => {
      this.hideSplash();
    }, 10000);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 10000,
    });
    return await loading.present();
  }
  hideSplash() {
    this.showSplash = false;
    this.router.navigate(['/login']);
  }
}