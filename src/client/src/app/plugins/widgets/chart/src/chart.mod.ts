import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartModule } from 'primeng/chart';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { AlertEditorComponent } from './edit/alert/alert';
import { AlertConfigEditorComponent } from './edit/alert/config/alert-config';
import { AlertConditionEditorComponent } from './edit/alert/config/conditions/cond';
import { AlertQueryParamPickerComponent } from './edit/alert/config/conditions/query/param/param';
import { AlertQueryEditorComponent } from './edit/alert/config/conditions/query/query';
import { AlertHandleComponent } from './edit/alert/handle/handle';
import { AlertHistoryEditorComponent } from './edit/alert/history/alert-history';
import { AlertNotificationsEditorComponent } from './edit/alert/notifications/alert-nots';
import { AxesEditorComponent } from './edit/axes/axes';
import { AxisXEditorComponent } from './edit/axes/x-axis/x-axis';
import { AxisYEditorComponent } from './edit/axes/y-axis/y-axis';
import { DisplayEditorComponent } from './edit/display/display';
import { DrawOptionsEditorComponent } from './edit/display/draw-options/options';
import { SeriesOverrideEditorComponent } from './edit/display/series-overrides/override';
import { SeriesOverridesEditorComponent } from './edit/display/series-overrides/overrides';
import { ThresholdEditorComponent } from './edit/display/thresholds/threshold';
import { ThresholdsEditorComponent } from './edit/display/thresholds/thresholds';
import { TimeRegionEditorComponent } from './edit/display/time-regions/time-region';
import { TimeRegionsEditorComponent } from './edit/display/time-regions/time-regions';
import { ChartEditorComponent } from './edit/editor';
import { LegendEditorComponent } from './edit/legend/legend';
import { TimeEditorComponent } from './edit/time/time';

import { AnnotationDispatcherComponent } from './view/annotations/annotations';
import { EditAnnotationComponent } from './view/annotations/edit/edit-annot';
import { AnnotationHintComponent } from './view/annotations/hint/annot-hint';

import { ChartLegendComponent } from './view/legend/legend';

@NgModule({
  declarations: [
    ChartComponent,
    ChartEditorComponent,

    ChartLegendComponent,

    AxesEditorComponent,
    AxisXEditorComponent,
    AxisYEditorComponent,

    LegendEditorComponent,

    DisplayEditorComponent,
    DrawOptionsEditorComponent,

    ThresholdsEditorComponent,
    ThresholdEditorComponent,

    SeriesOverridesEditorComponent,
    SeriesOverrideEditorComponent,
    
    TimeRegionsEditorComponent,
    TimeRegionEditorComponent,

    TimeEditorComponent,

    AlertEditorComponent,
    AlertConfigEditorComponent,
    AlertConditionEditorComponent,
    AlertQueryEditorComponent,
    AlertQueryParamPickerComponent,
    AlertHistoryEditorComponent,
    AlertNotificationsEditorComponent,
    AlertHandleComponent,

    AnnotationDispatcherComponent,
    EditAnnotationComponent,
    AnnotationHintComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,

    EdCommonModule,
    EdUilibModule,
    PerfectScrollbarModule
  ],
  exports: [
    ChartComponent,
    ChartEditorComponent
  ],
 
 
})
export class ChartWidgetModule { }
