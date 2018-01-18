import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


// Clone the request to add the new header.
const authToken = 'BQCCDsJvh4P2tu1hi6gheJXkp3m27C3jEhPe9mCKnvZJiMk1rT_XgxRYq-EuKlZJ8Xb_hcHfP1RYjbjSQDXg0sm5MdDArDnE98U0Cu5TeWcJ5iWAHWoSQwdEGNQfC_dadoTBsVWZDsCPqXSnRcyPK2qCJw';
const authReq = req.clone({ headers: req.headers.set("Authorization", "Bearer " + authToken)});

console.log("Sending request with new header now ...");
//send the newly created request

return next.handle(authReq)
  .catch((error, caught) => {
    //intercept the respons error and displace it to the console
    console.log("Error Occurred");
    console.log(error);
    //return the error to the method that called it
    return Observable.throw(error);
    }) as any;
  }
}
