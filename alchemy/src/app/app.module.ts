import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componnet';
import { PotionsComponent } from './potions/potions.component';
import { PotionListComponent } from './potions/potion-list/potion-list.component';
import { PotionDetailComponent } from './potions/potion-detail/potion-detail.component';

import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { MerchantEditComponent } from './merchant-list/merchant-edit/merchant-edit.component';
import { PotionItemComponent } from './potions/potion-list/potion-item/potion-item.component';
import { PotionModel } from './potions/potion.model';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PotionsComponent,
    PotionListComponent,
    PotionDetailComponent,
    PotionItemComponent,
    MerchantListComponent,
    MerchantEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
