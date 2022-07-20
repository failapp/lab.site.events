import { Component, OnInit } from '@angular/core';

import { CountdownService, Timer } from '@services/countdown.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  timer!: Timer;

  constructor(private countdownService:CountdownService) { }

  ngOnInit(): void {
    this.countdownService.getTimer$().subscribe( x => {
        this.timer = x;
      }
    )
  }

}
