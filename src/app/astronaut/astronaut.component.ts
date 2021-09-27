import { Component, OnInit } from '@angular/core';
import {Astronaut} from '../models/astronaut';
import {AstronautService} from '../service/astronaut.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss']
})
export class AstronautComponent implements OnInit {

  astronauts: Astronaut[] = [];

  constructor(private astronautService: AstronautService) { }

  ngOnInit(): void {
    this.getAstronauts();
  }

  getAstronauts(): void {
    this.astronautService.getAstronauts().subscribe((astronauts) => {
      this.astronauts = astronauts;
    });
  }
}
