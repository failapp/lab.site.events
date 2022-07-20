import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NAV_DATA } from '@site/data/nav/nav.data';

export interface NavItem {
  label: string;
  route: string;
  btn?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private activeSectionSubject: BehaviorSubject<string>;
  private navList: Array<NavItem>;

  constructor(private httpClient:HttpClient) { 
    this.activeSectionSubject = new BehaviorSubject<string>('');
    this.navList = [...NAV_DATA];
  }

  public setActiveSection(section:string) {
    //console.log('[x] service: section -> ',section);
    this.activeSectionSubject.next(section);
  }

  public getActiveSection$(): Observable<string> {
    return this.activeSectionSubject.asObservable();
  }

  public getNavMenuItems() {
    return this.navList;
  }

}
