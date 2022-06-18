import { ChangeDetectionStrategy, Component } from '@angular/core';

type Route = {
  path: string;
  label: string;
};

@Component({
  selector: "app-navigation",
  templateUrl: "navigation.component.html",
  styleUrls: ["navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  routes: Route[] = [];
}
