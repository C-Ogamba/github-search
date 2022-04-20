import { Component, OnInit, Input, } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-section',
  templateUrl: './repo-section.component.html',
  styleUrls: ['./repo-section.component.css'],
})
export class RepoSectionComponent implements OnInit {
  @Input() onEnterDetail!: string;

  newGithubRepo!: any[];
  search:any;

  constructor(private repoService: RepoService) {}

  ngOnInit(): void {
     this.repoService.getDetails(this.onEnterDetail);
     this.newGithubRepo = this.repoService.repos;
  }
}
