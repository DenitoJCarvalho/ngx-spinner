import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent } from './ngx-spinner.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [NgxSpinnerComponent, SafeHtmlPipe],
  exports: [NgxSpinnerComponent]
})
export class NgxSpinnerModule { }
