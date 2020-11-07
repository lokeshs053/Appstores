import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
app:string;
appDetails:any;
constructor(private _aroute:ActivatedRoute,private _searchService:SearchService) { }

  ngOnInit() {
    console.log(this._aroute.snapshot.params.data);
  }

  search()
  {
    console.log(this.app)
    this._searchService.searchByName(this.app).subscribe((data)=>{console.log(data['storedDataList']);
  this.appDetails=data['storedDataList']},(error)=>{console.log(error)});
  }


  

}
