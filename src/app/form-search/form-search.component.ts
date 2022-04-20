import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css'],
})
export class FormSearchComponent implements OnInit {
 
 
  username: String = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   if (params['username']) {
    //     this.username = params['username'];
    //   }
    // });
  }

  searchGithub() {
    // console.log(this.username)
    if (!this.username) return;
    this.router.navigate(['user/${this.username}'], {queryParams:{data:this.username
    }});
  }
}