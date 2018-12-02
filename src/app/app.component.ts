import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  rightSideNav: boolean;
  mode = new FormControl('side');
  showSubmenu: false;

  constructor() { }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    if ((
      window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
    ) > this.showScrollHeight) {
      this.showScroll = true;
    } else if (
      this.showScroll && (
        window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
      ) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  ngOnInit(): void { }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
}
