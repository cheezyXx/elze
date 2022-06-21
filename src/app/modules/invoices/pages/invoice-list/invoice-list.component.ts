import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-invoice-list",
  templateUrl: "invoice-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceListComponent {}
