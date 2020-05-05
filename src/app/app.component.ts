import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sideflag: boolean = false;
  public title: string = 'i love you'
  showaside() {
    this.sideflag = !this.sideflag;
    console.log(this.sideflag)
  }
}
