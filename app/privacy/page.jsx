import React from 'react';
import { SectionFooter } from '../Main/SectionFooter';

export const metadata = {
    title: "Privacy Policy | Quroix Labs",
    description: "Learn how Quroix Labs collects, utilizes, and protects your personal data.",
    alternates: {
        canonical: 'https://quroixlabs.com/privacy',
    }
};

export default function PrivacyPage() {
    return (
        <>
            <section style={{ height: "auto", minHeight: "100vh", paddingTop: "20vh", paddingBottom: "10vh" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h1 className="headline white" style={{ margin: "0 0 2vh 0" }}>Privacy Policy</h1>
                    <p className="description grey" style={{ marginBottom: "5vh" }}>Effective Date: March 2026</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            At Quroix Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), prioritizing your privacy and safeguarding your personal data is a foundational element of our engineering practice. This Privacy Policy strictly defines our methodology for capturing, handling, and legally utilizing information when you navigate our platform or engage with our services.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>1. Data Collection</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            When navigating our site or submitting inquiries, we may process information that directly or indirectly identifies you (&quot;Personal Data&quot;). This broadly encompasses:
                            <br /><br />
                            • <b>Contact Information:</b> Your name, corporate email address, organizational affiliations, and phone numbers captured through intake forms.
                            <br />
                            • <b>Automated Identifiers:</b> Protocol (IP) addresses, user-agent parsing, browser specifics, and temporal timestamps indicating website interactions, managed securely via Next.js server middlewares.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>2. Utilization of Data</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Your aggregated and specified data is exclusively deployed to:
                            <br />
                            • Provide bespoke analytical consultations and initiate project lifecycles.
                            <br />
                            • Maintain operational security infrastructures, blocking illicit network access.
                            <br />
                            • Dispatch crucial technical or service-related communications aligned to your agreements.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>3. Data Transmission & Sharing</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Quroix Labs strictly prohibits the selling, bartering, or renting of your Personal Data. Contextual transmission only occurs towards certified infrastructural sub-processors (like calendaring tools or secure cloud hosting endpoints) strictly bound by identical regulatory privacy standards, or if comprehensively ordered by a judicial legal process.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>4. Global Data Rights</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Depending upon your global locale (e.g., GDPR spanning Europe or CCPA across California), you hold inherent digital rights. You possess structural clearance to request analytical copies, modification, granular restriction, or the complete erasure of your maintained Personal Data at any moment.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>5. Contact Our Privacy Control</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Should you require clarification concerning this Privacy Policy, or wish to invoke your data rights regarding internal processes, submit a request directly at privacy@quroixlabs.com.
                        </p>
                    </div>
                </div>
            </section>
            <SectionFooter />
        </>
    );
}
