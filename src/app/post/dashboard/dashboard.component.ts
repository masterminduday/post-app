import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { post } from 'src/app/models/post';
import { AddEditPostComponent } from '../add-edit-post/add-edit-post.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('postcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  post_id:number
  constructor(private postService:PostService,private resolver: ComponentFactoryResolver) { }
  postList:post[];
  
  async ngOnInit() {
    await this.getAllPost();
  }

  async getAllPost()
  {
    this.postService.getPost().subscribe((data:post[])=>{
      if(data)
      {
        this.postList=data;
      }
    });
  }

  createModalComponent()
  {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(AddEditPostComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.post_id = this.post_id;
  }

  createAddModalComponent()
  {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(AddEditPostComponent);
    const componentRef = this.entry.createComponent(factory);
  }

  openAddModal()
  {
    this.createAddModalComponent();
  }
  openModal(id)
  {
    this.post_id=id;
    this.createModalComponent();
  }
}
