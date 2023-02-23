import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AjayComponent } from './ajay/ajay.component';
import { AjuComponent } from './aju/aju.component';
import { ButtonComponent } from './button/button.component';
import { AjjjjjComponent } from './ajjjjj/ajjjjj.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormvalComponent } from './formval/formval.component';
import { AlignComponent } from './align/align.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { MinMaxHgtWdtComponent } from './min-max-hgt-wdt/min-max-hgt-wdt.component';
import { DisplayComponent } from './display/display.component';
import { PositionComponent } from './position/position.component';
import { InlineblkComponent } from './inlineblk/inlineblk.component';
import { FloatComponent } from './float/float.component';
import { OverflowComponent } from './overflow/overflow.component';
import { ObjectFitComponent } from './object-fit/object-fit.component';
import { ObjectPositionComponent } from './object-position/object-position.component';
import { CssMulColmnsComponent } from './css-mul-colmns/css-mul-colmns.component';
import { CssMediaQueryyComponent } from './css-media-queryy/css-media-queryy.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CartpageComponent } from './cartpage/cartpage.component';

import { HomepageComponent } from './homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    AjayComponent,
    AjuComponent,
    ButtonComponent,
    AjjjjjComponent,
    FormvalComponent,
    AlignComponent,
    MarginComponent,
    PaddingComponent,
    MinMaxHgtWdtComponent,
    DisplayComponent,
    PositionComponent,
    InlineblkComponent,
    FloatComponent,
    OverflowComponent,
    ObjectFitComponent,
    ObjectPositionComponent,
    CssMulColmnsComponent,
    CssMediaQueryyComponent,
    ParentComponent,
    ChildComponent,
    CartpageComponent,
    
    HomepageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
