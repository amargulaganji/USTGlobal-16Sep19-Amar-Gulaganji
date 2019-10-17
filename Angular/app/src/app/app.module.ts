import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { ProprtyBindingComponent } from './data-bindings/proprty-binding/proprty-binding.component';
import { EventBindingComponent } from './data-bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './data-bindings/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { NgIfComponent } from './directives/structural/ng-if/ng-if.component';
import { NgForComponent } from './directives/structural/ng-for/ng-for.component';
import { NgSwitchComponent } from './directives/structural/ng-switch/ng-switch.component';
import { CustomDirective } from './custom.directive';
import { RegisterComponent } from './register/register.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { FormOneComponent } from './Assignments/form-one/form-one.component';
import { FormTwoComponent } from './Assignments/form-two/form-two.component';
import { FormThreeComponent } from './Assignments/form-three/form-three.component';
import { FormFourComponent } from './Assignments/form-four/form-four.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CommentComponent } from './comment/comment.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { DollarPipe } from './dollar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
   HelpComponent,
   LoginComponent,
   FooterComponent,
   DataBindingsComponent,
   ProprtyBindingComponent,
   EventBindingComponent,
   TwoWayBindingComponent,
   DirectivesComponent,
   StructuralComponent,
   NgIfComponent,
   NgForComponent,
   NgSwitchComponent,
   CustomDirective,
   RegisterComponent,
   AssignmentsComponent,
   FormOneComponent,
   FormTwoComponent,
   FormThreeComponent,
   FormFourComponent,
   ReactiveFormComponent,
   ParentComponent,
   ChildComponent,
   CommentComponent,
   CommentDetailsComponent,
   DollarPipe

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'about', component : AboutComponent },
      { path : 'help', component : HelpComponent },
      { path : 'property-binding', component : ProprtyBindingComponent},
      { path : 'event-binding', component : EventBindingComponent },
      { path : 'two-way-binding', component : TwoWayBindingComponent},
      { path : 'login', component : NgIfComponent},
      { path : 'ng-for', component : NgForComponent},
      { path : 'ng-switch', component : NgSwitchComponent},
      { path : 'register', component : RegisterComponent},
      { path : 'form-one', component : FormOneComponent},
      { path : 'form-two', component : FormTwoComponent},
      { path : 'form-three', component : FormThreeComponent},
      { path : 'form-four', component : FormFourComponent},
      { path : 'reactive-form', component : ReactiveFormComponent},
      { path : 'parent', component : ParentComponent},
      { path: 'comment-details', component: CommentDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
