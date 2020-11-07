import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home.component';
import { AddappComponent } from './addapp/addapp.component';
import { ApproutingModule } from '../approuting/approuting.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HomeComponent,AddappComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ApproutingModule,
    MatButtonModule
    
  ]
})
export class HomeModule { }
