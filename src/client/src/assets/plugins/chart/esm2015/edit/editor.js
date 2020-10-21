import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
export class ChartEditorComponent {
    constructor() {
        this.tabs = [
            { text: 'General' },
            { text: 'Metrics', active: true },
            { text: 'Axes' }
        ];
    }
}
ChartEditorComponent.ɵfac = function ChartEditorComponent_Factory(t) { return new (t || ChartEditorComponent)(); };
ChartEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartEditorComponent, selectors: [["widget-editor"]], decls: 1, vars: 1, consts: [[3, "megatabs"]], template: function ChartEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "ed-tabstrip-editor", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("megatabs", ctx.tabs);
    } }, directives: [i1.TabStripEditorComponent], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.gf-tabs[_ngcontent-%COMP%]{float:left;position:relative;top:1px}.gf-tabs[_ngcontent-%COMP%]:after{clear:both;content:\"\";display:table}.gf-tabs-item[_ngcontent-%COMP%]{float:left;list-style:none}.gf-tabs-link[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:3px 3px 0 0;border-top:0 solid transparent;color:#d8d9da;display:block;margin-right:.5rem;padding:10px 15px 9px;position:relative}.gf-tabs-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.gf-tabs-link[_ngcontent-%COMP%]   .gicon[_ngcontent-%COMP%]{position:relative;top:-2px}.gf-tabs-link[_ngcontent-%COMP%]:focus, .gf-tabs-link[_ngcontent-%COMP%]:hover{color:#fff}.gf-tabs-link.active[_ngcontent-%COMP%], .gf-tabs-link.active[_ngcontent-%COMP%]:focus, .gf-tabs-link.active[_ngcontent-%COMP%]:hover{background:#161719;border-color:#eb7b18 #333 transparent;color:#e3e3e3;overflow:hidden}.gf-tabs-link.active[_ngcontent-%COMP%]:before, .gf-tabs-link.active[_ngcontent-%COMP%]:focus:before, .gf-tabs-link.active[_ngcontent-%COMP%]:hover:before{background-image:linear-gradient(90deg,#ffd500 0,#f40 99%,#f40);content:\" \";display:block;height:2px;left:0;position:absolute;right:0;top:0}.gf-tabs-link.active--panel[_ngcontent-%COMP%]{background:#212124!important}.tabbed-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.tabbed-view.tabbed-view--new[_ngcontent-%COMP%]{height:100%;padding:25px 0 0}.tabbed-view-header[_ngcontent-%COMP%]{border-bottom:1px solid #333;box-shadow:inset 0 -4px 14px #1f1f20}.tabbed-view-header[_ngcontent-%COMP%]:after{clear:both;content:\"\";display:table}.tabbed-view-title[_ngcontent-%COMP%]{float:left;margin:0 3rem 0 1rem;padding-top:.5rem}.tabbed-view-panel-title[_ngcontent-%COMP%]{float:left;margin:0 2rem 0 0;padding-top:9px}.tabbed-view-close-btn[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#d8d9da;float:right;margin:0;padding:10px 15px 9px}.tabbed-view-close-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:120%}.tabbed-view-close-btn[_ngcontent-%COMP%]:hover{color:#fff}.tabbed-view-body[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;padding:2rem 1rem 1rem}.tabbed-view-body--small[_ngcontent-%COMP%]{min-height:0;padding-bottom:0}.section-heading[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:.6rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartEditorComponent, [{
        type: Component,
        args: [{
                selector: 'widget-editor',
                templateUrl: './editor.html',
                styleUrls: ['./editor.scss']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9lZGl0b3IudHMiLCIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2VkaXRvci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVExQyxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CO1FBTEEsU0FBSSxHQUFHO1lBQ0wsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQzlCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztTQUNkLENBQUE7SUFJRixDQUFDOzt3RkFWVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1JqQyx3Q0FBMkQ7O1FBQXZDLG1DQUFpQjs7a0REUXhCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxlQUFlO2dCQUM1QixTQUFTLEVBQUMsQ0FBRSxlQUFlLENBQUU7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aWRnZXQtZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRvci5odG1sJyxcbiAgc3R5bGVVcmxzOlsgJy4vZWRpdG9yLnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuIFxuICB0YWJzID0gWyBcbiAgICB7dGV4dDonR2VuZXJhbCd9LFxuICAgIHt0ZXh0OidNZXRyaWNzJywgYWN0aXZlOiB0cnVlfSxcbiAgICB7dGV4dDogJ0F4ZXMnfVxuICAgXVxuICBjb25zdHJ1Y3RvcigpIHtcblxuICBcbiAgfVxufVxuIiwiPGVkLXRhYnN0cmlwLWVkaXRvciBbbWVnYXRhYnNdPVwidGFic1wiPjwvZWQtdGFic3RyaXAtZWRpdG9yPiJdfQ==