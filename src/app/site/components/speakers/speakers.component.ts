import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { SpeakerService } from '@services/speaker.service';
import { Speaker } from '@site/models/speaker';

@Component({
  selector: 'app-speakers, [app-speakers]',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakerList$!: Observable<Array<Speaker>>;

  constructor(private speakerService:SpeakerService) { }

  ngOnInit(): void {
    this.speakerList$ = this.speakerService.getSpeakerList$();
  }

}
