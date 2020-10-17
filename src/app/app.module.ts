import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomNodesComponent } from './custom-nodes/custom-nodes.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomNodesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
