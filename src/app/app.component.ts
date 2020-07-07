import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './mobile-app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Avery Fairbanks | Design & Development';

  firstPageInView: boolean = false
  secondPageInView: boolean = false;
  thirdPageInView: boolean = false;
  mobile: boolean = false;
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  constructor(private http: HttpClient) {

    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      message: new FormControl('', Validators.required)
    });
  }

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    } else this.disabledSubmitButton = true;
  }

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.contactForm.value.name)
      .append('email', this.contactForm.value.email)
      .append('message', this.contactForm.value.message)
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {},
      err => {
        if (err instanceof ErrorEvent) {
          //client side error
          alert("Something went wrong when sending your message.");
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            alert("Your message has been sent!");
            this.contactForm.reset();
            this.disabledSubmitButton = true;
          } else {
            alert("Something went wrong when sending your message.");
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          };
        };
      }
    );
  };

  ngOnInit() {
    // @ts-ignore
    declare var particlesJS: any;
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });

    let width = window.innerWidth;
    if(innerWidth < 1280) this.mobile = true;
    else this.mobile = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let height = window.scrollY;
    console.log(height);
    if(height > 400) this.firstPageInView = true;
    else this.firstPageInView = false;

    if(height >= 1400 && !this.mobile) this.secondPageInView = true;
    else if(height > 800 && this.mobile) this.secondPageInView = true;
    else this.secondPageInView = false;

    if(height >= 2000 && !this.mobile) this.thirdPageInView = true;
    else if(height >= 1400 && this.mobile) this.thirdPageInView = true;
    else this.thirdPageInView = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let width = window.innerWidth;
    if(width < 1280) {
      this.mobile = true;
    }
    else {
      this.mobile = false;
    }
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}
