import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

import { Post } from 'src/app/models/Posts';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  currentPost: Post = {
    id: 0,
    title: '',
    body: '',
  };

  isEdit: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }
  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }
}
