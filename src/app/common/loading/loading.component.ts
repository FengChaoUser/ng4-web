import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() {
    this.closeLoad();
  }

  ngOnInit() {
  }
  closeLoad(){
    window.onload=function(){
      (<any>$('.loader')).hide();
    }
  }
}
