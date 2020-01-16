import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comentario } from '../../models/comentario.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input()idPost: number;
  @Output()send_date: EventEmitter<string> = new EventEmitter<string>();
  comentarios:Array<Comentario> = []
  cargando_comentarios:boolean = true
  constructor(
    public _postService:PostService
  ) { }

  ngOnInit() {
    this.obtenerComentarios()
  }

  obtenerComentarios(){
    console.log(this.idPost)
    this.cargando_comentarios = true
    this._postService.obtenerComentarios(this.idPost).subscribe((respuesta:Array<Comentario>)=>{
      console.log(respuesta)
      this.comentarios = respuesta
      this.cargando_comentarios = false
    })
  }
  emitir(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f=new Date();
    let last_date = f.getDate() + ", " + meses[f.getMonth()] + ", " + f.getFullYear()
    this.send_date.emit(last_date)
  }

}
