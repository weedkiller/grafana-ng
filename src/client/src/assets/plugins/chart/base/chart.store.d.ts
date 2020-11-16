import { DashboardStore, Panel, AnnotationStore } from 'common';
import { Observable, Subscription } from 'rxjs';
import { Chart, DataSet } from '../chart.m';
import { DataProvider } from '../data/data-provider';
import { DisplayManager } from '../view/display-manager';
import { MouseStore } from './mouse.store';
import * as i0 from "@angular/core";
export declare class ChartStore {
    private dashboardStore;
    dataProvider: DataProvider;
    display: DisplayManager;
    annotationStore: AnnotationStore;
    mouse: MouseStore;
    panel: Panel;
    private data;
    readonly data$: Observable<DataSet[]>;
    dashboardId: number;
    dashboardSubs: Subscription;
    annotSubs: Subscription;
    get widget(): Chart;
    constructor(dashboardStore: DashboardStore, dataProvider: DataProvider, display: DisplayManager, annotationStore: AnnotationStore, mouse: MouseStore, panel: Panel);
    destroy(): void;
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChartStore, never>;
    static ɵprov: i0.ɵɵInjectableDef<ChartStore>;
}
//# sourceMappingURL=chart.store.d.ts.map