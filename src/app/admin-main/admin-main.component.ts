import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { AboutusComponent } from 'app/aboutus/aboutus.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor() { 
  
  }

  
  Modelabout : any;

  ngOnInit(): void {
    

  }
  ngAfterViewInit():void{
    let element:HTMLElement = document.getElementById("abtus") as HTMLElement;

    element.click();
  }
  

 

}
