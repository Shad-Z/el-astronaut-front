import {Component, OnInit} from '@angular/core';
import {Astronaut} from '../models/astronaut';
import {AstronautService} from '../service/astronaut.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss']
})
export class AstronautComponent implements OnInit {

  astronauts$: Observable<Astronaut[]> = of([]);

  constructor(private astronautService: AstronautService) {}

  ngOnInit(): void {
    this.getAstronauts();
  }

  getAstronauts(): void {
    this.astronauts$ = this.astronautService.getAstronauts();
  }
}
