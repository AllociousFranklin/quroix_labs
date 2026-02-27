import React from 'react';
import { SectionFooter } from '../Main/SectionFooter';

export const metadata = {
    title: "Cookie Policy | Quroix Labs",
    description: "Explanation of how Quroix Labs utilizes browser cookies to enhance digital performance.",
    alternates: {
        canonical: 'https://quroixlabs.com/cookies',
    }
};

export default function CookiesPage() {
    return (
        <>
            <section style={{ height: "auto", minHeight: "100vh", paddingTop: "20vh", paddingBottom: "10vh" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h1 className="headline white" style={{ marginBottom: "2vh" }}>Cookie Policy</h1>
                    <p className="description grey" style={{ marginBottom: "5vh" }}>Effective Date: March 2026</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Quroix Labs uses cookies and similar digital tracing technologies to augment your browsing experience, analyze live website traffics, and intelligently verify server operations globally. This Cookie Policy clarifies exactly what cookies are, why we heavily rely on them, and how you inherently possess control over them.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>1. Defining Cookies</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Cookies are minor text packets structurally downloaded to your device (mobile, desktop, or tablet) upon visiting a functioning website. They empower the central ecosystem to &quot;remember&quot; variables such as user actions and interface preferences (e.g., font scaling or login identities) autonomously over time.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>2. Our Implementation Model</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Across Quroix Labs, our infrastructural environments operate three cookie partitions:
                            <br /><br />
                            • <b>Essential Operations:</b> Cookies required inextricably for standard digital functionality and routing requests internally.
                            <br />
                            • <b>Performance Analytics:</b> Aggregated (non-identifiable) metrics monitoring site load latencies, broken connections, or traffic routing anomalies.
                            <br />
                            • <b>Third-Party Integration:</b> Cookies appended via modular features, such as our integrated calendaring widgets or geographic gateways, operating distinctly through trusted administrative partners.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>3. Analytics & Google Integration</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            We deploy Google Analytics, specifically operating via deferred strategies to preserve frontend speeds. These specific metrics harvest behavioral workflows organically to help us continuously redesign our software architecture intelligently rather than blindly. They can be disabled globally across your network or via extensions.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>4. Regulating Cookies</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            You reserve the absolute operational right to reject tracking cookies. Your external browser settings can be calibrated directly to broadly block cookies entirely or intercept them selectively. Please recognize that enforcing heavy blockers may inadvertently restrict critical aesthetic and behavioral properties configured within modern web applications.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>5. Queries & Verification</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            For specialized requests analyzing the cookie footprint or third-party associations present inside Quroix Labs infrastructures, ping our networking divisions at legal@quroixlabs.com.
                        </p>
                    </div>
                </div>
            </section>
            <SectionFooter />
        </>
    );
}
