import { Component } from '@angular/core';

@Component({
  selector: 'app-bpi-contributor',
  templateUrl: './bpi-contributor.component.html',
  styleUrls: ['./bpi-contributor.component.scss']
})
export class BpiContributorComponent {
public bpiList = [{
  name: "BPI",
  avg: "AVERAGE",
  per: "74%",
  gper: "95%"
},
{
  name: "QUALITY",
  avg: "AVERAGE",
  per: "74%",
  gper: "95%"
},
{
  name: "CYCLE TIME",
  avg: "AVERAGE",
  per: "73%",
  gper: "90%"
},
{
  name: "RM DOSING",
  avg: "AVERAGE",
  per: "73%",
  gper: "90%"
}]
}
