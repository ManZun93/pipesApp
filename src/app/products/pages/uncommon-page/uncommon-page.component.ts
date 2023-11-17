import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name :string = 'Manuel';
  public gender : 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }


changeClient() : void {
  this.name = 'Melissa';
  this.gender = 'female';
}


//i18n Plural

public clients : string[] = ['Manuel', 'Valeria', 'Janneth', 'Andrea', 'Charlie' ]

public clientsMap = {
  '=0' : 'no tenemos clientes esperando.',
  '=1' : 'tenemos un cliente esperando.',
  'other' : 'tenemos # clientes esperando.'
}

deleteClient() : void {
 this.clients.shift()
}

//keyvalue Pipe

public person = {
  name: 'Manuel',
  age: '46',
  address: 'Pasto, Colombia'
}


//async pipe

public myObservableTimer: Observable<number> =  interval(2000).pipe(
  tap(value => console.log('tap:', value))
)

public promiseValue : Promise<string> =  new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve('tenemos data en promesa')
    console.log('tenemos data en promesa')
  }, 3500)
})


}
