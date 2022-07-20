import { Component, OnInit } from '@angular/core';

import { CountdownService } from '@services/countdown.service';

@Component({
  selector: 'app-event, [app-event]',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  finishDate!: Date;

  constructor(private countdownService:CountdownService) { }

  ngOnInit(): void {
    this.finishDate = this.countdownService.getFinishDate();
  }

}
