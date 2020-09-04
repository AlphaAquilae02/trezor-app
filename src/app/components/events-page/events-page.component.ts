import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  showTable:boolean

  constructor(private data:DataService, private eventService:EventService) { }

  ngOnInit(): void {
    this.data.setSearchObject("desavanje")
    this.data.setSearchParams(["naziv", "aktivno"])
    this.data.setSearchLinkParam("naziv")
    this.data.setSearchTableHeadersParams({
      naziv: "Naziv",
      aktivno: "Status"
    })
    this.data.setTableData(this.eventService.getAllEvents())
    this.showTable = true
  }

}
