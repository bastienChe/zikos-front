import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { User } from 'src/app/auth/components/dto/User'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  toVerifyEmail: boolean;

  constructor() { }

  signUp(userForm: User): Promise<any> {
    const user = {
      username: userForm.name,
      password: userForm.password,
      attributes: {
        email: userForm.email
      }
    }
    console.log(user);
    return Auth.signUp(user).then(user => {
      console.log(user);
    }).catch(e => {
      throw ("Couldn't sign-up : " + e)
    });
  }


  comfirmSignUp(name: string, code: string): Promise<any> {
    return Auth.confirmSignUp(name, code,
      { forceAliasCreation: true }).then(data => {
        console.log(data)
        this.toVerifyEmail = false;
      })
      .catch(e => {
        throw ("Couldn't sign-up : " + e)
      });
  }

  signIn(name: string, password: string): Promise<any> {
    const user = {
      username: name,
      password: password,
    }
    return Auth.signIn(user).then(user => {
      console.log(user);
    })
      .catch(e => {
        throw ("Couldn't sign-up : " + e)
      });
  }

  signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

}
