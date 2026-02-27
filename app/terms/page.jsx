import React from 'react';
import { SectionFooter } from '../Main/SectionFooter';

export const metadata = {
    title: "Terms of Service | Quroix Labs",
    description: "Terms of Service and standard usage conditions for Quroix Labs.",
    alternates: {
        canonical: 'https://quroixlabs.com/terms',
    }
};

export default function TermsPage() {
    return (
        <>
            <section style={{ height: "auto", minHeight: "100vh", paddingTop: "20vh", paddingBottom: "10vh" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h1 className="headline white" style={{ marginBottom: "2vh" }}>Terms of Service</h1>
                    <p className="description grey" style={{ marginBottom: "5vh" }}>Effective Date: March 2026</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
                        <h2 className="subheadline white" style={{ fontSize: "2vw", "@media (max-width: 768px)": { fontSize: "6vw" } }}>1. Acceptance of Terms</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Welcome to Quroix Labs. By accessing and using our website, applications, and digital services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue your use of our platform immediately.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>2. Description of Services</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Quroix Labs provides bespoke software engineering, system architecture, web development, and digital automation intelligence. You agree to use these services only for lawful purposes in accordance with these Terms. You are strictly responsible for ensuring your data, inputs, and operational directives do not infringe upon third-party rights or local regulations.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>3. Intellectual Property Rights</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            All original content, designs, trade names, code architectures, and branding hosted on the Quroix Labs domain remain the exclusive property of Quroix Labs. Custom software and intellectual property generated for clients during valid engagement periods are governed separately by explicitly signed Master Service Agreements (MSA) and Statements of Work (SOW).
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>4. Limitation of Liability</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            In no event shall Quroix Labs, its directors, employees, or partners be held liable for any indirect, consequential, systemic, or incidental damages—including loss of profits, operational downtime, or severe data disruptions—resulting from the deployment or subsequent usage of our services across external environments without active enterprise maintenance contracts.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>5. Indemnification</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            You agree to defend, indemnify, and hold harmless Quroix Labs and its affiliates from and against any claims, damages, liabilities, and expenses arising out of your violation of these Terms or your misuse of the deployed digital applications.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>6. Service Modifications</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            We reserve the right to withdraw, amend, or restructure both this website and our overarching service offerings without prior notice. Continued use following adjustments constitutes your binding acceptance of all active updates.
                        </p>

                        <h2 className="subheadline white" style={{ fontSize: "2vw" }}>7. Contact Information</h2>
                        <p className="description grey" style={{ lineHeight: "160%" }}>
                            Legal and operational inquiries regarding these Terms of Service should be directed to our administrative staff at operations@quroixlabs.com.
                        </p>
                    </div>
                </div>
            </section>
            <SectionFooter />
        </>
    );
}
