import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, AddEditPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
