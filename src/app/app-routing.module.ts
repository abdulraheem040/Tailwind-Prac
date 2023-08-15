import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { TodosComponent } from './todos/todos.component';
import { PlaceComponent } from './place/place.component';
import { FormDataComponent } from './form-data/form-data.component';
import { CourseComponent } from './course/course.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: 'Menu', component: WorksComponent },
  { path: 'Menu/Details', component: TodosComponent },
  { path: 'Menu/Booking', component: PlaceComponent },
  { path: 'Menu/User', component: FormDataComponent },
  { path: 'Menu/User/Course', component: CourseComponent },
  { path: 'Menu/Chat', component: ChatComponent },
  { path: '**', component: WorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
