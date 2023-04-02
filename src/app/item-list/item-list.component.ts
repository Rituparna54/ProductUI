import { Component } from '@angular/core';
export interface Product{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:number;
}
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
item:Product[]=[
  { id : 1,
    title:'HP Elitebook',
    price:85000,
    description:'4TB RAM',
    category:'Laptop',
    image:'https://www.notebookcheck.net/uploads/tx_nbc2/teaser1_10.png',
    rating:4.5
  } ,
  
  { 
    id : 2,
    title : 'Iphone',
    price:76000,
    description:'Iphone12',
    category:'Phone',
    image:'https://miro.medium.com/v2/resize:fit:3840/1*3A7IB7aFY_DMf_1mW_qkUg.jpeg',
    rating:4.5
  },
]
}
