/*
*  Angular
* */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/*
* 导入组件 Components
* */
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { RedBgDirective } from './directives/red-bg.directive';
import { TestComponent } from './components/test/test.component';
import { StrucDirectiveDirective } from './directives/struc-directive.directive';
import { BooleanPipe } from './pipes/boolean.pipe';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';


/*
* @NgModule
* @:
* 注解/标注/装饰/宏定义
* */
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FooterComponent,
    NavigationComponent,
    SignInComponent,
    SignUpComponent,
    BackToTopComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    NotFoundComponent,
    UserListComponent,
    ProfileComponent,
    UploadFileComponent,
    RedBgDirective,
    TestComponent,
    StrucDirectiveDirective,
    BooleanPipe,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
