import { Component, OnInit } from '@angular/core';
import { Cycle } from '../cycle';
// import { CYCLES } from '../mock-cycles';
import {HttpClient} from '@angular/common/http' ;

import { CycleService } from '/home/pwd/MyCycleShop/src/app/cycle.service';
import { concatMapTo } from 'rxjs';
@Component({
  selector: 'app-cycle-list',
  templateUrl: './cycle-list.component.html',
  styleUrls: ['./cycle-list.component.css']
})


export class CycleListComponent implements OnInit{

  cycles: Cycle[] = [];

selectedCycleId: number = 0;

 

constructor(private cycleService: CycleService) {}

// constructor( private http: HttpClient){
// }
ngOnInit(){
this.fetchCycles();

}
onBorrow() {
  // const val = 0;
  console.log(this.selectedCycleId);
  
  if(this.selectedCycleId > 0){
    this.cycleService.borrowCycle(this.selectedCycleId, 1).subscribe(() => {

      alert('Cycle borrowed successfully');

      this.fetchCycles();

    });
   
  }
  else{
    alert('Please select a cycle to borrow.');
  }
  }
onReturn(){
  if (this.selectedCycleId > 0) {

    this.cycleService.returnCycle(this.selectedCycleId, 1).subscribe(() => {

      alert('Cycle returned successfully');

      this.fetchCycles();

    });

  } else {

    alert('Please select a cycle to return.');

  }
}

fetchCycles(){


  this.cycleService.listAvailableCycles().subscribe((data) => {

    this.cycles = data;

  });
}
  
}


