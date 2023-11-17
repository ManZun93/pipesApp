import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'manuel'
  public nameUpper: string = 'MANUEL'
  public fullName: string = 'MaNUel'

  public customDate: Date = new Date();


}
