import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {

  title: string;
  hero: string;

  constructor() {
    this.title = 'Tour of Heroes!';
  }

}
