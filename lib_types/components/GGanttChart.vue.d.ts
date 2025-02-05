import { type ComputedRef, type Ref, type ToRefs } from "vue";
import type { GanttBarObject } from "../types";
import { type ColorSchemeKey, type ColorScheme } from "../color-schemes.js";
export interface GGanttChartProps {
    chartStart: string | Date;
    chartEnd: string | Date;
    precision?: "hour" | "day" | "date" | "week" | "month";
    barStart: string;
    barEnd: string;
    currentTime?: boolean;
    currentTimeLabel?: string;
    dateFormat?: string | false;
    width?: string;
    hideTimeaxis?: boolean;
    colorScheme?: ColorSchemeKey | ColorScheme;
    grid?: boolean;
    pushOnOverlap?: boolean;
    noOverlap?: boolean;
    rowHeight?: number;
    highlightedUnits?: number[];
    font?: string;
    labelColumnTitle?: string;
    labelColumnWidth?: string;
    verticalGrid?: boolean;
    legend: Record<string, object[]>;
}
export declare type GGanttChartConfig = ToRefs<Required<GGanttChartProps>> & {
    colors: ComputedRef<ColorScheme>;
    chartSize: {
        width: Ref<number>;
        height: Ref<number>;
    };
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<GGanttChartProps>, {
    currentTimeLabel: string;
    dateFormat: string;
    precision: string;
    width: string;
    hideTimeaxis: boolean;
    colorScheme: string;
    grid: boolean;
    pushOnOverlap: boolean;
    noOverlap: boolean;
    rowHeight: number;
    highlightedUnits: () => never[];
    font: string;
    labelColumnTitle: string;
    labelColumnWidth: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => void;
    "mousedown-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => void;
    "mouseup-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => void;
    "dblclick-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => void;
    "mouseenter-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
    }) => void;
    "mouseleave-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
    }) => void;
    "dragstart-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
    }) => void;
    "drag-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
    }) => void;
    "dragend-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
        movedBars?: Map<GanttBarObject, {
            oldStart: string;
            oldEnd: string;
        }> | undefined;
    }) => void;
    "contextmenu-bar": (value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<GGanttChartProps>, {
    currentTimeLabel: string;
    dateFormat: string;
    precision: string;
    width: string;
    hideTimeaxis: boolean;
    colorScheme: string;
    grid: boolean;
    pushOnOverlap: boolean;
    noOverlap: boolean;
    rowHeight: number;
    highlightedUnits: () => never[];
    font: string;
    labelColumnTitle: string;
    labelColumnWidth: string;
}>>> & Readonly<{
    "onClick-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => any) | undefined;
    "onMousedown-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => any) | undefined;
    "onDblclick-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => any) | undefined;
    "onMouseenter-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
    }) => any) | undefined;
    "onMouseleave-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
    }) => any) | undefined;
    "onDragstart-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
    }) => any) | undefined;
    "onDrag-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
    }) => any) | undefined;
    "onDragend-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
        movedBars?: Map<GanttBarObject, {
            oldStart: string;
            oldEnd: string;
        }> | undefined;
    }) => any) | undefined;
    "onContextmenu-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => any) | undefined;
    "onMouseup-bar"?: ((value: {
        bar: GanttBarObject;
        e: MouseEvent;
        datetime?: string | Date | undefined;
    }) => any) | undefined;
}>, {
    precision: "hour" | "day" | "month" | "date" | "week";
    rowHeight: number;
    grid: boolean;
    width: string;
    dateFormat: string | false;
    pushOnOverlap: boolean;
    colorScheme: string | ColorScheme;
    font: string;
    currentTimeLabel: string;
    hideTimeaxis: boolean;
    noOverlap: boolean;
    highlightedUnits: number[];
    labelColumnTitle: string;
    labelColumnWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    "label-column-title"?(_: {}): any;
    "label-column-row"?(_: {
        label: string;
    }): any;
    "current-time-label"?(_: {}): any;
    default?(_: {}): any;
    "upper-timeunit"?(_: {
        date: Date;
        label: string;
        value: string | undefined;
    }): any;
    timeunit?(_: {
        date: Date;
        label: string;
        value: string | undefined;
    }): any;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
