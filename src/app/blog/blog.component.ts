import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  mdSrc: string | undefined;
  errMsg: string | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const mdPathFromRoute = String(routeParams.get('mdpath'));
    this.mdSrc = `assets/pages/${mdPathFromRoute}.md`;
  }

  onError(event: any): void {
    this.errMsg = `
      There is an error finding your markdown file. Please make sure you are providing the correct filename.
      ERROR: ${event.message}`;
  }

}
