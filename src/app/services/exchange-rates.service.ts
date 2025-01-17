import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfiguration } from '../config/api.config';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ExchangeRatesService {

  constructor(private http: HttpClient) { }

  getExchangeRate(fromCurrency: String, toCurrency: String) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AuthenticationService.token}`
    });

    let requestUrl = apiConfiguration.exchangeRateHost + apiConfiguration.exchangeRateRoute + `?from=${fromCurrency}&to=${toCurrency}`;
    return this.http.get(requestUrl, { headers: header });
  }

  getExchangeRateForLastMonth(fromCurrency: String, toCurrency: String, vendor: String) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AuthenticationService.token}`
    });

    let requestUrl = apiConfiguration.exchangeRateHost + apiConfiguration.lastMonthRoute + `?from=${fromCurrency}&to=${toCurrency}&vendor=${vendor}`;
    return this.http.get(requestUrl, { headers: header });
  }

  getExchangeRateForRange(fromCurrency: String, toCurrency: String, startDate: Date, endDate: Date) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AuthenticationService.token}`
    });

    let requestUrl = apiConfiguration.exchangeRateHost + apiConfiguration.exchangeRateForRangeRoute +
      `?from=${fromCurrency}&to=${toCurrency}&startDate=${startDate.toISOString().split('T')[0]}&endDate=${endDate.toISOString().split('T')[0]}`;
    return this.http.get(requestUrl, { headers: header });
  }
}
