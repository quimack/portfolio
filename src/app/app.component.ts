import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  @ViewChild('video') videoElement!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    //   this.restartVideo();
  }
}
