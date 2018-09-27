import { NgModule } from '@angular/core';
// Enable the angular router
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent} from './body/body.component';
import { PostsComponent } from './posts/posts.component';

// We create the array of routes
// Routes are JS objtect where we define what part or URL is used
const routes: Routes = [
  // Path-1
  {path: '', component: BodyComponent},
  {path: 'posts', component: PostsComponent}
  // Path-2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
