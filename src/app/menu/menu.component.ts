import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public showMenu: boolean = false;

  @Input() menuItems: Array<string>;
  @Output() public emitMenuSelection = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  // emit the selected item and close the menu
  public selectItem(item: string): void {
    this.emitMenuSelection.emit(item);
    this.toggleMenu();
  }

  public closeMenu(): void {
    if (this.showMenu) {
      this.toggleMenu();
    }
  }

}
