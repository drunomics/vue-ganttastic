import type { CSSProperties } from "vue";
export declare type GanttBarObject = {
    [key: string]: any;
    ganttBarConfig: {
        id: string;
        label?: string;
        html?: string;
        hasHandles?: boolean;
        immobile?: boolean;
        bundle?: string;
        pushOnOverlap?: boolean;
        dragLimitLeft?: number;
        dragLimitRight?: number;
        tooltipInfo?: {
            areaName: string;
            categoryName: string;
            title: string;
            icon: string;
            publishedAt: number;
            promotionUrl: string;
        };
        style?: CSSProperties;
        class?: string;
        asArrow?: boolean;
    };
};
