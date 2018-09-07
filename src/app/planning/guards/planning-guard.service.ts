import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class PlanningGuard implements CanActivate, CanActivateChild {

  canActivate() {
    console.log('i am checking to see if you are logged in');
    return prompt('Enter password') === '0000';
  }

  canActivateChild() {
    console.log('checking child route access');
    return prompt('Enter password') === '1111';
  }
}
