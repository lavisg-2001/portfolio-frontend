import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ Ensure it's provided at the root level
})
export class PortfolioService {
  private apiUrl = 'http://localhost:3000/api'; // Update as needed

  constructor(private http: HttpClient) {} // ✅ Inject HttpClient

  getLikes(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/likes`);
  }

  likePortfolio(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/like`, {});
  }

  reachOut(name: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reach-out`, { name });
  }

  getPortfolioData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/portfolio`);
  }
}
