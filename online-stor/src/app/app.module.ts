import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductFilterPipe } from './shared/pipes/product-filter-pipe/product-filter.pipe';
import { SortPipe } from './shared/pipes/sort-pipe/sort.pipe';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SortByAddedToBasketPipe } from './shared/pipes/sort-by-added-to-basket/sort-by-added-to-basket.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    SortPipe,
    MainPageComponent,
    AuthPageComponent,
    ProductPageComponent,
    ProfilePageComponent,
    BasketPageComponent,
    HeaderComponent,
    FooterComponent,
    SortByAddedToBasketPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
