import { Inject, Injectable } from '@angular/core';
import { PANEL_TOKEN } from '../../chart.m';
import { ColorHelper } from './color-helper';
import * as i0 from "@angular/core";
export class DisplayManager {
    constructor(panel) {
        this.panel = panel;
    }
    get display() {
        return this.panel.widget.display;
    }
    setup(ds) {
        //this.setupSecondaryYAxis();					
        this.setupLines(ds);
        this.setupPoints(ds);
        this.setupNullValue(ds);
        //this.chart.options.scales.yAxes[ 0 ].stacked = this.chart.widget.display.stack;
    }
    setupLines(ds) {
        const showLines = this.getShowLines(ds);
        const lineWidth = this.getLineWidth(ds);
        const fill = this.getFill(ds);
        let opacity = (fill / 10);
        ds.fill = ( /*showLines &&*/fill > 0);
        ds.backgroundColor = this.getLineColor(ds, opacity);
        opacity = (showLines && lineWidth) ? 1 : 0;
        ds.borderColor = this.getLineColor(ds, opacity);
        ds.borderWidth = lineWidth;
        ds.steppedLine = this.getStaircase(ds);
        if (this.getDashes(ds)) {
            const len = this.getDashLength(ds);
            const space = this.getDashSpace(ds);
            ds.borderDash = [len, space];
        }
        else {
            ds.borderDash = undefined;
        }
        ds.order = this.getZIndex(ds);
        ds.legend = this.getLegend(ds);
        // ds.yAxisID = ( 1 == this.getYAxis( ds ) ) ? 'A': 'B';
    }
    setupPoints(ds) {
        const showPoints = this.getShowPoints(ds);
        const opacity = showPoints ? 1 : 0;
        const color = this.getLineColor(ds, opacity);
        ds.pointBorderColor = `${color}`;
        ds.pointBackgroundColor = `${color}`;
        ds.pointRadius = showPoints ? this.getPointRadius(ds) : 0;
    }
    setupNullValue(ds) {
        switch (parseInt(this.display.nullValue)) {
            // case CartesianChart.NullValue.Connected:
            // 	this.chart.options.spanGaps = true;
            // 	ds.data.forEach( p => p.y = p.isNull ? null : p.y );
            // 	break;
            // case CartesianChart.NullValue.Null:
            // 	this.chart.options.spanGaps = false;
            // 	ds.data.forEach( p => p.y = p.isNull ? null : p.y );
            // 	break;
            // case CartesianChart.NullValue.NullAsZero:
            // 	this.chart.options.spanGaps = false;
            // 	ds.data.forEach( p => p.y = p.isNull ? 0 : p.y );
            // 	break;
        }
    }
    setupOverrides() {
        // const needSecondaryYAxis = AxesManager.needSecondaryYAxis( this.chart.widget );
        // const actualSecondaryYAxisUsers = this
        // 	.datasets
        // 	.filter( x => x.yAxisID == 'B' )
        // 	.length
        // const yAxesCount = this.chart.options.scales.yAxes.length;
        // if( 2 == yAxesCount && !needSecondaryYAxis ){
        // 	this.chart.options.scales.yAxes.splice( 1, 1 );
        // } else if( /*1 == yAxesCount && needSecondaryYAxis*/ actualSecondaryYAxisUsers != needSecondaryYAxis ){
        // 	this.chart.destroy();
        // 	this.chart.needRebuild.emit();
        // 	this.chart = undefined;
        // 	return;
        // }
        // this.datasets.forEach(x => this.setup(x));
    }
    getShowLines(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lines) ? o.lines : this.display.showLines;
    }
    getLineWidth(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lineWidth) ? o.lineWidth : this.display.lineWidth;
    }
    getLineColor(ds, opacity) {
        const o = this.getOverride(ds);
        const defaultColor = ColorHelper.getColorAsArgbFunc(ds, opacity);
        const useOverride = (o && undefined != o.color);
        let overrideColor;
        if (useOverride) {
            var color = ColorHelper.parse(o.color);
            overrideColor = `rgba(${color.r},${color.g},${color.b},${opacity})`;
        }
        return (useOverride) ? overrideColor : defaultColor;
    }
    getFill(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lineFill) ? o.lineFill : this.display.fill;
    }
    getStaircase(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.staircase) ? o.staircase : this.display.staircase;
    }
    getDashes(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashes) ? o.dashes : false;
    }
    getDashLength(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashLength) ? o.dashLength : 1;
    }
    getDashSpace(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashSpace) ? o.dashSpace : 1;
    }
    getShowPoints(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.points) ? o.points : this.display.showPoints;
    }
    getPointRadius(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.pointRadius) ? o.pointRadius : this.display.pointRadius;
    }
    getLegend(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.legend) ? o.legend : true;
    }
    getZIndex(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.zIndex) ? o.zIndex : 0;
    }
    getYAxis(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.yAxis) ? o.yAxis : 1;
    }
    getOverride(ds) {
        return this
            .display
            .overrides
            .find(x => x.alias && new RegExp(x.alias).test(ds.label));
    }
}
DisplayManager.ɵfac = function DisplayManager_Factory(t) { return new (t || DisplayManager)(i0.ɵɵinject(PANEL_TOKEN)); };
DisplayManager.ɵprov = i0.ɵɵdefineInjectable({ token: DisplayManager, factory: DisplayManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DisplayManager, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9yZW5kZXIvZGlzcGxheS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBVyxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUc3QyxNQUFNLE9BQU8sY0FBYztJQU0xQixZQUE2QyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUUxRCxDQUFDO0lBTkQsSUFBWSxPQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFNRCxLQUFLLENBQUMsRUFBVztRQUNoQixrQ0FBa0M7UUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFMUIsaUZBQWlGO0lBQ2xGLENBQUM7SUFFTyxVQUFVLENBQUUsRUFBVztRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQzFDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUUsRUFBRSxDQUFFLENBQUM7UUFDMUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVoQyxJQUFJLE9BQU8sR0FBRyxDQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUMsZ0JBQWlCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBRXRELE9BQU8sR0FBRyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFFLEVBQUUsRUFBRSxPQUFPLENBQUUsQ0FBQztRQUNsRCxFQUFFLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUUxQixFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFMUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFFLEVBQUUsQ0FBRSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUUsRUFBRSxDQUFFLENBQUM7WUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBRSxFQUFFLENBQUUsQ0FBQztZQUN0QyxFQUFFLENBQUMsVUFBVSxHQUFHLENBQUUsR0FBRyxFQUFFLEtBQUssQ0FBRSxDQUFBO1NBQzlCO2FBQ0c7WUFDSCxFQUFFLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUMxQjtRQUVELEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNoQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFakMsd0RBQXdEO0lBQ3pELENBQUM7SUFFTyxXQUFXLENBQUUsRUFBVztRQUMvQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRTVDLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBRSxFQUFFLEVBQUUsT0FBTyxDQUFFLENBQUM7UUFFL0MsRUFBRSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDakMsRUFBRSxDQUFDLG9CQUFvQixHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFFckMsRUFBRSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUUsRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8sY0FBYyxDQUFFLEVBQVc7UUFDbEMsUUFBUSxRQUFRLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUUsRUFBRTtZQUMzQywyQ0FBMkM7WUFDM0MsdUNBQXVDO1lBQ3ZDLHdEQUF3RDtZQUN4RCxVQUFVO1lBRVYsc0NBQXNDO1lBQ3RDLHdDQUF3QztZQUN4Qyx3REFBd0Q7WUFDeEQsVUFBVTtZQUVWLDRDQUE0QztZQUM1Qyx3Q0FBd0M7WUFDeEMscURBQXFEO1lBQ3JELFVBQVU7U0FDVjtJQUNGLENBQUM7SUFFTyxjQUFjO1FBQ3JCLGtGQUFrRjtRQUVsRix5Q0FBeUM7UUFDekMsYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxXQUFXO1FBRVgsNkRBQTZEO1FBRTdELGdEQUFnRDtRQUNoRCxtREFBbUQ7UUFDbkQsMEdBQTBHO1FBQzFHLHlCQUF5QjtRQUN6QixrQ0FBa0M7UUFDbEMsMkJBQTJCO1FBQzNCLFdBQVc7UUFDWCxJQUFJO1FBRUosNkNBQTZDO0lBQzlDLENBQUM7SUFFRCxZQUFZLENBQUMsRUFBVztRQUN2QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFXO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFakMsT0FBTyxDQUFFLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNqRixDQUFDO0lBRUQsWUFBWSxDQUFDLEVBQVcsRUFBRSxPQUFlO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFakMsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUVoRSxNQUFNLFdBQVcsR0FBRyxDQUFFLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFBO1FBQ2pELElBQUksYUFBcUIsQ0FBQztRQUUxQixJQUFJLFdBQVcsRUFBRTtZQUNoQixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUN6QyxhQUFhLEdBQUcsUUFBUSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQTtTQUNuRTtRQUVELE9BQU8sQ0FBRSxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDdkQsQ0FBQztJQUVELE9BQU8sQ0FBRSxFQUFXO1FBQ25CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFakMsT0FBTyxDQUFFLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDO0lBRUQsWUFBWSxDQUFFLEVBQVc7UUFDeEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVqQyxPQUFPLENBQUUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxTQUFTLENBQUUsRUFBVztRQUNyQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFELENBQUM7SUFFRCxhQUFhLENBQUUsRUFBVztRQUN6QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxZQUFZLENBQUUsRUFBVztRQUN4QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxhQUFhLENBQUUsRUFBVztRQUN6QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDNUUsQ0FBQztJQUVELGNBQWMsQ0FBRSxFQUFXO1FBQzFCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFakMsT0FBTyxDQUFFLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUN2RixDQUFDO0lBRUQsU0FBUyxDQUFFLEVBQVc7UUFDckIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVqQyxPQUFPLENBQUUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDO0lBRUQsU0FBUyxDQUFFLEVBQVc7UUFDckIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVqQyxPQUFPLENBQUUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsUUFBUSxDQUFFLEVBQVc7UUFDcEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVqQyxPQUFPLENBQUUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsV0FBVyxDQUFFLEVBQVc7UUFDdkIsT0FBTyxJQUFJO2FBQ1QsT0FBTzthQUNQLFNBQVM7YUFDVCxJQUFJLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFFLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFHLENBQUE7SUFDbEUsQ0FBQzs7NEVBcE1XLGNBQWMsY0FNSCxXQUFXO3NEQU50QixjQUFjLFdBQWQsY0FBYztrREFBZCxjQUFjO2NBRDFCLFVBQVU7O3NCQU9LLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUGFuZWwgfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBEYXRhU2V0LCBQQU5FTF9UT0tFTiB9IGZyb20gJy4uLy4uL2NoYXJ0Lm0nO1xyXG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4vY29sb3ItaGVscGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpc3BsYXlNYW5hZ2VyIHtcclxuXHJcblx0cHJpdmF0ZSBnZXQgZGlzcGxheSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhbmVsLndpZGdldC5kaXNwbGF5O1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IgKCBASW5qZWN0KCBQQU5FTF9UT0tFTiApIHByaXZhdGUgcGFuZWw6IElQYW5lbCApIHtcclxuXHJcblx0fVxyXG5cclxuXHRzZXR1cChkczogRGF0YVNldCkge1xyXG5cdFx0Ly90aGlzLnNldHVwU2Vjb25kYXJ5WUF4aXMoKTtcdFx0XHRcdFx0XHJcblxyXG5cdFx0dGhpcy5zZXR1cExpbmVzKCBkcyApO1xyXG5cdFx0dGhpcy5zZXR1cFBvaW50cyggZHMgKTtcclxuXHRcdHRoaXMuc2V0dXBOdWxsVmFsdWUoIGRzICk7XHJcblxyXG5cdFx0Ly90aGlzLmNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWyAwIF0uc3RhY2tlZCA9IHRoaXMuY2hhcnQud2lkZ2V0LmRpc3BsYXkuc3RhY2s7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNldHVwTGluZXMoIGRzOiBEYXRhU2V0ICkge1xyXG5cdFx0Y29uc3Qgc2hvd0xpbmVzID0gdGhpcy5nZXRTaG93TGluZXMoIGRzICk7XHJcblx0XHRjb25zdCBsaW5lV2lkdGggPSB0aGlzLmdldExpbmVXaWR0aCggZHMgKTtcclxuXHRcdGNvbnN0IGZpbGwgPSB0aGlzLmdldEZpbGwoIGRzICk7XHJcblxyXG5cdFx0bGV0IG9wYWNpdHkgPSAoIGZpbGwgLyAxMCk7XHJcblx0XHRkcy5maWxsID0gKC8qc2hvd0xpbmVzICYmKi8gZmlsbCA+IDApO1xyXG5cdFx0ZHMuYmFja2dyb3VuZENvbG9yID0gdGhpcy5nZXRMaW5lQ29sb3IoIGRzLCBvcGFjaXR5ICk7XHJcblxyXG5cdFx0b3BhY2l0eSA9IChzaG93TGluZXMgJiYgbGluZVdpZHRoKSA/IDEgOiAwO1xyXG5cdFx0ZHMuYm9yZGVyQ29sb3IgPSB0aGlzLmdldExpbmVDb2xvciggZHMsIG9wYWNpdHkgKTtcclxuXHRcdGRzLmJvcmRlcldpZHRoID0gbGluZVdpZHRoO1xyXG5cclxuXHRcdCBkcy5zdGVwcGVkTGluZSA9IHRoaXMuZ2V0U3RhaXJjYXNlKCBkcyApO1xyXG5cclxuXHRcdGlmKCB0aGlzLmdldERhc2hlcyggZHMgKSApe1xyXG5cdFx0XHRjb25zdCBsZW4gPSB0aGlzLmdldERhc2hMZW5ndGgoIGRzICk7XHJcblx0XHRcdGNvbnN0IHNwYWNlID0gdGhpcy5nZXREYXNoU3BhY2UoIGRzICk7XHJcblx0XHRcdGRzLmJvcmRlckRhc2ggPSBbIGxlbiwgc3BhY2UgXVxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0ZHMuYm9yZGVyRGFzaCA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHRkcy5vcmRlciA9IHRoaXMuZ2V0WkluZGV4KCBkcyApO1xyXG5cdFx0ZHMubGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoIGRzICk7XHJcblxyXG5cdFx0Ly8gZHMueUF4aXNJRCA9ICggMSA9PSB0aGlzLmdldFlBeGlzKCBkcyApICkgPyAnQSc6ICdCJztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0dXBQb2ludHMoIGRzOiBEYXRhU2V0ICkge1xyXG5cdFx0Y29uc3Qgc2hvd1BvaW50cyA9IHRoaXMuZ2V0U2hvd1BvaW50cyggZHMgKTtcclxuXHJcblx0XHRjb25zdCBvcGFjaXR5ID0gc2hvd1BvaW50cyA/IDEgOiAwXHJcblx0XHRjb25zdCBjb2xvciA9IHRoaXMuZ2V0TGluZUNvbG9yKCBkcywgb3BhY2l0eSApO1xyXG5cclxuXHRcdGRzLnBvaW50Qm9yZGVyQ29sb3IgPSBgJHtjb2xvcn1gO1xyXG5cdFx0ZHMucG9pbnRCYWNrZ3JvdW5kQ29sb3IgPSBgJHtjb2xvcn1gO1xyXG5cclxuXHRcdGRzLnBvaW50UmFkaXVzID0gc2hvd1BvaW50cyA/IHRoaXMuZ2V0UG9pbnRSYWRpdXMoIGRzICkgOiAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZXR1cE51bGxWYWx1ZSggZHM6IERhdGFTZXQgKSB7XHJcblx0XHRzd2l0Y2ggKHBhcnNlSW50KCB0aGlzLmRpc3BsYXkubnVsbFZhbHVlICkpIHtcclxuXHRcdFx0Ly8gY2FzZSBDYXJ0ZXNpYW5DaGFydC5OdWxsVmFsdWUuQ29ubmVjdGVkOlxyXG5cdFx0XHQvLyBcdHRoaXMuY2hhcnQub3B0aW9ucy5zcGFuR2FwcyA9IHRydWU7XHJcblx0XHRcdC8vIFx0ZHMuZGF0YS5mb3JFYWNoKCBwID0+IHAueSA9IHAuaXNOdWxsID8gbnVsbCA6IHAueSApO1xyXG5cdFx0XHQvLyBcdGJyZWFrO1xyXG5cclxuXHRcdFx0Ly8gY2FzZSBDYXJ0ZXNpYW5DaGFydC5OdWxsVmFsdWUuTnVsbDpcclxuXHRcdFx0Ly8gXHR0aGlzLmNoYXJ0Lm9wdGlvbnMuc3BhbkdhcHMgPSBmYWxzZTtcclxuXHRcdFx0Ly8gXHRkcy5kYXRhLmZvckVhY2goIHAgPT4gcC55ID0gcC5pc051bGwgPyBudWxsIDogcC55ICk7XHJcblx0XHRcdC8vIFx0YnJlYWs7XHJcblxyXG5cdFx0XHQvLyBjYXNlIENhcnRlc2lhbkNoYXJ0Lk51bGxWYWx1ZS5OdWxsQXNaZXJvOlxyXG5cdFx0XHQvLyBcdHRoaXMuY2hhcnQub3B0aW9ucy5zcGFuR2FwcyA9IGZhbHNlO1xyXG5cdFx0XHQvLyBcdGRzLmRhdGEuZm9yRWFjaCggcCA9PiBwLnkgPSBwLmlzTnVsbCA/IDAgOiBwLnkgKTtcclxuXHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0dXBPdmVycmlkZXMoKXtcclxuXHRcdC8vIGNvbnN0IG5lZWRTZWNvbmRhcnlZQXhpcyA9IEF4ZXNNYW5hZ2VyLm5lZWRTZWNvbmRhcnlZQXhpcyggdGhpcy5jaGFydC53aWRnZXQgKTtcclxuXHJcblx0XHQvLyBjb25zdCBhY3R1YWxTZWNvbmRhcnlZQXhpc1VzZXJzID0gdGhpc1xyXG5cdFx0Ly8gXHQuZGF0YXNldHNcclxuXHRcdC8vIFx0LmZpbHRlciggeCA9PiB4LnlBeGlzSUQgPT0gJ0InIClcclxuXHRcdC8vIFx0Lmxlbmd0aFxyXG4gXHJcblx0XHQvLyBjb25zdCB5QXhlc0NvdW50ID0gdGhpcy5jaGFydC5vcHRpb25zLnNjYWxlcy55QXhlcy5sZW5ndGg7XHJcblx0XHRcclxuXHRcdC8vIGlmKCAyID09IHlBeGVzQ291bnQgJiYgIW5lZWRTZWNvbmRhcnlZQXhpcyApe1xyXG5cdFx0Ly8gXHR0aGlzLmNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzLnNwbGljZSggMSwgMSApO1xyXG5cdFx0Ly8gfSBlbHNlIGlmKCAvKjEgPT0geUF4ZXNDb3VudCAmJiBuZWVkU2Vjb25kYXJ5WUF4aXMqLyBhY3R1YWxTZWNvbmRhcnlZQXhpc1VzZXJzICE9IG5lZWRTZWNvbmRhcnlZQXhpcyApe1xyXG5cdFx0Ly8gXHR0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuXHRcdC8vIFx0dGhpcy5jaGFydC5uZWVkUmVidWlsZC5lbWl0KCk7XHJcblx0XHQvLyBcdHRoaXMuY2hhcnQgPSB1bmRlZmluZWQ7XHJcblx0XHQvLyBcdHJldHVybjtcclxuXHRcdC8vIH1cclxuXHJcblx0XHQvLyB0aGlzLmRhdGFzZXRzLmZvckVhY2goeCA9PiB0aGlzLnNldHVwKHgpKTtcclxuXHR9XHJcblxyXG5cdGdldFNob3dMaW5lcyhkczogRGF0YVNldCk6IGJvb2xlYW57XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLmxpbmVzICkgPyBvLmxpbmVzIDogdGhpcy5kaXNwbGF5LnNob3dMaW5lcztcclxuXHR9XHJcblx0XHJcblx0Z2V0TGluZVdpZHRoKGRzOiBEYXRhU2V0KTogbnVtYmVye1xyXG5cdFx0Y29uc3QgbyA9IHRoaXMuZ2V0T3ZlcnJpZGUoIGRzICk7XHJcblxyXG5cdFx0cmV0dXJuICggbyAmJiB1bmRlZmluZWQgIT0gby5saW5lV2lkdGggKSA/IG8ubGluZVdpZHRoIDogdGhpcy5kaXNwbGF5LmxpbmVXaWR0aDtcclxuXHR9XHJcblxyXG5cdGdldExpbmVDb2xvcihkczogRGF0YVNldCwgb3BhY2l0eTogbnVtYmVyKSA6IHN0cmluZ3tcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdGNvbnN0IGRlZmF1bHRDb2xvciA9IENvbG9ySGVscGVyLmdldENvbG9yQXNBcmdiRnVuYyhkcywgb3BhY2l0eSlcclxuXHJcblx0XHRjb25zdCB1c2VPdmVycmlkZSA9ICggbyAmJiB1bmRlZmluZWQgIT0gby5jb2xvciApXHJcblx0XHRsZXQgb3ZlcnJpZGVDb2xvcjogc3RyaW5nO1xyXG5cclxuXHRcdGlmKCB1c2VPdmVycmlkZSApe1xyXG5cdFx0XHR2YXIgY29sb3IgPSBDb2xvckhlbHBlci5wYXJzZSggby5jb2xvciApO1xyXG5cdFx0XHRvdmVycmlkZUNvbG9yID0gYHJnYmEoJHtjb2xvci5yfSwke2NvbG9yLmd9LCR7Y29sb3IuYn0sJHtvcGFjaXR5fSlgXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICggdXNlT3ZlcnJpZGUgKSA/IG92ZXJyaWRlQ29sb3IgOiBkZWZhdWx0Q29sb3I7XHJcblx0fVxyXG5cclxuXHRnZXRGaWxsKCBkczogRGF0YVNldCApOiBudW1iZXJ7XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLmxpbmVGaWxsICkgPyBvLmxpbmVGaWxsIDogdGhpcy5kaXNwbGF5LmZpbGw7XHJcblx0fVxyXG5cclxuXHRnZXRTdGFpcmNhc2UoIGRzOiBEYXRhU2V0ICk6IGJvb2xlYW57XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLnN0YWlyY2FzZSApID8gby5zdGFpcmNhc2UgOiB0aGlzLmRpc3BsYXkuc3RhaXJjYXNlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGFzaGVzKCBkczogRGF0YVNldCApe1xyXG5cdFx0Y29uc3QgbyA9IHRoaXMuZ2V0T3ZlcnJpZGUoIGRzICk7XHJcblxyXG5cdFx0cmV0dXJuICggbyAmJiB1bmRlZmluZWQgIT0gby5kYXNoZXMgKSA/IG8uZGFzaGVzIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXREYXNoTGVuZ3RoKCBkczogRGF0YVNldCApOiBudW1iZXJ7XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLmRhc2hMZW5ndGggKSA/IG8uZGFzaExlbmd0aCA6IDE7XHJcblx0fVxyXG5cclxuXHRnZXREYXNoU3BhY2UoIGRzOiBEYXRhU2V0ICk6IG51bWJlcntcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdHJldHVybiAoIG8gJiYgdW5kZWZpbmVkICE9IG8uZGFzaFNwYWNlICkgPyBvLmRhc2hTcGFjZSA6IDE7XHJcblx0fVxyXG5cclxuXHRnZXRTaG93UG9pbnRzKCBkczogRGF0YVNldCApIDogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLnBvaW50cyApID8gby5wb2ludHMgOiB0aGlzLmRpc3BsYXkuc2hvd1BvaW50cztcclxuXHR9XHJcblxyXG5cdGdldFBvaW50UmFkaXVzKCBkczogRGF0YVNldCApIDogbnVtYmVye1xyXG5cdFx0Y29uc3QgbyA9IHRoaXMuZ2V0T3ZlcnJpZGUoIGRzICk7XHJcblxyXG5cdFx0cmV0dXJuICggbyAmJiB1bmRlZmluZWQgIT0gby5wb2ludFJhZGl1cyApID8gby5wb2ludFJhZGl1cyA6IHRoaXMuZGlzcGxheS5wb2ludFJhZGl1cztcclxuXHR9XHJcblxyXG5cdGdldExlZ2VuZCggZHM6IERhdGFTZXQgKSA6IGJvb2xlYW57XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLmxlZ2VuZCApID8gby5sZWdlbmQgOiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0WkluZGV4KCBkczogRGF0YVNldCApOiBudW1iZXJ7XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLnpJbmRleCApID8gby56SW5kZXggOiAwO1xyXG5cdH1cclxuXHJcblx0Z2V0WUF4aXMoIGRzOiBEYXRhU2V0ICl7XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLnlBeGlzICkgPyBvLnlBeGlzIDogMTtcclxuXHR9XHJcblxyXG5cdGdldE92ZXJyaWRlKCBkczogRGF0YVNldCApe1xyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHRcdFx0LmRpc3BsYXlcclxuXHRcdFx0Lm92ZXJyaWRlc1xyXG5cdFx0XHQuZmluZCggeCA9PiB4LmFsaWFzICYmIG5ldyBSZWdFeHAoIHguYWxpYXMgKS50ZXN0KCBkcy5sYWJlbCApICApXHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=