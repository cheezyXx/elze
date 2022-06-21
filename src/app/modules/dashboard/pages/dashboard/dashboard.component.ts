import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {

  ngOnInit() {
    console.log("Init called");
  }

  ngOnDestroy() {
    console.log("I am destroyed");
  }
}
