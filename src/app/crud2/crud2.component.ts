import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.css']
})
export class Crud2Component{

  newVehicleClicked = false;
  vehicles = [
    {Modelid:'1',ModelType:'4 wheeler',name:'BMW X7',ActualPrice:'2,00,00,000',ShowroomId:'1'},
    {Modelid:'2',ModelType:'2 wheeler',name:'Yamaha Y2K',ActualPrice:'28,00,000',ShowroomId:'1'},
    {Modelid:'3',ModelType:'4 wheeler',name:'Porsche Taycan',ActualPrice:'1,50,00,000',ShowroomId:'1'}
  
  ];

  color:any;


  constructor() { }

  ngOnInit(): void {
  }

  Model:any = {};
  Model2:any = {};
  addVehicle(){
    this.vehicles.push(this.Model);
    this.Model={}
  }

  deleteVehicle(id:any){
    this.vehicles.splice(id);
    console.log(id);
  }
  myValue:any;
   
 editVehicle(editVehicleinfo:any){
  this.Model2.Modelid = this.vehicles[editVehicleinfo].Modelid;
  this.Model2.ModelType = this.vehicles[editVehicleinfo].ModelType;
  this.Model2.name = this.vehicles[editVehicleinfo].name;
  this.Model2.ActualPrice = this.vehicles[editVehicleinfo].ActualPrice;
  this.Model2.ShowroomId = this.vehicles[editVehicleinfo].ShowroomId;
  
  this.myValue = editVehicleinfo;
} 
  
updateVehicle()
{
  let editVehicleinfo = this.myValue;
  for(let i = 0;i<this.vehicles.length;i++)
  {
    if(i==editVehicleinfo)
    {
      this.vehicles[i] = this.Model2;
      this.Model2 = {}
    }
  }
}

addNewVehicleBtn(){
  this.newVehicleClicked = !this.newVehicleClicked;

}
changeColorOne(){
  this.color = !this.color;
  if(this.color){
    return '#ffffff';
  }
  else{
    return '#f6f6f6';
  }
}


}
