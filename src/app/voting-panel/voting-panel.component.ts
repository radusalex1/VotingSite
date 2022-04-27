import { VoterComponent } from './../voter/voter.component';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
@Component({
  selector: 'app-voting-panel',
  templateUrl: './voting-panel.component.html',
  styleUrls: ['./voting-panel.component.scss']
})
export class VotingPanelComponent implements OnInit {

  constructor() {  }

  @ViewChildren(VoterComponent) VoterComponentList !: QueryList<VoterComponent>;

  voters=[
    {id:1,name:'Mr.IQ'},
    {id:2,name:'Ms.Universe'},
    {id:3,name:'Bombasto'},
    {id:4,name:'Batman'}
  ]

  AgreedVoters:number=0;
  DisagreedVoters:number=0;

  clickedResetVotes:boolean=false;

  ImplementAgree(agree:number){
    this.AgreedVoters=agree;
  }
  ImplementDisagree(disagree:number){
    this.DisagreedVoters=disagree;
  }

  ngOnInit(): void {  }

  ResetVotes(){

    this.AgreedVoters=0;
    this.DisagreedVoters=0;
    this.CallMyChild();
  }
  CallMyChild(){
      this.VoterComponentList.forEach(element=>{
        element.callMe(element.code);
      })
  }
}

