import { inject } from "@angular/core";
import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { AuthStore } from "./auth.store";
import { first, tap } from "rxjs/operators";

export const CanLoadAuthGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  console.log("url segments", segments);

  const authStore = inject(AuthStore);
  const router = inject(Router);

  return authStore.isLoggedIn$.pipe(
    first(),
    tap((isLoggedIn) => {
      if (!isLoggedIn) router.navigateByUrl("/login");
    })
  );
};
