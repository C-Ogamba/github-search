import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { GithubDetails } from '../github-details';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  @Input() onEnterDetail: EventEmitter<any> = new EventEmitter();
    
  newGithubDetail!: GithubDetails;
  search: any;
  
   
  constructor(
    private dataService:DataService,
    private active: ActivatedRoute,
    private Router: Router,
    private GithubDetails: GithubDetails,
    

    ) { }

  ngOnInit(): void {
    // this.active.params.subscribe((params: any) => {
    //   this.search = params.data;
    //   this.onEnterDetail.emit(this.search);
    //   this.dataService.getDetails(this.search);
    //   this.newGithubDetail = this.dataService.newGithubDetail;
    // })
  }

}
