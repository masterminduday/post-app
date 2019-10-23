import { Component, OnInit, Input } from '@angular/core';
import { post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  @Input() public post_id: number;
  postObject:post;
  postForm: FormGroup;
  submitted = false;
  constructor(private postService:PostService, private fb: FormBuilder,) { }
  
  ngOnInit() {
    this.postObject=new post();
    this.postForm = this.fb.group({
      post_id: [''],
      user_id: [''],
      post_title: ['', Validators.required],
      post_body: ['', Validators.required],
    });
    if (this.post_id == null || this.post_id == undefined) {
    }
    else
    {
      this.getPost();
    }
  }

  get f() { return this.postForm.controls; }
  getPost()
  {
      this.postService.getSpecificPost(this.post_id).subscribe((data:post)=>
      {
        if(data)
        {
          this.postObject=data;
        }
      });
  }

  savePost()
  {
    this.submitted = true;
    if(this.postForm.valid)
    {
      this.postService.addPost(this.postObject).subscribe(data=>{
        if(data)
        {
          console.log(data);
        }
        alert("Created.");
      });
    }
  }
}
