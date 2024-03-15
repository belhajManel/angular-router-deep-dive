import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from "@angular/router";
import { CourseComponent } from "../courses/course/course.component";

export const ConfirmExitGuard: CanDeactivateFn<CourseComponent> = (
  component: CourseComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return component.confirmExit();
};
