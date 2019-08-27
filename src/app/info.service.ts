import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  data = {
    weather: { 
      description : 'Sunny',
      temperature : '85',
      percentageRain : 5
    },
    headlines : ['Cubs win 2016 World Series', 'Bernie Sanders wins election', 'Marty McFly hooks up with his mother'],
    scroll : 'TEST......  TEST ......... TEST .........'
  };

  getData() {
    return this.data;
  }

  clearData() {
    this.data = {
      weather: { 
        description : '',
        temperature : '',
        percentageRain : null
      },
      headlines : [],
      scroll : ''
    };
  }

  clearHeadlines() {
    this.data.headlines = [];
  }
  
  addHeadline(headline) {
    this.data.headlines.push(headline);
  }

}