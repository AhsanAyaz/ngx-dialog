import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/index';
import { DialogService } from './services/index';

export * from './components/index';
export * from './services/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DialogComponent
  ],
  exports: [
    DialogComponent
  ]
})
export class NgxDialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDialogModule,
      providers: [DialogService]
    };
  }
}
