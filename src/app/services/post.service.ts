import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment';
import { post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }

  public getPost()
  {
    let url=environment.postURL;
    return this._http.get(url);
  }

  public getSpecificPost(post_id:number)
  {
    let url=environment.postURL+post_id;
    return this._http.get(url);
  }

  public addPost(requestObj:post)
  {
    let url=environment.postURL;
    return this._http.post(url,requestObj);
  }
}
