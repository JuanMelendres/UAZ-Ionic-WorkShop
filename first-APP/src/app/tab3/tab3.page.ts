import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private spotify: SpotifyService
  ) {}

  ngOnInit(): void {
    this.spotify.getSpotify().subscribe((res) => {
      console.log(res);
      
    });
    
  }

}
