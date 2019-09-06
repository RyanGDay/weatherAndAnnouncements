import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  data;
  isMobile;
  mobileWidthMeasuringStick = 600;

  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit() {
    this.data = this.infoService.getData();
    this.isMobile = window.innerWidth <= this.mobileWidthMeasuringStick;
    window.onresize = () => this.isMobile = window.innerWidth <= this.mobileWidthMeasuringStick;
  }

}