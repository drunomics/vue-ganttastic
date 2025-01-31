import type { GanttBarObject } from "../types";
import type { GGanttChartConfig } from "./GGanttChart.vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    bar: GanttBarObject | undefined;
    config: Pick<GGanttChartConfig, "barStart" | "barEnd" | "font">;
    toDayjs: any;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    bar: GanttBarObject | undefined;
    config: Pick<GGanttChartConfig, "barStart" | "barEnd" | "font">;
    toDayjs: any;
}>>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {
        bar: GanttBarObject | undefined;
        barStart: any;
        barEnd: any;
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
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
