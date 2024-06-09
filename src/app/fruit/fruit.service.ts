import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http:HttpClient) {}

    getAll(){
      return this.http.get<Fruit[]>('http://localhost:3000/fruits')
    }

    create(data:Fruit){
      return this.http.post<Fruit[]>('http://localhost:3000/fruits',data)
    }
   
}
