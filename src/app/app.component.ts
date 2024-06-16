import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Pooja';

 newFname:string='';
newLname:string='';
 names:{fname:string,lname:string}[]= [{fname:"Pooja",lname:"Kushwaha"},
  {fname:"Kabir",lname:"Singh"}
 ]

 remove(n1:number):void
 {
  this.names.splice(n1,1)
 }

 Add():void
 {
  this.names.push({fname:this.newFname,
    lname:this.newLname
  });
  this.newFname=''
this.newLname=''
 }

 Sort():void{

  this.names.sort((a,b)=>{
    if(a.fname<b.fname)
      return-1
    else if(a.fname>b.fname)
      return 1

    return 0
  })

 }
}
