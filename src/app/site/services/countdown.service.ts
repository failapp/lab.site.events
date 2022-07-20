import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';

export interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  //private finishDateStr: string = '';
  private finishDate: Date;

  private timer!: Timer;

  private timerSubject: BehaviorSubject<Timer>;

  constructor() { 
    
    // format date string YYYY-MM-dd HH:mm:ss
    //this.finishDate = new Date(this.finishDateStr);
    
    //var strDate = '2022-06-14T09:00:00';
    //this.finishDate = new Date(strDate);

    //this.finishDate = new Date(2022, 5, 14);

    this.finishDate = new Date();
    this.finishDate.setDate(this.finishDate.getDate() + 15); //add 15 days..

    const day = this.finishDate.getDate();
    const month = this.finishDate.getMonth();
    const year = this.finishDate.getFullYear();

    this.finishDate = new Date(year, month, day);
    this.finishDate = this.addHours(9, this.finishDate);

    //console.log('[x] finishDate: ', this.finishDate); 

    this.timer = { hours: 0, minutes: 0, seconds: '0', days: 0 }
    this.timerSubject = new BehaviorSubject<Timer>(this.timer);

    let counterTimer$ = this.start().subscribe((_) => {
      //console.log("[x] tik.. ", this.timer);
      if (this.timer.days <= 0) {
          this.timer = {
            hours: 0,
            minutes: 0,
            seconds: '0',
            days: 0
          }
          counterTimer$.unsubscribe();
      }
    });

  }


  splitTime(numberOfHours: number){
    var Days=Math.floor(numberOfHours/24);
    var Remainder=numberOfHours % 24;
    var Hours=Math.floor(Remainder);
    var Minutes=Math.floor(60*(Remainder-Hours));
    return({"Days":Days,"Hours":Hours,"Minutes":Minutes})
  }

  addHours(numOfHours: number, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return date;
  }


  private updateTimer() {

    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();
    //console.log('[x] diff: ', diff);

    //var hours=27.3
    //var timeResult=splitTime(hours)
    //console.log("27.3 hours translate to  "+timeResult.Days+"Days "+timeResult.Hours+"Hours and "+timeResult.Minutes+"Minutes.")

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    
    const h = Math.floor(secs / 3600);
    const m = Math.floor(secs / 60) - (h * 60);
    const s = Math.floor(secs - h * 3600 - m * 60);

    const remainder = h % 24;
    const hrs = Math.floor(remainder);

    //console.log( `hours: ${hours} - mins: ${mins} secs: ${secs} - secs: ${s}` );
    //console.log( `hours: ${hrs} - mins: ${m} - secs: ${s}` );
    
    this.timer = {
      days: days,
      hours: hrs,
      minutes: m,
      seconds: (s < 10) ? `0${s}`: ''+s
    }
    this.timerSubject.next(this.timer);
  }

  private start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTimer();
        return x;
      })
    );
  }

  public getTimer$(): Observable<Timer> {
    //return of(this.timer);
    return this.timerSubject.asObservable();

  }

  public getFinishDate(): Date {
    return this.finishDate;
  }


}
