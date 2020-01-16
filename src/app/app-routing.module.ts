import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './paginas/post/posts/posts.component';
import { PostComponent } from './paginas/post/post/post.component';


const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
