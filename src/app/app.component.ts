import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Avery Fairbanks | Design & Development';

  firstPageInView: boolean = false
  secondPageInView: boolean = false;

  ngOnInit() {
    // @ts-ignore
    declare var particlesJS: any;
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let height = window.scrollY;
    console.log(height);
    if(height > 400) this.firstPageInView = true;
    else this.firstPageInView = false;

    if(height >= 1400) this.secondPageInView = true;
    else this.secondPageInView = false;
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}
