import {Routes} from '@angular/router';

export const content: Routes = [
  {
    path: 'sample',
    loadChildren: './components/sample/sample.module#SampleModule'
  }
];
