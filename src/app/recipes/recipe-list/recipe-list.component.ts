import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is simply a test', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg'),
    new Recipe('Spaghett', 'This is simply a test', 'https://cdn.daynauan.info.vn/wp-content/uploads/2018/03/mi-y-chay.jpg')
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
