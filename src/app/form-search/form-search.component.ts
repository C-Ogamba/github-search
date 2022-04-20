import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css'],
})
export class FormSearchComponent implements OnInit {
  
  username: string = '';
  @Output() newSearch: EventEmitter<any> = new EventEmitter();
  showProfileModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(username: string): void {
    if (username.length > 1) {
      username = username.replace(/\s/g, '').trim().toLocaleLowerCase();
      this.newSearch.emit(username);
      this.username = '';
    }
  }
}