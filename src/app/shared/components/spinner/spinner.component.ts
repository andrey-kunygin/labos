import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'st-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() isLoading = true;
}
