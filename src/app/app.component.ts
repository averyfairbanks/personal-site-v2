import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Avery Fairbanks | Design & Development';

  firstPageInView: boolean = false
  secondPageInView: boolean = false;
  thirdPageInView: boolean = false;
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  constructor(private fb: FormBuilder) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
    });
  }

  ngOnInit() {
    // @ts-ignore
    declare var particlesJS: any;
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    } else this.disabledSubmitButton = true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let height = window.scrollY;
    console.log(height);
    if(height > 400) this.firstPageInView = true;
    else this.firstPageInView = false;

    if(height >= 1400) this.secondPageInView = true;
    else this.secondPageInView = false;

    if(height >= 2300) this.thirdPageInView = true;
    else this.thirdPageInView = false;
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}
