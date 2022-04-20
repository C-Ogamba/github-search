import { Injectable } from '@angular/core';
import { GithubDetails } from '../github-details';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';
import { access } from 'fs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = 'https://api.github.com/users';
  newGithubDetail: GithubDetails;
  username! : any


  constructor(private http: HttpClient) {
    this.newGithubDetail = new GithubDetails("","","",0,0)
  }

  getDetails(username: string){
    console.log(username)
    let promise = new Promise((resolve, reject) => {
      this.http
      .get<any>(
        `${this.url}${username}?access_token'=${environment.token}`
      )
      .toPromise()
      .then(
        (response) =>{
          response = response;
          this.newGithubDetail = new GithubDetails(
            (this.newGithubDetail.avatar = response.avatar_url),
            (this.newGithubDetail.name = response.name),
            (this.newGithubDetail.bio = response.bio),
            (this.newGithubDetail.followers = response.followers),
            (this.newGithubDetail.following = response.following)

          );
          resolve(response);
        },
        (error: any) =>{
          reject(error);
        }
      );
    });
    return promise;

  }
}
