import { Component, ViewEncapsulation } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CouponDialogComponent } from '../../components/coupon-dialog';

@Component({
  selector: 'coupon',
  templateUrl: './coupon.page.html',
  styleUrls: [ './coupon.page.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class CouponPage {

  constructor(private dialog:MdDialog) {
  }

  onOpenDialog(){
    this.dialog.open(CouponDialogComponent);
  }

}
