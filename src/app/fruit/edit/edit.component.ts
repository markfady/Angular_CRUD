import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'pm-edit', 
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  fruitData:Fruit={
    id:0,
    name:'',
    quantity:0,
    price:0
  }

  
  constructor(private fruitService:FruitService,private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void { //get the id from route 
      this.route.paramMap.subscribe((routingId)=>{
        let id=Number(routingId.get('id'))
        this.getData(id)
      })
  }
  getData(id:number){ // pass the id to the service edit to get the data of specific item
    this.fruitService.getDataWithId(id).subscribe((data)=>{
      this.fruitData=data
    })
  }
  update(){ //method to be fired when button is clicked
    this.fruitService.edit(this.fruitData).subscribe({ //pass the data on the form (edited data) to edit service 
      next:(data)=>{
        this.router.navigate(['/fruit/home'])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
