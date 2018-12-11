import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'

import { Artist } from './artist';
import { ARTISTS } from './mock-artists';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(public messageService: MessageService) {}

  getArtists(): Observable<Artist[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ArtistService: fetched artists');
    return of(ARTISTS);
  }
}
