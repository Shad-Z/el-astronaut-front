import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AstronautService} from '../../service/astronaut.service';

@Component({
  selector: 'app-astronaut-form',
  templateUrl: './astronaut-form.component.html',
  styleUrls: ['./astronaut-form.component.scss']
})
export class AstronautFormComponent implements OnInit {

  astronautForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  errors: [] = [];

  @Output() refreshList = new EventEmitter();

  constructor(private astronautService: AstronautService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.errors = [];
    this.astronautService.newAstronaut(this.astronautForm.value).subscribe((response) => {
      this.refreshList.emit();
    }, error => {
      this.errors = error.error;
    });
  }

}
