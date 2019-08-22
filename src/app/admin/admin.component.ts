import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data;

  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit() {
    this.data = this.infoService.getData();
  }

  addHeadline(tempHeadline) {
    this.infoService.addHeadline(tempHeadline);
  }

  clear() {
    this.infoService.clearData();
    this.data = this.infoService.getData();
  }

}