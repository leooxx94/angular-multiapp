import { Component, AfterViewInit, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CassoniService } from './cassoni.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {

  receivedValue: string = '';
  
  @ViewChild('firstButton') firstButtonRef: ElementRef;
  constructor(private router: Router) {}

  ngAfterViewInit() {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const element = document.getElementById('componentContainer');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
        }
      });

      if (this.firstButtonRef && this.firstButtonRef.nativeElement) {
        this.firstButtonRef.nativeElement.blur();
    }
  }

  public navigaQuartecopie(): void {
    this.router.navigate(['/formulari'], { skipLocationChange: true });
  }
}
