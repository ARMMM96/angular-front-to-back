import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

import { Post } from 'src/app/models/Posts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  constructor(private postService: PostService) {}
  ngOnInit(): void {}

  addPost(title: any, body: any) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe((post) => {
        console.log(post);
      });
    }
  }
}
