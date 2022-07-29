import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'st-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderComponent {
  @Input() error: boolean;
}
