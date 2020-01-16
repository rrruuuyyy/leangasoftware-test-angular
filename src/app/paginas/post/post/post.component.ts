import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id:number
  post:Post
  loading_post:boolean = true
  last_date:string = '';
  constructor(
    public _route:ActivatedRoute, public _PostsService:PostService
  ) { }

  ngOnInit() {
    this.id = Number(this._route.snapshot.paramMap.get('id'))
    this.obtenerInfoPost()
  }
  obtenerInfoPost(){
    this.loading_post = true
    this._PostsService.obtenerDetallePost(this.id).subscribe((respuesta:Post)=>{
      this.post = respuesta
      this.loading_post = false
      console.log(respuesta)
    })
  }
  getDate(date:string){
    this.last_date = date
  }

}
