import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, NavItem } from '@services/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuShow:boolean = false;
  private activeSiteSection: string;
  navLight:boolean = false;

  navItemList: Array<NavItem> = [];

  constructor(private router:Router, private navService:NavService) { 
    
    this.activeSiteSection = 'hero';

    this.navItemList = navService.getNavMenuItems();

    router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        //console.log('[x] router event -> ', event);
        this.siteURLActiveCheck(event);
      }
    });
  }

  ngOnInit(): void {

    this.navService.getActiveSection$().subscribe( x => {
      if (x !== '') {
        this.activeSiteSection = x;
        this.navLight = (x !== 'hero') ? true : false;
      }
    })
  }


  private siteURLActiveCheck(event: NavigationEnd) {

    //console.log('[x] event.url -> ', event.url);

    let url = event.url.replace('/#', '');
    
    //console.log('[x] url -> ', url);

    this.navLight = (url != 'hero') ? true : false;
    this.navLight = (url == '/') ? false : true;

    if (event.url.indexOf('#hero') !== -1) {
      this.navService.setActiveSection('hero');
    }
    
    if (event.url.indexOf('#event') !== -1) {
      this.navService.setActiveSection('event');      
    }

    if (event.url.indexOf('#schedule') !== -1) {
      this.navService.setActiveSection('schedule');
    }
    if (event.url.indexOf('#speakers') !== -1) {
      this.navService.setActiveSection('speakers');
    }
    if (event.url.indexOf('#cta') !== -1) {
      this.navService.setActiveSection('cta');
    }
  }


  toggleNavbar(){
    this.menuShow = !this.menuShow;
  }

  isSectionActive(section: string): boolean {
    //console.log('[x] section: ', section);
    return section === this.activeSiteSection;
  }

}
