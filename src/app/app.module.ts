import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NumberPickerModule} from 'ng-number-picker';

import { AppComponent } from './app.component';
import { InfoService } from './info.service';
import { AdminComponent } from './admin/admin.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NumberPickerModule,
    RouterModule.forRoot([
      { path: '', component: DisplayComponent },
      { path: 'info', component: DisplayComponent },
      { path: 'admin', component: AdminComponent }
    ])
   ],
  declarations: [ AppComponent, AdminComponent, DisplayComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InfoService],
  exports: [RouterModule]
})
export class AppModule { }
