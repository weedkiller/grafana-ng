export declare const PANEL_TOKEN = "panel";
export interface ChartData {
    datasets: DataSet[];
}
export interface DataSet {
    label: string;
    data: DataPoint[];
    min?: number;
    max?: number;
    avg?: number;
    current?: number;
    allNulls?: boolean;
    allZeros?: boolean;
    index: number;
    fill?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    pointBorderColor?: string;
    pointBackgroundColor?: string;
    pointRadius?: number;
    steppedLine?: boolean;
    borderDash?: number[];
    order?: number;
    legend?: boolean;
}
export interface DataPoint {
    x?: number;
    y?: number;
    isNull: boolean;
}
export interface RGB {
    r: number;
    g: number;
    b: number;
}
//# sourceMappingURL=chart.m.d.ts.map