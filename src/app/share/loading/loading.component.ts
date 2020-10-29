import {Component, Input, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: []
})
export class LoadingComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() opreation: string;
  constructor() { }

  ngOnInit() {
  }

}
