export interface WidgetBase {
    label: string;
    order: number;
    icon: string | null;
    link: string | null;
}

export interface WidgetQuickButton extends WidgetBase {

}

export interface WidgetStatus extends WidgetBase {
    type: string;
    totalCount: number;    
    categories?: Map<string, { count: number } & WidgetBase>;
}

export interface WidgetChart extends WidgetBase {
    width: string;
    height: string;
    innerText?: string;
    labels: Array<string>;
    datasets: Array<Dataset>;
    type: string | "doughnut";
    chartOptions?: WidgetChartOptions;
}

export interface Widgets extends WidgetBase {
    type: string;
    control: Array<WidgetQuickButton> | WidgetStatus | WidgetChart;
}

export interface Dataset {
    data: Array<number>;
    backgroundColor: Array<string>;
    hoverBackgroundColor?: Array<string>;
}

export interface WidgetChartOptions {
    position: "left" | "top" | "right" | "bottom";
}