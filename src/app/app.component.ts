import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";
import * as firebase from "firebase";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      { title: "Home", component: HomePage, icon: "home" },
      {
        title: "Local Weather",
        component: LocalWeatherPage,
        icon: "partly-sunny"
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();
      var config = {
        apiKey: "AIzaSyCAw7XmG9ILXdOdWS6CcLfMCMpmFuZeioc",
        authDomain: "mytunisia-b43e9.firebaseapp.com",
        databaseURL: "https://mytunisia-b43e9.firebaseio.com/",
        projectId: "mytunisia-b43e9",
        storageBucket: "mytunisia-b43e9.appspot.com",
        messagingSenderId: "353257819504"
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }
}
