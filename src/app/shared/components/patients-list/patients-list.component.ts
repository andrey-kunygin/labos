import { utils } from '../../../core';
import { PatientView } from '../../models/patients-view.model';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ListBase } from '../list-base';

@Component({
  selector: 'st-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsListComponent implements ListBase<PatientView> {
  readonly trackByFn = (index: number, item: PatientView) =>
    `${item.defaultId}.${item.isFavorite}` || index;
  readonly columns = [
    utils.nameOf<PatientView>('firstName'),
    utils.nameOf<PatientView>('lastName'),
    utils.nameOf<PatientView>('age'),
    utils.nameOf<PatientView>('isFavorite'),
  ];
  @Output() addToFavorite = new EventEmitter<PatientView>();
  @Output() removeFromFavorite = new EventEmitter<PatientView>();

  @Input() dataSource: PatientView[];
  @Input() error: boolean;
}
