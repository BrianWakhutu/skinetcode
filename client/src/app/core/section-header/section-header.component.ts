import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  constructor(private bcService: BreadcrumbService) { }

  breadcrumb$: Observable<any[]>;

  ngOnInit() {
    this.breadcrumb$ = this.bcService.breadcrumbs$;
  }

}
