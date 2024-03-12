import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { inject } from "@angular/core";
import { CoursesService } from "./courses.service";
import { Observable } from "rxjs";

export const LessonDetailResolver: ResolveFn<LessonDetail> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<LessonDetail> => {
  return inject(CoursesService).loadLessonDetail(
    route.parent.paramMap.get("courseUrl"),
    route.paramMap.get("lessonSeqNo")
  );
};
