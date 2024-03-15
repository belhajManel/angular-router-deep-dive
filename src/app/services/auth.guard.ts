import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthStore } from "./auth.store";
import { map } from "rxjs/operators";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> => {
  const router: Router = inject(Router);
  const authStore: AuthStore = inject(AuthStore);

  return authStore.isLoggedIn$.pipe(
    map((loggedIn) => (loggedIn ? true : router.parseUrl("/login")))
  );
};
