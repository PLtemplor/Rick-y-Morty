import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(protected http: HttpClient) {
  }

  getClientList(): Observable<any> {
    return this.http.get(environment.authMicroserviceUrl + `/api/clients`);
  }

  findClientById(clientId): Observable<any> {
    return this.http.get(`${environment.authMicroserviceUrl}/api/clients/${clientId}`);
  }

  postClient(formData) {
    return this.http.post(`${environment.authMicroserviceUrl}/api/clients`, formData);
  }

  getPhonesByClient(clientId): Observable<any>{
    return this.http.get(environment.authMicroserviceUrl + `/api/v1/client/${clientId}/phones`);
  }

  postPhones(clientId, formData) {
    return this.http.post(`${environment.authMicroserviceUrl}/api/v1/client/${clientId}/phones`, formData);
  }

  deletePhones(formData) {
    return this.http.delete(`${environment.authMicroserviceUrl}/api/v1/client/phone/${formData.id}`);
  }

  editPhones(formData) {
    return this.http.put(`${environment.authMicroserviceUrl}/api/v1/client/phone/update`, formData);
  }

  hasAClient(): Observable<any> {
    return this.http.get(environment.authMicroserviceUrl + `/api/clients/hasClient`);
  }

  createClient(name): Observable<any> {
    return this.http.post(environment.authMicroserviceUrl + `/api/clients/create`, {
      name
    });
  }
}
