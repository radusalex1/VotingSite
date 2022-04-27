import { Component, Input, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  constructor() { }

  @Input() name: string = "placeholder";
  @Input() agreedVotesInput: number = 0;
  @Input() disagreedVotesInput: number = 0;
  @Input() code:number=-1;

  @Output() agreedVotes = new EventEmitter<number>();
  @Output() disagreedVotes = new EventEmitter<number>();

  @Input() clickedAgree: boolean = false;
  @Input() clickDisagree: boolean = false;


  ngOnInit(): void { }

  Vote(value:boolean)
  {
    this.clickDisagree=true;
    this.clickedAgree=true;

    if(value)
    {
      this.agreedVotesInput += 1;
      this.agreedVotes.emit(this.agreedVotesInput);
    }
    else
    {
      this.disagreedVotesInput += 1;
      this.disagreedVotes.emit(this.disagreedVotesInput);
    }
  }

  callMe(value:number)
  {
    this.clickDisagree=false;
    this.clickedAgree=false;
  }

}
