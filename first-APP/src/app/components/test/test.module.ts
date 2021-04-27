import { TestComponent } from './test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule
  ],
  exports: [TestComponent]
})
export class TestModule { }
