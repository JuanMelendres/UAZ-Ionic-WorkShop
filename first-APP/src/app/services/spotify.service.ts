import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: any = 'BQA2Bh2P5jG3eKSJp7rZH3yGe9Q5usv1MM3_9-Uql9d6yr9S1Q038dJ-uusLRcCZPLEA03Hg2fwpY6EWUblICZ_ivklQLrCLcJ0hdDwn-27gZI83xaHvTV5K4i6Gjjj45cKM3eUNKR9Ve29YNdE3SUGxCOAKad4EKLz1';

  constructor(private http: HttpClient) { }

  getSpotify(): Observable<any> {
    const apiUrl = 'https://api.spotify.com/v1/browse/categories';
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem(this.token))
   });
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer BQA2Bh2P5jG3eKSJp7rZH3yGe9Q5usv1MM3_9-Uql9d6yr9S1Q038dJ-uusLRcCZPLEA03Hg2fwpY6EWUblICZ_ivklQLrCLcJ0hdDwn-27gZI83xaHvTV5K4i6Gjjj45cKM3eUNKR9Ve29YNdE3SUGxCOAKad4EKLz1`
    // })
    return this.http.get(apiUrl, { headers: reqHeader })
  }
}
