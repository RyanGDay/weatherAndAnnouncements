import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data;
  weatherDescriptions = ["Sunny", "Cloudy", "Rain", "Storms", "Windy"];

  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit() {
    this.data = this.infoService.getData();
  }

  addAnnouncement(tempAnnouncement) {
    this.infoService.addAnnouncement(tempAnnouncement);
  }

  clear() {
    this.infoService.clearData();
    this.data = this.infoService.getData();
  }

  clearAnnouncements() {
    this.infoService.clearAnnouncements();
    this.data = this.infoService.getData();
  }

}