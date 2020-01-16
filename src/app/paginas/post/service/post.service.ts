import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/';
  constructor(
    public http:HttpClient
  ) { }
  obtenerPosts(){
    let url = this.url + 'posts'
    return this.http.get(url)
  }
  obtenerDetallePost(id:number){
    let url = this.url + 'posts/' + id
    return this.http.get(url)
  }
  obtenerComentarios(postId:number){
    let url = this.url + 'comments?postId=' + postId
    return this.http.get(url)
  }
}
