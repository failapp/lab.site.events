import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Speaker } from '@site/models/speaker';
import { SPEAKERS_DATA } from '@site/data/mocks/speakers.data';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  private speakerListSubject: BehaviorSubject<Array<Speaker>>;

  constructor() { 
    const speakers = [...SPEAKERS_DATA];
    this.speakerListSubject = new BehaviorSubject<Array<Speaker>>([]);
    this.speakerListSubject.next(speakers);
  }

  public getSpeakerList$(): Observable<Array<Speaker>> {
    return this.speakerListSubject.asObservable();
  }

}
