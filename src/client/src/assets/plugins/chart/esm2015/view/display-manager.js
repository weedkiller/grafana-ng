import { Inject, Injectable } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { AXIS_Y_LEFT, AXIS_Y_RIGHT, DataPointNullValueOption } from '../chart.m';
import { ColorHelper } from 'uilib';
import * as i0 from "@angular/core";
export class DisplayManager {
    constructor(panel) {
        this.panel = panel;
    }
    get display() {
        return this
            .panel
            .widget
            .display;
    }
    get options() {
        return this
            .panel
            .widget
            .component
            .control
            .chart
            .options;
    }
    setup(ds) {
        this.setupLines(ds);
        this.setupPoints(ds);
        this.setupNullValue(ds);
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
        ds.yAxisID = (1 == this.getYAxis(ds)) ? AXIS_Y_LEFT : AXIS_Y_RIGHT;
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
        switch (this.display.nullValue) {
            case DataPointNullValueOption.Connected:
                this.options.spanGaps = true;
                ds.data.forEach(p => p.y = p.isNull ? null : p.y);
                break;
            case DataPointNullValueOption.Null:
                this.options.spanGaps = false;
                ds.data.forEach(p => p.y = p.isNull ? null : p.y);
                break;
            case DataPointNullValueOption.NullAsZero:
                this.options.spanGaps = false;
                ds.data.forEach(p => p.y = p.isNull ? 0 : p.y);
                break;
        }
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
        const color = ColorHelper.colors[ds.index % ColorHelper.colors.length];
        const defaultColor = ColorHelper.hexToRgbString(color, opacity);
        const useOverride = (o && undefined != o.color);
        let overrideColor;
        if (useOverride) {
            overrideColor = ColorHelper.hexToRgbString(o.color, opacity);
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
        return this.getOverrideByLabel(ds.label);
    }
    getOverrideByLabel(label) {
        return this
            .display
            .overrides
            .find(x => x.alias && new RegExp(x.alias).test(label));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9kaXNwbGF5LW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBVyxNQUFNLFlBQVksQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sT0FBTyxDQUFDOztBQUlwQyxNQUFNLE9BQU8sY0FBYztJQW1CMUIsWUFBNkMsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFFekQsQ0FBQztJQW5CRCxJQUFZLE9BQU87UUFDbEIsT0FBTyxJQUFJO2FBQ1QsS0FBSzthQUNMLE1BQU07YUFDTixPQUFPLENBQUM7SUFDWCxDQUFDO0lBRUQsSUFBWSxPQUFPO1FBQ2xCLE9BQU8sSUFBSTthQUNULEtBQUs7YUFDTCxNQUFNO2FBQ04sU0FBUzthQUNULE9BQU87YUFDUCxLQUFLO2FBQ0wsT0FBTyxDQUFDO0lBQ1gsQ0FBQztJQU1ELEtBQUssQ0FBQyxFQUFXO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUUsRUFBRSxDQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFFLEVBQUUsQ0FBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxVQUFVLENBQUUsRUFBVztRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQzFDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUUsRUFBRSxDQUFFLENB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U0FBUyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxTQUFTLENBQUUsRUFBVztRQUNyQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFELENBQUM7SUFFRCxhQUFhLENBQUUsRUFBVztRQUN6QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxZQUFZLENBQUUsRUFBVztRQUN4QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxhQUFhLENBQUUsRUFBVztRQUN6QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRWpDLE9BQU8sQ0FBRSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDNUUsQ0FBQztJQUVELGNBQWMsQ0FBRSxFQUFXO1FBQzFCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFakMsT0FBTyxDQUFFLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUN2RixDQUFDO0lBRUQsU0FBUyxDQUFFLEVBQVc7UUFDckIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVqQyxPQUFPLENBQUUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDO0lBRUQsU0FBUyxDQUFFLEVBQVc7UUFDckIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVqQyxPQUFPLENBQUUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsUUFBUSxDQUFFLEVBQVc7UUFDcEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVqQyxPQUFPLENBQUUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsV0FBVyxDQUFFLEVBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxrQkFBa0IsQ0FBRSxLQUFhO1FBQ2hDLE9BQU8sSUFBSTthQUNULE9BQU87YUFDUCxTQUFTO2FBQ1QsSUFBSSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBRSxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFHLENBQUE7SUFDL0QsQ0FBQzs7NEVBM0xXLGNBQWMsY0FtQkgsV0FBVztzREFuQnRCLGNBQWMsV0FBZCxjQUFjO2tEQUFkLGNBQWM7Y0FEMUIsVUFBVTs7c0JBb0JLLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBBWElTX1lfTEVGVCwgQVhJU19ZX1JJR0hULCBEYXRhUG9pbnROdWxsVmFsdWVPcHRpb24sIERhdGFTZXQgfSBmcm9tICcuLi9jaGFydC5tJztcclxuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICd1aWxpYic7XHJcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vb3B0aW9ucy1wcm92aWRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaXNwbGF5TWFuYWdlciB7XHJcblxyXG5cdHByaXZhdGUgZ2V0IGRpc3BsYXkoKSB7XHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0XHQucGFuZWxcclxuXHRcdFx0LndpZGdldFxyXG5cdFx0XHQuZGlzcGxheTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0IG9wdGlvbnMoKXtcclxuXHRcdHJldHVybiB0aGlzXHJcblx0XHRcdC5wYW5lbFxyXG5cdFx0XHQud2lkZ2V0XHJcblx0XHRcdC5jb21wb25lbnRcclxuXHRcdFx0LmNvbnRyb2xcclxuXHRcdFx0LmNoYXJ0XHJcblx0XHRcdC5vcHRpb25zO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IgKCBASW5qZWN0KCBQQU5FTF9UT0tFTiApIHByaXZhdGUgcGFuZWw6IFBhbmVsICkge1xyXG5cclxuXHR9XHJcblxyXG5cdHNldHVwKGRzOiBEYXRhU2V0KSB7XHJcblx0XHR0aGlzLnNldHVwTGluZXMoIGRzICk7XHJcblx0XHR0aGlzLnNldHVwUG9pbnRzKCBkcyApO1xyXG5cdFx0dGhpcy5zZXR1cE51bGxWYWx1ZSggZHMgKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0dXBMaW5lcyggZHM6IERhdGFTZXQgKSB7XHJcblx0XHRjb25zdCBzaG93TGluZXMgPSB0aGlzLmdldFNob3dMaW5lcyggZHMgKTtcclxuXHRcdGNvbnN0IGxpbmVXaWR0aCA9IHRoaXMuZ2V0TGluZVdpZHRoKCBkcyApO1xyXG5cdFx0Y29uc3QgZmlsbCA9IHRoaXMuZ2V0RmlsbCggZHMgKTtcclxuXHJcblx0XHRsZXQgb3BhY2l0eSA9ICggZmlsbCAvIDEwKTtcclxuXHRcdGRzLmZpbGwgPSAoLypzaG93TGluZXMgJiYqLyBmaWxsID4gMCk7XHJcblx0XHRkcy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmdldExpbmVDb2xvciggZHMsIG9wYWNpdHkgKTtcclxuXHJcblx0XHRvcGFjaXR5ID0gKHNob3dMaW5lcyAmJiBsaW5lV2lkdGgpID8gMSA6IDA7XHJcblx0XHRkcy5ib3JkZXJDb2xvciA9IHRoaXMuZ2V0TGluZUNvbG9yKCBkcywgb3BhY2l0eSApO1xyXG5cdFx0ZHMuYm9yZGVyV2lkdGggPSBsaW5lV2lkdGg7XHJcblxyXG5cdFx0IGRzLnN0ZXBwZWRMaW5lID0gdGhpcy5nZXRTdGFpcmNhc2UoIGRzICk7XHJcblxyXG5cdFx0aWYoIHRoaXMuZ2V0RGFzaGVzKCBkcyApICl7XHJcblx0XHRcdGNvbnN0IGxlbiA9IHRoaXMuZ2V0RGFzaExlbmd0aCggZHMgKTtcclxuXHRcdFx0Y29uc3Qgc3BhY2UgPSB0aGlzLmdldERhc2hTcGFjZSggZHMgKTtcclxuXHRcdFx0ZHMuYm9yZGVyRGFzaCA9IFsgbGVuLCBzcGFjZSBdXHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRkcy5ib3JkZXJEYXNoID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRzLm9yZGVyID0gdGhpcy5nZXRaSW5kZXgoIGRzICk7XHJcblx0XHRkcy5sZWdlbmQgPSB0aGlzLmdldExlZ2VuZCggZHMgKTtcclxuXHJcblx0XHRkcy55QXhpc0lEID0gKCAxID09IHRoaXMuZ2V0WUF4aXMoIGRzICkgKSA/XHRBWElTX1lfTEVGVDogQVhJU19ZX1JJR0hUO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZXR1cFBvaW50cyggZHM6IERhdGFTZXQgKSB7XHJcblx0XHRjb25zdCBzaG93UG9pbnRzID0gdGhpcy5nZXRTaG93UG9pbnRzKCBkcyApO1xyXG5cclxuXHRcdGNvbnN0IG9wYWNpdHkgPSBzaG93UG9pbnRzID8gMSA6IDBcclxuXHRcdGNvbnN0IGNvbG9yID0gdGhpcy5nZXRMaW5lQ29sb3IoIGRzLCBvcGFjaXR5ICk7XHJcblxyXG5cdFx0ZHMucG9pbnRCb3JkZXJDb2xvciA9IGAke2NvbG9yfWA7XHJcblx0XHRkcy5wb2ludEJhY2tncm91bmRDb2xvciA9IGAke2NvbG9yfWA7XHJcblxyXG5cdFx0ZHMucG9pbnRSYWRpdXMgPSBzaG93UG9pbnRzID8gdGhpcy5nZXRQb2ludFJhZGl1cyggZHMgKSA6IDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNldHVwTnVsbFZhbHVlKCBkczogRGF0YVNldCApIHtcclxuXHRcdHN3aXRjaCAoIHRoaXMuZGlzcGxheS5udWxsVmFsdWUpIHtcclxuXHRcdFx0Y2FzZSBEYXRhUG9pbnROdWxsVmFsdWVPcHRpb24uQ29ubmVjdGVkOlxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5zcGFuR2FwcyA9IHRydWU7XHJcblx0XHRcdFx0ZHMuZGF0YS5mb3JFYWNoKCBwID0+IHAueSA9IHAuaXNOdWxsID8gbnVsbCA6IHAueSApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBEYXRhUG9pbnROdWxsVmFsdWVPcHRpb24uTnVsbDpcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuc3BhbkdhcHMgPSBmYWxzZTtcclxuXHRcdFx0XHRkcy5kYXRhLmZvckVhY2goIHAgPT4gcC55ID0gcC5pc051bGwgPyBudWxsIDogcC55ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIERhdGFQb2ludE51bGxWYWx1ZU9wdGlvbi5OdWxsQXNaZXJvOlxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5zcGFuR2FwcyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRzLmRhdGEuZm9yRWFjaCggcCA9PiBwLnkgPSBwLmlzTnVsbCA/IDAgOiBwLnkgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFNob3dMaW5lcyhkczogRGF0YVNldCk6IGJvb2xlYW57XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLmxpbmVzICkgPyBvLmxpbmVzIDogdGhpcy5kaXNwbGF5LnNob3dMaW5lcztcclxuXHR9XHJcblx0XHJcblx0Z2V0TGluZVdpZHRoKGRzOiBEYXRhU2V0KTogbnVtYmVye1xyXG5cdFx0Y29uc3QgbyA9IHRoaXMuZ2V0T3ZlcnJpZGUoIGRzICk7XHJcblxyXG5cdFx0cmV0dXJuICggbyAmJiB1bmRlZmluZWQgIT0gby5saW5lV2lkdGggKSA/IG8ubGluZVdpZHRoIDogdGhpcy5kaXNwbGF5LmxpbmVXaWR0aDtcclxuXHR9XHJcblxyXG5cdGdldExpbmVDb2xvcihkczogRGF0YVNldCwgb3BhY2l0eTogbnVtYmVyKSA6IHN0cmluZ3tcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yID0gQ29sb3JIZWxwZXIuY29sb3JzW2RzLmluZGV4ICUgQ29sb3JIZWxwZXIuY29sb3JzLmxlbmd0aF07XHJcblx0XHRjb25zdCBkZWZhdWx0Q29sb3IgPSBDb2xvckhlbHBlci5oZXhUb1JnYlN0cmluZyggY29sb3IsIG9wYWNpdHkgKTtcclxuXHJcblx0XHRjb25zdCB1c2VPdmVycmlkZSA9ICggbyAmJiB1bmRlZmluZWQgIT0gby5jb2xvciApXHJcblx0XHRsZXQgb3ZlcnJpZGVDb2xvcjogc3RyaW5nO1xyXG5cclxuXHRcdGlmKCB1c2VPdmVycmlkZSApe1xyXG5cdFx0XHRvdmVycmlkZUNvbG9yID0gQ29sb3JIZWxwZXIuaGV4VG9SZ2JTdHJpbmcoIG8uY29sb3IsIG9wYWNpdHkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKCB1c2VPdmVycmlkZSApID8gb3ZlcnJpZGVDb2xvciA6IGRlZmF1bHRDb2xvcjtcclxuXHR9XHJcblxyXG5cdGdldEZpbGwoIGRzOiBEYXRhU2V0ICk6IG51bWJlcntcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdHJldHVybiAoIG8gJiYgdW5kZWZpbmVkICE9IG8ubGluZUZpbGwgKSA/IG8ubGluZUZpbGwgOiB0aGlzLmRpc3BsYXkuZmlsbDtcclxuXHR9XHJcblxyXG5cdGdldFN0YWlyY2FzZSggZHM6IERhdGFTZXQgKTogYm9vbGVhbntcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdHJldHVybiAoIG8gJiYgdW5kZWZpbmVkICE9IG8uc3RhaXJjYXNlICkgPyBvLnN0YWlyY2FzZSA6IHRoaXMuZGlzcGxheS5zdGFpcmNhc2U7XHJcblx0fVxyXG5cclxuXHRnZXREYXNoZXMoIGRzOiBEYXRhU2V0ICl7XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLmRhc2hlcyApID8gby5kYXNoZXMgOiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGdldERhc2hMZW5ndGgoIGRzOiBEYXRhU2V0ICk6IG51bWJlcntcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdHJldHVybiAoIG8gJiYgdW5kZWZpbmVkICE9IG8uZGFzaExlbmd0aCApID8gby5kYXNoTGVuZ3RoIDogMTtcclxuXHR9XHJcblxyXG5cdGdldERhc2hTcGFjZSggZHM6IERhdGFTZXQgKTogbnVtYmVye1xyXG5cdFx0Y29uc3QgbyA9IHRoaXMuZ2V0T3ZlcnJpZGUoIGRzICk7XHJcblxyXG5cdFx0cmV0dXJuICggbyAmJiB1bmRlZmluZWQgIT0gby5kYXNoU3BhY2UgKSA/IG8uZGFzaFNwYWNlIDogMTtcclxuXHR9XHJcblxyXG5cdGdldFNob3dQb2ludHMoIGRzOiBEYXRhU2V0ICkgOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdHJldHVybiAoIG8gJiYgdW5kZWZpbmVkICE9IG8ucG9pbnRzICkgPyBvLnBvaW50cyA6IHRoaXMuZGlzcGxheS5zaG93UG9pbnRzO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9pbnRSYWRpdXMoIGRzOiBEYXRhU2V0ICkgOiBudW1iZXJ7XHJcblx0XHRjb25zdCBvID0gdGhpcy5nZXRPdmVycmlkZSggZHMgKTtcclxuXHJcblx0XHRyZXR1cm4gKCBvICYmIHVuZGVmaW5lZCAhPSBvLnBvaW50UmFkaXVzICkgPyBvLnBvaW50UmFkaXVzIDogdGhpcy5kaXNwbGF5LnBvaW50UmFkaXVzO1xyXG5cdH1cclxuXHJcblx0Z2V0TGVnZW5kKCBkczogRGF0YVNldCApIDogYm9vbGVhbntcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdHJldHVybiAoIG8gJiYgdW5kZWZpbmVkICE9IG8ubGVnZW5kICkgPyBvLmxlZ2VuZCA6IHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXRaSW5kZXgoIGRzOiBEYXRhU2V0ICk6IG51bWJlcntcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdHJldHVybiAoIG8gJiYgdW5kZWZpbmVkICE9IG8uekluZGV4ICkgPyBvLnpJbmRleCA6IDA7XHJcblx0fVxyXG5cclxuXHRnZXRZQXhpcyggZHM6IERhdGFTZXQgKXtcclxuXHRcdGNvbnN0IG8gPSB0aGlzLmdldE92ZXJyaWRlKCBkcyApO1xyXG5cclxuXHRcdHJldHVybiAoIG8gJiYgdW5kZWZpbmVkICE9IG8ueUF4aXMgKSA/IG8ueUF4aXMgOiAxO1xyXG5cdH1cclxuXHJcblx0Z2V0T3ZlcnJpZGUoIGRzOiBEYXRhU2V0ICl7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRPdmVycmlkZUJ5TGFiZWwoIGRzLmxhYmVsICk7XHJcblx0fVxyXG5cclxuXHRnZXRPdmVycmlkZUJ5TGFiZWwoIGxhYmVsOiBzdHJpbmcgKXtcclxuXHRcdHJldHVybiB0aGlzXHJcblx0XHRcdC5kaXNwbGF5XHJcblx0XHRcdC5vdmVycmlkZXNcclxuXHRcdFx0LmZpbmQoIHggPT4geC5hbGlhcyAmJiBuZXcgUmVnRXhwKCB4LmFsaWFzICkudGVzdCggbGFiZWwgKSAgKVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=