import { Component, ViewEncapsulation } from '@angular/core';
import { CarrotService } from './services/carrot.service';
import { OverlayContainer } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor() {
  }

}
