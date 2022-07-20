import { Component, OnInit } from '@angular/core';
import { CountdownService } from '@services/countdown.service';

@Component({
  selector: 'app-hero, [app-hero]',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  finishDate!: Date;

  constructor(private countdownService:CountdownService) { }

  ngOnInit(): void {
    this.finishDate = this.countdownService.getFinishDate();
  }

}
