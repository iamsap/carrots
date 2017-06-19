import { Component, ViewEncapsulation } from '@angular/core';
import { CarrotService } from './services/carrot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  isLoading:boolean;
  carrots:Array<any>;

  featuredCarrot:any;

  constructor(private carrotService:CarrotService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.carrotService.getCarrots()
      .subscribe((carrots) => {
        this.isLoading = false;
        this.carrots = carrots;
        this.featuredCarrot = carrots[ 0 ];
      })
  }

}
