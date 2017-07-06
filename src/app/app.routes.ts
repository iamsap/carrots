// Angular
import { Routes, RouterModule } from '@angular/router';

// DashBid
import { CarrotDetailPage } from './pages/carrot-detail';
import { CheckoutPage } from './pages/checkout';
import { CouponPage } from './pages/coupon';
import { HomePage } from './pages/home';

export const ROUTES:Routes = [
  {
    path: '',
    component: HomePage
  },
  {path: 'checkout', component: CheckoutPage},
  {path: 'carrots/:id', component: CarrotDetailPage},
  {path: 'coupon', component: CouponPage}
];
