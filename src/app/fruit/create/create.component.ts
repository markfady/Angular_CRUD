import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'pm-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formdata: Fruit = {
    id: 0, // Initialize with a numeric ID
    name: '',
    quantity: 0,
    price: 0,
  };

  constructor(private fruitService: FruitService, private router: Router) {}

  ngOnInit(): void {
    this.setNextId();
  }

  setNextId(): void {
    this.fruitService.getAll().subscribe((items: Fruit[]) => {
      if (items.length > 0) {
        const maxId = Math.max(...items.map(item => item.id));
        this.formdata.id = maxId + 1;
      } else {
        this.formdata.id = 1;
      }
    });
  }

  create(): void {
    this.fruitService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(['/fruit/home']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
