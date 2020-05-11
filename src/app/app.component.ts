import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = ['Home', 'About', 'Test', 'Item'];

  selectItem(menuItem: any) {
    console.log(menuItem);
    
  }
}
