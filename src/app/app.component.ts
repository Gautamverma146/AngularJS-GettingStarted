import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  message = "Hello From Bridgelabz"
  imgURL = "../assets/BL_logo_square_png.png"
  url = "https://www.bridgelabz.com/"
  onClick(){
    window.open(this.url)
  }
}
