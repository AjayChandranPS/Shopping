import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjayComponent } from './ajay/ajay.component';
import { AjuComponent } from './aju/aju.component';
import { ButtonComponent } from './button/button.component';
import { AjjjjjComponent } from './ajjjjj/ajjjjj.component';
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

const routes: Routes = [
  {path:"login",loadChildren:()=>import('././login/login.module').then(m=>m.LoginModule)},
  {path:"ajay",component:AjayComponent},
  {path:"aju",component:AjuComponent},
  {path:"button",component:ButtonComponent},
  {path:"ajjjjj",component:AjjjjjComponent},
  {path:"formval",component:FormvalComponent},
  {path:"align",component:AlignComponent},
  {path:"margin",component:MarginComponent},  
  {path:"padding",component:PaddingComponent},
  {path:"min-max-hgt-wdt",component:MinMaxHgtWdtComponent},
  {path:"display",component:DisplayComponent},
  {path:"position",component:PositionComponent},
  {path:"inlineblk",component:InlineblkComponent},
  {path:"float",component:FloatComponent},
  {path:"overflow",component:OverflowComponent},
  {path:"object-fit",component:ObjectFitComponent},
  {path:"object-position",component:ObjectPositionComponent},
  {path:"css-mul-colmns",component:CssMulColmnsComponent},
  {path:"css-media-queryy",component:CssMediaQueryyComponent},
  {path:"parent",component:ParentComponent},
  {path:"child",component: ChildComponent},
  {path:"cartpage",component:CartpageComponent},
  
  {path:"homepage",component:HomepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
