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
    announcements : ['Announcement Number One', 'Announcement Number Two', 'Announcement Number Three'],
    scroll : 'Scrolling Message......  Scrolling Message......... Scrolling Message...........'
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
      announcements : [],
      scroll : ''
    };
  }

  clearAnnouncements() {
    this.data.announcements = [];
  }
  
  addAnnouncement(announcement) {
    this.data.announcements.push(announcement);
  }

}