import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

   public menuItems : MenuItem[] = []

ngOninit(){
  this.menuItems = [
    {label: 'New', icon: PrimeIcons.PLUS},
    {label: 'Open', icon: 'pi pi-fw pi-download'},
    {label: 'Undo', icon: 'pi pi-fw pi-refresh'},

  ]
}

}
