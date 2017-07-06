import { Component, ViewEncapsulation } from '@angular/core';
import { CarrotService } from '../../services/carrot.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'checkout',
  templateUrl: './checkout.page.html',
  styleUrls: [ './checkout.page.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutPage {

  constructor(private route:ActivatedRoute, private carrotService:CarrotService, private snackBar: MdSnackBar) {

  }

  submit(){
    this.snackBar.open('Order submitted', null, {
      duration: 1000,
    });
  }

}
