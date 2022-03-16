import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm!:string;

  constructor(private activeRoute: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    }

  search(){
    //read search term then navigate to the window with the matching name
    if(this.searchTerm){
      this.router.navigateByUrl("/search/"+this.searchTerm);
      this.searchTerm =""
    }
    // if(this.searchTerm==""){
    //   this.router.navigateByUrl("/dashboard")
    // }
  }
}
