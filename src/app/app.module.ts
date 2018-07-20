import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryService } from './category/category.service';
import { CategoryDetailService } from './category-detail/category-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CategoryService, CategoryDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
