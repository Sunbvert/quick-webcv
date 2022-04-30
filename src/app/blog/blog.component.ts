import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CV } from '../interfaces';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private timelineService: TimelineService
  ) { }

  mdSrc: string | undefined;
  errMsg: string | undefined;
  title: string | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const mdPathFromRoute = String(routeParams.get('mdpath'));
    this.mdSrc = `assets/pages/${mdPathFromRoute}.md`;
    this.getProjectInfo(mdPathFromRoute);
  }

  onError(event: any): void {
    this.errMsg = `
      There is an error finding your markdown file. Please make sure you are providing the correct filename.
      ERROR: ${event.message}`;
  }

  getProjectInfo(page: string) {
    this.timelineService.getCV()
      .subscribe((data: CV) => {
        let projects = data.portfolio.projects;
        let project = projects.find(ele => ele.page === page)
        this.title = project?.title;
     });
  }
}
