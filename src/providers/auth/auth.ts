import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
 
@Injectable()
export class AuthProvider {

    constructor(public angFireAuth: AngularFireAuth) {

    }

    login(credentials) {
        var promise = new Promise((resolve, reject) => {
            this.angFireAuth.auth.signInWithEmailAndPassword(
                    credentials.email, credentials.password)
                .then(() => {
                    localStorage.setItem("isLogin", "true");
                    resolve(true);
                }).catch((err) => {
                    reject(err);
                })
        })
        return promise;
    }

    logout() {
        localStorage.removeItem("isLogin")
    }

}