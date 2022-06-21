import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AlertService } from "./alert.service";

@Component({
  selector: "app-alert",
  templateUrl: "alert.component.html",
  styleUrls: ["alert.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  alert = this.alertService.get();

  constructor(private alertService: AlertService) {}

  onClose() {
    this.alertService.clear();
  }
}
