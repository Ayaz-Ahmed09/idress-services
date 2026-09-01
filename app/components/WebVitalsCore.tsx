'use client'
import { useReportWebVitals } from 'next/web-vitals'

declare global {
        interface Window {
                dataLayer?: Array<Record<string, unknown>>;
        }
}

export function WebVitals()
{
        useReportWebVitals((metric) =>
        {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                        event: metric.name,
                        event_category: 'Web Vitals',
                        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                        event_label: metric.id,
                        non_interaction: true,
                        metric_id: metric.id,
                        metric_name: metric.name,
                        metric_rating: metric.rating,
                        metric_value: metric.value,
                });
        })
        return null
}
