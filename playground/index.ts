/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgxDialogModule, DialogComponent }  from 'ngx-dialog';

@Component({
  selector: 'app',
  template: `
    <button (click)="showDialog()">Show Dialog</button>
    <button (click)="showDialogAsModal()">Show Dialog As Modal</button>
    <ngx-dialog size="l" #myDialog="dialog" (dialogClosed)="dialogClosedHandler($event)">
      <div class="dialog-header">Test Title</div>
      <div class="dialog-body">Test Description</div>
      <div class="dialog-footer"></div>
    </ngx-dialog>
  `
})
class AppComponent {
  @ViewChild('myDialog') myDialog: DialogComponent;
  showDialog() {
    this.myDialog.showDialog()
  }
  showDialogAsModal() {
    this.myDialog.closeDialog(); // this is to prevent errors when dialog is already opened (not as modal)
    this.myDialog.showAsModal();
  }

  dialogClosedHandler(returnValue) {
    console.log(returnValue);
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NgxDialogModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
