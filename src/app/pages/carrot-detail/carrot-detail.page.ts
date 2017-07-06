import { Component, ViewEncapsulation } from '@angular/core';
import { CarrotService } from '../../services/carrot.service';
import { OverlayContainer } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'carrot-detail',
  templateUrl: './carrot-detail.page.html',
  styleUrls: [ './carrot-detail.page.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class CarrotDetailPage {

  isLoading:boolean;
  carrot:any;
  carrotId:number;

  constructor(private route:ActivatedRoute, private carrotService:CarrotService) {
    this.route.params.subscribe(params => {
      this.carrotId = params[ 'id' ];
      this.loadCarrot();
    });

  }

  loadCarrot() {
    this.isLoading = true;

    this.carrotService.getCarrots()
      .subscribe((carrots) => {
        this.isLoading = false;
        carrots.forEach((carrot) => {

          if ( carrot.id == this.carrotId ) {
            this.carrot = carrot;

          }

        });
      })

  }

}
