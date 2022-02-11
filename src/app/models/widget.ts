export interface WidgetBase {
    icon: string;
    link: string;
    label: string;
}

export interface WidgetQuickButton extends WidgetBase {

}

export interface WidgetStatus {
    label: string;
    totalCount: number;
    categories: Map<string, { count: number } & WidgetBase>;
}

export interface Widgets {
    status?: Array<WidgetStatus>;
    quickButtons?: Array<WidgetQuickButton>;
}

