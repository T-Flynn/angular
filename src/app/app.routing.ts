import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { TodoComponent } from './components/todo/todo.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TestComponent } from './components/test/test.component';
import {BlogDetailComponent} from "./components/blog-detail/blog-detail.component";

const AppRoutes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogdetail/:id', component: BlogDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotFoundComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
