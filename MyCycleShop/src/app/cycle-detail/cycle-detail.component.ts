
import { Cycle } from '../cycle';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cycle-detail',
  templateUrl: './cycle-detail.component.html',
  styleUrls: ['./cycle-detail.component.css']
})
export class CycleDetailComponent {
  @Input() cycle?: Cycle;
}
