import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  data;

  constructor(
    private infoService: InfoService
  ) {
    this.data = infoService.getData();
  }

  ngOnInit() {
  }

}