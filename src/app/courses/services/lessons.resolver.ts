import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { CoursesService } from "./courses.service";
import { LessonSummary } from "../model/lesson-summary";
import { Observable } from "rxjs";

export const LessonsResolver: ResolveFn<LessonSummary[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<LessonSummary[]> => {
  return inject(CoursesService).loadAllCourseLessonsSummary(
    route.paramMap.get("courseUrl")
  );
};
