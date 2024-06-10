import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allFruits:Fruit[]=[]

  constructor(private fruitService:FruitService){}

  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data)=>{
      this.allFruits=data
    })
  }
  deleteItem(id:number){
    this.fruitService.deleteItem(id).subscribe({
      next:(data)=>{
        this.allFruits=this.allFruits.filter(el=>el.id!=id)
      }
    })
  }
}
