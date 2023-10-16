import { Injectable } from '@angular/core';
import { environment } from '../environments/env-config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  getStockApiUrl(): string {
    return environment.stockApiUrl;
  }

  getStockNewsApiUrl(): string {
    return environment.stockNewsApiUrl;
  }

  getStockApiKey(): string {
    return environment.stockApiKey;
  }

  getStockNewsApiKey(): string {
    return environment.stockNewsApiKey;
  }
}
