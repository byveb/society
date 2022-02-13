import { Router } from '@angular/router';
import { JwtHelper, Keys } from '@app/utilities';
import { Injectable } from '@angular/core';
import { AppStorageService, TokenService } from '..';

@Injectable()
export class AuthService {

  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private tokenService: TokenService, private router: Router,
    private storage: AppStorageService) { }

  get token(): string {
    return this.storage.getItem(Keys.accessToken);
  }
  
  public login(form: any, returnUrl?: string): void {
    const user = { status: 'loggedIn' };
    this.storage.setItem(Keys.currentUser, user);
    this.router.navigate([returnUrl || '/']);
  }

  public isLoggedIn() {
    const token = this.storage.getItem(Keys.accessToken);
    return token ? this.jwtHelper.isTokenExpired(token) : false;
  }

  get currentUser() {
    const token = this.storage.getItem(Keys.accessToken);
    return token ? this.jwtHelper.decodeToken(token) : null;
  }
}
