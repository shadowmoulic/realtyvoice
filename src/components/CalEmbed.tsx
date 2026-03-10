"use client"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("floatingButton", {
                "calLink": "sayak-moulic/15min",
                "config": {
                    "layout": "month_view",
                    "useSlotsViewOnSmallScreen": "true"
                },
                "buttonColor": "#6D28D9",
                "hideButtonIcon": false,
                "buttonText": "Book Your Free Spot Now"
            });
            cal("ui", {
                "cssVarsPerTheme": {
                    "light": { "cal-brand": "#260082" },
                    "dark": { "cal-brand": "#260082" }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, []);

    return null;
}
