import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  
  constructor(private taskser:TasksService) { 
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
 
  }

  ngOnInit(): void {

    this.taskser.GetRequest();
    this.Clients=["ABC Infotech Ltd.","DEF Software Solutions","GHI Industries"];
    this.Projects=["Project A","Project B","Project C","Project D"];
    for(var i=2019;i>2010;i--){
      this.Years.push(i);
    }
    this.TeamMembersSummary=[
      {
        Region:"East",TeamMemberWiseCount:20,TemporalyUnavailablemember:4
    },{
      Region:"West",TeamMemberWiseCount:21,TemporalyUnavailablemember:5

    },{
      Region:"South",TeamMemberWiseCount:15,TemporalyUnavailablemember:8

    },{
      Region:"North",TeamMemberWiseCount:22,TemporalyUnavailablemember:6

    }]
  }
  onProjectChange($event:any){

    console.log($event.target.innerHTML);

    if($event.target.innerHTML=='Project A'){
      this.ProjectCost = 2113;
      this.CurrentExpenditure = 96;
      this.AvailableFunds = 525; 
    }
  }

  

}
