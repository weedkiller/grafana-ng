import { Inject, Injectable } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BehaviorSubject } from 'rxjs';
import { AXIS_X } from '../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "common";
export class MouseStore {
    constructor(panel, time) {
        this.panel = panel;
        this.time = time;
        this._down = new BehaviorSubject(null);
        this.down$ = this._down.asObservable();
        this._up = new BehaviorSubject(null);
        this.up$ = this._up.asObservable();
        this.drag = new BehaviorSubject(null);
        this.drag$ = this.drag.asObservable();
        this.hover = new BehaviorSubject(null);
        this.hover$ = this.hover.asObservable();
    }
    get component() {
        var _a;
        return (_a = this
            .panel
            .widget) === null || _a === void 0 ? void 0 : _a.component;
    }
    get chart() {
        return this
            .component
            .control
            .chart;
    }
    down(s) {
        this.drag.next({
            start: s,
            end: s /*!? */
        });
        this._down.next(s);
        s.target.setPointerCapture(1);
    }
    up(e) {
        e.target.releasePointerCapture(1);
        this._up.next(e);
        this.zoomIn();
        this.drag.next(undefined);
        this.refresh();
    }
    move(m) {
        this.hover.next(m);
        const d = this.drag.value;
        if (!d) {
            return;
        }
        this.drag.next({
            start: d.start,
            end: m
        });
    }
    leave(e) {
        this.hover.next(undefined);
        this.refresh();
    }
    refresh() {
        this.component.control.refresh();
    }
    zoomIn() {
        const scaleX = this.chart.scales[AXIS_X];
        if (!this.drag.value.end) {
            return;
        }
        const sx = this.drag.value.start.offsetX;
        const ex = this.drag.value.end.offsetX;
        const start = Math.min(sx, ex);
        const end = Math.max(sx, ex);
        const os = Math.max(start, scaleX.left);
        const oe = Math.max(scaleX.left, Math.min(end, scaleX.right));
        if (Math.abs(os - oe) == 0) {
            return;
        }
        const from = scaleX.getValueForPixel(os);
        const to = scaleX.getValueForPixel(oe);
        const minsDiff = Math.abs(from.diff(to, "minutes"));
        if (minsDiff >= 1) {
            this.time.zoom({ from, to });
        }
    }
}
MouseStore.ɵfac = function MouseStore_Factory(t) { return new (t || MouseStore)(i0.ɵɵinject(PANEL_TOKEN), i0.ɵɵinject(i1.TimeRangeStore)); };
MouseStore.ɵprov = i0.ɵɵdefineInjectable({ token: MouseStore, factory: MouseStore.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MouseStore, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.TimeRangeStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Uuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL21vdXNlLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBUyxXQUFXLEVBQWtCLE1BQU0sUUFBUSxDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBUXBDLE1BQU0sT0FBTyxVQUFVO0lBNEJ0QixZQUMrQixLQUFZLEVBQ2xDLElBQW9CO1FBREUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQTVCckIsVUFBSyxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxVQUFLLEdBQTJCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFM0QsUUFBRyxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxRQUFHLEdBQTJCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdkQsU0FBSSxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxVQUFLLEdBQTJCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUQsVUFBSyxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxXQUFNLEdBQTJCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFvQnBFLENBQUM7SUFsQkQsSUFBSSxTQUFTOztRQUNaLGFBQU8sSUFBSTthQUNULEtBQUs7YUFDTCxNQUFNLDBDQUNM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RUFBRSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUV6QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBRSxDQUFFLENBQUM7UUFFeEQsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFFLENBQUE7U0FDN0I7SUFDRixDQUFDOztvRUE5R1csVUFBVSxjQTZCWixXQUFXO2tEQTdCVCxVQUFVLFdBQVYsVUFBVTtrREFBVixVQUFVO2NBRHRCLFVBQVU7O3NCQThCUixNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiwgVGltZVJhbmdlU3RvcmUgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBWElTX1ggfSBmcm9tICcuLi9jaGFydC5tJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmFnUmVnaW9ue1xuXHRzdGFydDogTW91c2VFdmVudDtcblx0ZW5kOiBNb3VzZUV2ZW50O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW91c2VTdG9yZSB7XG5cblx0cHJpdmF0ZSBfZG93bjogQmVoYXZpb3JTdWJqZWN0PE1vdXNlRXZlbnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0cmVhZG9ubHkgZG93biQ6IE9ic2VydmFibGU8TW91c2VFdmVudD4gPSB0aGlzLl9kb3duLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdHByaXZhdGUgX3VwOiBCZWhhdmlvclN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHRyZWFkb25seSB1cCQ6IE9ic2VydmFibGU8TW91c2VFdmVudD4gPSB0aGlzLl91cC5hc09ic2VydmFibGUoKTtcblxuXHRwcml2YXRlIGRyYWc6IEJlaGF2aW9yU3ViamVjdDxEcmFnUmVnaW9uPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IGRyYWckOiBPYnNlcnZhYmxlPERyYWdSZWdpb24+ID0gdGhpcy5kcmFnLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdHByaXZhdGUgaG92ZXI6IEJlaGF2aW9yU3ViamVjdDxNb3VzZUV2ZW50PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IGhvdmVyJDogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PiA9IHRoaXMuaG92ZXIuYXNPYnNlcnZhYmxlKCk7XG5cblx0Z2V0IGNvbXBvbmVudCgpe1xuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQucGFuZWxcblx0XHRcdC53aWRnZXRcblx0XHRcdD8uY29tcG9uZW50O1xuXHR9XG5cblx0Z2V0IGNoYXJ0KCl7XG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5jb21wb25lbnRcblx0XHRcdC5jb250cm9sXG5cdFx0XHQuY2hhcnQ7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggXG5cdFx0QEluamVjdCggUEFORUxfVE9LRU4gKSBwdWJsaWMgcGFuZWw6IFBhbmVsLFxuXHRcdHByaXZhdGUgdGltZTogVGltZVJhbmdlU3RvcmUgKXtcblx0XHRcblx0fVxuXG5cdGRvd24oIHM6IE1vdXNlRXZlbnQgKSAge1xuXHRcdHRoaXMuZHJhZy5uZXh0KCB7XG5cdFx0XHRzdGFydDogcyxcblx0XHRcdGVuZDogcy8qIT8gKi9cblx0XHR9ICk7XG5cblx0XHR0aGlzLl9kb3duLm5leHQoIHMgKTtcblxuXHRcdCg8YW55PnMudGFyZ2V0KS5zZXRQb2ludGVyQ2FwdHVyZSggMSApO1xuXHR9XG5cblx0dXAoIGU6IE1vdXNlRXZlbnQgKXtcblx0XHQoPGFueT5lLnRhcmdldCkucmVsZWFzZVBvaW50ZXJDYXB0dXJlKCAxICk7XG5cblx0XHR0aGlzLl91cC5uZXh0KCBlICk7XG5cblx0XHR0aGlzLnpvb21JbigpO1xuXG5cdFx0dGhpcy5kcmFnLm5leHQoIHVuZGVmaW5lZCApO1xuXG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRtb3ZlKCBtOiBNb3VzZUV2ZW50ICl7XG5cdFx0dGhpcy5ob3Zlci5uZXh0KCBtICk7XG5cblx0XHRjb25zdCBkID0gdGhpcy5kcmFnLnZhbHVlO1xuXG5cdFx0aWYoICFkICl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5kcmFnLm5leHQoIHtcblx0XHRcdHN0YXJ0OiBkLnN0YXJ0LFxuXHRcdFx0ZW5kOiBtXG5cdFx0fSApXG5cdH1cblxuXHRsZWF2ZSggZTogTW91c2VFdmVudCApe1xuXHRcdHRoaXMuaG92ZXIubmV4dCggdW5kZWZpbmVkICk7XG5cblx0XHR0aGlzLnJlZnJlc2goKTtcblx0fVxuXG5cdHByaXZhdGUgcmVmcmVzaCgpe1xuXHRcdHRoaXMuY29tcG9uZW50LmNvbnRyb2wucmVmcmVzaCgpO1xuXHR9XG5cblx0cHJpdmF0ZSB6b29tSW4oKXtcblx0XHRjb25zdCBzY2FsZVggPSB0aGlzLmNoYXJ0LnNjYWxlc1sgQVhJU19YIF07XG5cblx0XHRpZiggIXRoaXMuZHJhZy52YWx1ZS5lbmQgKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzeCA9IHRoaXMuZHJhZy52YWx1ZS5zdGFydC5vZmZzZXRYO1xuXHRcdGNvbnN0IGV4ID0gdGhpcy5kcmFnLnZhbHVlLmVuZC5vZmZzZXRYO1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSBNYXRoLm1pbiggc3gsIGV4ICk7XG5cdFx0Y29uc3QgZW5kID0gTWF0aC5tYXgoIHN4LCBleCApO1xuXG5cdFx0Y29uc3Qgb3MgPSBNYXRoLm1heCggc3RhcnQsIHNjYWxlWC5sZWZ0ICk7XG5cdFx0Y29uc3Qgb2UgPSBNYXRoLm1heCggc2NhbGVYLmxlZnQsXHRNYXRoLm1pbiggZW5kLCBzY2FsZVgucmlnaHQgKSk7XG5cblx0XHRpZiggTWF0aC5hYnMoIG9zIC0gb2UgKSA9PSAwICl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZnJvbSA9IHNjYWxlWC5nZXRWYWx1ZUZvclBpeGVsKCBvcyApO1xuXHRcdGNvbnN0IHRvID0gc2NhbGVYLmdldFZhbHVlRm9yUGl4ZWwoIG9lICk7XG5cblx0XHRjb25zdCBtaW5zRGlmZiA9IE1hdGguYWJzKCBmcm9tLmRpZmYoIHRvLCBcIm1pbnV0ZXNcIiApICk7XG5cblx0XHRpZiggbWluc0RpZmYgPj0gMSApe1xuXHRcdFx0dGhpcy50aW1lLnpvb20oIHsgZnJvbSwgdG99IClcblx0XHR9XG5cdH1cbn1cbiJdfQ==