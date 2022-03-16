import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm!:string;

  constructor(private activeRoute: ActivatedRoute,
    private shareService: SharedServiceService,
    private router: Router) { }

  ngOnInit(): void {
      //params['searchTerm'];
      //this.searchTerm = this.shareService.searchTerm
    }

  search(){
    if(this.searchTerm){
      this.router.navigateByUrl("/search/"+this.searchTerm);
      this.searchTerm =""
    }
    if(this.searchTerm){
      this.router.navigateByUrl("/dashboard")
    }
    //console.log(this.activeRoute.snapshot.paramMap.get('searchTerm'))
    //console.log(this.searchTerm)
    //console.log(this.shareService.searchTerm)
   // this.searchTerm = this.shareService.searchTerm
  }
}
