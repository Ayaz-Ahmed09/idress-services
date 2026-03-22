// app/components/web-vitals.tsx
'use client'
import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals()
{
        useReportWebVitals((metric) =>
        {
                // If you have GA4 set up, send it like this:
                window.gtag('event', metric.name, {
                        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                        event_label: metric.id,
                        non_interaction: true,
                });
        })
        return null
}
