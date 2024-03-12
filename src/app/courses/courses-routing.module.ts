import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CourseComponent } from "./course/course.component";
import { RouterReslover } from "./services/router.reslover";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: ":courseUrl",
    component: CourseComponent,
    resolve: { course: RouterReslover },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CoursesRoutingModule {}
