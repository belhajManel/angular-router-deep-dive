import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { CoursesService } from "./courses.service";

export const RouterReslover: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(CoursesService).loadCourseByUrl(
    route.paramMap.get("courseUrl")
  );
};
