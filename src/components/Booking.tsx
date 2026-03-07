"use client"
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Booking() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("floatingButton", { "calLink": "sayak-moulic/15min", "config": { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }, "buttonColor": "#6D28D9", "hideButtonIcon": false, "buttonText": "Book Your Free Spot Now" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#260082" }, "dark": { "cal-brand": "#260082" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <section id="trial" className="section" style={{ position: 'relative' }}>
            {/* Decorative Gradient Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(30, 64, 175, 0.1) 50%, transparent 100%)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Start Your 7-Day Free Trial</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.25rem' }}>
                    See real conversations and booked appointments before you pay. Use the AI for outbound follow-ups too.
                    <br /><br />
                    <strong>No commitment. No setup fee.</strong> Just more deals.
                </p>

                <div className="glass" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    minHeight: '600px',
                    overflow: 'hidden',
                    padding: '1rem',
                    boxShadow: '0 25px 80px -15px rgba(0, 0, 0, 0.4)'
                }}>
                    <Cal namespace="15min"
                        calLink="sayak-moulic/15min"
                        style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll", borderRadius: '0.8rem' }}
                        config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
                    />
                </div>

                <div style={{ marginTop: '4rem', opacity: 0.8 }}>
                    <p style={{ fontSize: '1.1rem' }}>“If you miss just one closing a year from missed calls, this pays for itself.”</p>
                </div>
            </div>
        </section>
    );
}
