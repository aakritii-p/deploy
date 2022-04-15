import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  newSalespersonClicked=false;
  salespersons=[
    {
       Id:1,Name:"Yash",Phone:9991,Password:9991,RmId:1
    },
    {
      Id:2,Name:"Paru",Phone:9891,Password:9891,RmId:2
     }
  ];
   color:any;
  constructor() { }

  ngOnInit(): void {
  }

   model:any={};
   model2:any={};
  //  salesperso:any={};
  //  i:any={};

   addSalesperson(){
     this.salespersons.push(this.model);
     this.model={}
   }
   deleteSalesperson(id:any){
     this.salespersons.splice(id);
     console.log(id);
   }
   myValue:any;

  editSalesperson(editSalespersonInfo:any){
       this.model2.Id=this.salespersons[editSalespersonInfo].Id;
       this.model2.Name=this.salespersons[editSalespersonInfo].Name;
       this.model2.Phone=this.salespersons[editSalespersonInfo].Phone;
       this.model2.Password=this.salespersons[editSalespersonInfo].Password;
       this.model2.RmId=this.salespersons[editSalespersonInfo].RmId;
       this.myValue=editSalespersonInfo;
  }

  updateSalesperson(){
    let editSalespersonInfo=this.myValue;
    for(let i=0;i<this.salespersons.length;i++)
    {
      if(i==editSalespersonInfo){
            this.salespersons[i]=this.model2;
            this.model2={}
      }
    }
  }
  
  addNewSalespersonBtn(){
    this.newSalespersonClicked=!this.newSalespersonClicked;

  }
  
  changeColorOne(){
    this.color=!this.color;
    if(this.color){
      return '#ffffff';

    }
    else{
      return '#f6f6f6';
    }
  }



}
