import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { NavService } from '@services/nav.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('hero') hero!: ElementRef;
  @ViewChild('event') event!: ElementRef;
  @ViewChild('schedule') schedule!: ElementRef;
  @ViewChild('speakers') speakers!: ElementRef;
  @ViewChild('cta') cta!: ElementRef;

  private observer!: IntersectionObserver;

  constructor(private navService:NavService) {          
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    const threshold = 0.5; // how much % of the element is in view
    const rootMargin = '0px 0px -50% px';

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          
          let elementId = entry.target.id;
          //console.log('id -> ', elementId);

          if (entry.isIntersecting) {
            //console.log(entry);
            this.navService.setActiveSection(elementId);
          }
        })
      },
      {
        threshold        
      }
    );
    
    this.observer.observe(this.hero.nativeElement);
    this.observer.observe(this.event.nativeElement);
    this.observer.observe(this.schedule.nativeElement);
    this.observer.observe(this.cta.nativeElement);
    this.observer.observe(this.speakers.nativeElement);

  }

  
  ngOnDestroy(): void {
    try {
      this.observer.disconnect();
    } catch (e) {
      console.error('[x] error: ', (e as Error).message);
    }
  }

}
