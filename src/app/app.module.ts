import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './paginas/post/posts/posts.component';
import { PostComponent } from './paginas/post/post/post.component';
import { PostService } from './paginas/post/service/post.service';
import { ComentariosComponent } from './paginas/post/componentes/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
