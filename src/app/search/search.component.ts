import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Shoes } from '../shoes';
import { ShoesService } from '../shoes.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'kicks4all';
  searchText:any;
 // shoeParts: Shoes[] = [];
  shoes:any = [];

  constructor(private postsService: PostsService, private fb: FormBuilder) {      this.retrieveAll();
  }

  ngOnInit() {

  }
  retrieveAll(){
    this.postsService.getAllShoes().subscribe(shoes => {
      this.shoes = shoes;
      });
  }
}
