import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/env-config';
import { ConfigService } from '../../services/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient, private envConfig: ConfigService ) {}

  getNewsHeadlines():Observable<any> {
    const apiUrl = this.envConfig.getStockNewsApiUrl();
    const apiKey = this.envConfig.getStockNewsApiKey();

    // Include the headers in the HTTP request
    return this.http.get(apiUrl+`?apiKey=`+apiKey);
  }
}
