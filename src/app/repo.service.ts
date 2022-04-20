import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  url: string = 'https://api.github.com/users/';
  repo!: Repo;
  repos:any[]=[]

  constructor(private http: HttpClient) {}
  getDetails(username: string) {
    console.log(username);
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any>(`${this.url}${username}/repos?access_token'=${environment.token}`)
        .toPromise()
        .then(
          (response) => {
            response.forEach((res:any) => {
              this.repo= new Repo(
                res.name,
                res.description,
                res.html_url,
                res.created_at,
                res.language,
              )
              this.repos.push(this.repo)
            });;
         
            resolve(response);
          },
          (error: any) => {
            reject(error);
          }
        );
    });
    return promise;
  }
}
