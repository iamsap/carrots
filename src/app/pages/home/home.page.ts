import { Component, ViewEncapsulation } from '@angular/core';
import { CarrotService } from '../../services/carrot.service';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: [ './home.page.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

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
