import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

import { CanActivateFn } from '@angular/router';

export const roleGuardGuard: CanActivateFn = (route, state) => {
 const authService= inject(AuthService);
 return authService.checkCurrentRol();
}
