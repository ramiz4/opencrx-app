import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OpencrxService {
  private readonly baseUrl = 'http://localhost:8080/opencrx-rest-CRX/org.opencrx.kernel.account1/provider/CRX/segment/Standard';

  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get(`${this.baseUrl}/account`);
  }
}
