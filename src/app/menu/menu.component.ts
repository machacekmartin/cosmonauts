import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  logo = "Cosmonaut Records";
  menuItems = ["Cosmonauts", "Settings"];
  opened: boolean;

  openMenu(){
    document.getElementById("menu-mobile").style.width = "250px";
  }
  closeMenu() {
    document.getElementById("menu-mobile").style.width = "0";
}
  

}
