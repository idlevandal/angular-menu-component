import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public showMenu: boolean = false;

  @Input() menuItems: Array<string>;
  @Output() public emitMenuSelection = new EventEmitter();

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  public selectItem(item: string): void {
    this.emitMenuSelection.emit(item);
    this.toggleMenu();
  }

  public closeMenu(): void {
    this.showMenu = false;
  }

}
