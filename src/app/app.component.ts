import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
   
    {
      title: 'Mon Compte',
      url: '/compte',
      icon: 'book'  
    },
    {
      title: 'Info Consommation',
      url: '/data',
      icon: 'information-circle'  
    },
    {
      title: 'Achat De Forfait',
      url: '/offre',
      icon: 'albums'
    },
    {
      title: 'Mobile Money',
      url: '/mvola',
      icon: 'cash'
    },
    {
      title: 'Recharge',
      url: '/recharge',
      icon: 'basket'
    },
    {
      title: 'Appel',
      url: '/appel',
      icon: 'call'
    },
    {
      title: 'Sms',
      url: '/sms',
      icon: 'chatbubbles'
    },
    {
      title: 'Internet',
      url: '/internet',
      icon: 'cloud'
    }
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  deconnexion(){
    sessionStorage.removeItem("token");
    this.router.navigate(["/"]);
  }
}
