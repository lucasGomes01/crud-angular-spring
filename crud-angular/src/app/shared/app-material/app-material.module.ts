import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class AppMaterialModule { }
