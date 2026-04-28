"use client";

import { useState } from "react";

const ACCENT = "#D4A010";

function FormField({
  label, name, placeholder, type = "text", required = false,
}: {
  label: string; name: string; placeholder: string; type?: string; required?: boolean;
}) {
  return (
    <div
      className="form-field relative border"
      style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}
    >
      <label
        htmlFor={name}
        className="absolute top-3 left-5 font-mono text-[10px] tracking-[0.25em] uppercase pointer-events-none"
        style={{ color: "rgba(0,0,0,0.62)" }}
      >
        {label}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="w-full bg-transparent outline-none pt-8 pb-3 px-5 font-light"
        style={{ color: "rgba(0,0,0,0.85)", fontSize: "16px", fontFamily: "inherit" }}
      />
    </div>
  );
}

function FormSelect({ label, name, options }: { label: string; name: string; options: readonly string[] }) {
  return (
    <div
      className="form-field relative border"
      style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}
    >
      <label
        htmlFor={name}
        className="absolute top-3 left-5 font-mono text-[10px] tracking-[0.25em] uppercase pointer-events-none z-10"
        style={{ color: "rgba(0,0,0,0.62)" }}
      >
        {label}
      </label>
      <select
        id={name} name={name} defaultValue=""
        className="w-full bg-transparent outline-none pt-8 pb-3 px-5 appearance-none font-light"
        style={{ color: "rgba(0,0,0,0.7)", fontSize: "16px", fontFamily: "inherit" }}
      >
        <option value="" disabled style={{ background: "#F2F0EC" }}>Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: "#F2F0EC", color: "#1A1A1A" }}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedSvcs, setSelectedSvcs] = useState<Set<string>>(new Set());

  const toggleSvc = (svc: string) => {
    setSelectedSvcs((prev) => {
      const next = new Set(prev);
      if (next.has(svc)) next.delete(svc); else next.add(svc);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    // Web3Forms access key — INTENTIONALLY public. These keys are designed for
    // client-side use; abuse is rate-limited server-side by Web3Forms and bound
    // to the email address configured in the dashboard. Do NOT refactor this to
    // an env var or server route — that adds infra with zero security benefit.
    // See: https://docs.web3forms.com/getting-started/security
    data.append("access_key", "d830efb8-46f4-4275-9086-2319a36134d0");
    data.append("subject", "New Phantom Pasting Quote Request");
    data.append("from_name", "Phantom Pasting Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      if (res.ok) {
        // Push a `generate_lead` event to dataLayer. We use dataLayer.push
        // (not gtag) so the event queues even if GoogleAnalytics.tsx hasn't
        // loaded gtag.js yet — the queue replays once gtag boots. Without
        // this, ga4.json shows conversions:0 even when leads are landing.
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "generate_lead",
            lead_city: data.get("city") || "",
            lead_budget: data.get("budget") || "",
            lead_timeline: data.get("timeline") || "",
            lead_services: Array.from(selectedSvcs).join("|") || "",
          });
        }
        setSubmitted(true);
      }
    } catch { /* fail silently */ }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-12 text-center"
        style={{
          background: "rgba(248,247,244,0.97)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.10)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(212,160,16,0.12)", border: "2px solid rgba(212,160,16,0.3)" }}
        >
          <span style={{ fontSize: "28px", color: ACCENT }}>✓</span>
        </div>
        <h3 className="font-black uppercase m-0 mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-0.02em" }}>
          You&apos;re In.
        </h3>
        <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.6)", fontSize: "17px" }}>
          We&apos;ll hit your inbox within 24 hours. Follow{" "}
          <a
            href="https://www.instagram.com/phantompasting"
            className="no-underline"
            style={{ color: ACCENT }}
          >
            @phantompasting
          </a>{" "}
          to see campaigns live in the wild.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{
        gap: "1px",
        background: "rgba(248,247,244,0.97)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.05)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
        <FormField label="First Name *" name="firstName" placeholder="Alex" required />
        <FormField label="Last Name *" name="lastName" placeholder="Rivera" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
        <FormField label="Email *" name="email" type="email" placeholder="alex@brand.com" required />
        <FormField label="Phone" name="phone" placeholder="+1 (212) 000-0000" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
        <FormField label="Brand / Company *" name="brand" placeholder="Your Brand" required />
        <FormField label="Target City *" name="city" placeholder="New York City, NY" required />
      </div>

      {/* Service toggles */}
      <div
        className="p-4 border"
        style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}
      >
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(0,0,0,0.62)" }}>
          Service Needed
        </p>
        <div className="flex flex-wrap gap-2">
          {["Wheat Pasting", "Chalk Spray Stencils", "Full Impact", "Custom"].map((svc) => {
            const active = selectedSvcs.has(svc);
            return (
              <button
                key={svc} type="button" onClick={() => toggleSvc(svc)}
                aria-pressed={active}
                className="font-mono text-[11px] tracking-[0.1em] px-3 py-2 rounded-lg border cursor-pointer select-none"
                style={{
                  background: active ? "rgba(184,150,15,0.15)" : "rgba(242,240,236,0.7)",
                  borderColor: active ? "rgba(184,150,15,0.5)" : "rgba(0,0,0,0.12)",
                  color: active ? "#8B7209" : "rgba(0,0,0,0.5)",
                  boxShadow: active ? "0 0 12px rgba(184,150,15,0.15)" : "none",
                  fontFamily: "inherit",
                  transition: "all 0.2s ease",
                }}
              >
                {active && <span style={{ marginRight: "6px" }}>✓</span>}
                {svc}
              </button>
            );
          })}
        </div>
        {Array.from(selectedSvcs).map((svc) => (
          <input key={svc} type="hidden" name="service" value={svc} />
        ))}
      </div>

      {/* Wheat Pasting options — CSS grid-row reveal */}
      <div
        className="grid"
        style={{
          gridTemplateRows: selectedSvcs.has("Wheat Pasting") ? "1fr" : "0fr",
          opacity: selectedSvcs.has("Wheat Pasting") ? 1 : 0,
          transition: "grid-template-rows 0.3s ease-out, opacity 0.3s ease-out",
        }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <div className="border-t" style={{ borderColor: "rgba(184,150,15,0.2)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
              <FormSelect label="Material (optional)" name="wp_material"
                options={["28# Bond Paper", "80# Coated Front, Uncoated Back", "30# Kraft Paper"]} />
              <FormSelect label="Poster Size" name="wp_size" options={['24" × 36"', '48" × 72"']} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
              <FormField label="Quantity (optional)" name="wp_quantity" placeholder="100" type="number" />
              <FormField label="Versions (optional)" name="wp_versions" placeholder="2" type="number" />
            </div>
          </div>
        </div>
      </div>

      {/* Chalk Spray Stencils options */}
      <div
        className="grid"
        style={{
          gridTemplateRows: selectedSvcs.has("Chalk Spray Stencils") ? "1fr" : "0fr",
          opacity: selectedSvcs.has("Chalk Spray Stencils") ? 1 : 0,
          transition: "grid-template-rows 0.3s ease-out, opacity 0.3s ease-out",
        }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <div className="border-t" style={{ borderColor: "rgba(184,150,15,0.2)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
              <FormSelect label="Stencil Material (optional)" name="st_material"
                options={['0.030" Styrene', "14PT Cover Paper"]} />
              <FormField label="Quantity (optional)" name="st_quantity" placeholder="50" type="number" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
        <FormSelect label="Campaign Budget" name="budget"
          options={["Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000 – $25,000", "$25,000+"]} />
        <FormSelect label="Launch Timeline" name="timeline"
          options={["ASAP (within 2 weeks)", "1 month", "2–3 months", "Planning ahead (3+ months)"]} />
      </div>

      <div
        className="relative border"
        style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}
      >
        <label
          htmlFor="message"
          className="absolute top-3 left-5 font-mono text-[10px] tracking-[0.25em] uppercase pointer-events-none"
          style={{ color: "rgba(0,0,0,0.62)" }}
        >
          Campaign Details
        </label>
        <textarea
          id="message"
          name="message" rows={3}
          placeholder="Campaign goals, target audience, specific neighborhoods…"
          className="w-full bg-transparent outline-none resize-none pt-8 pb-3 px-5 font-light"
          style={{ color: "rgba(0,0,0,0.85)", fontSize: "16px", fontFamily: "inherit" }}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="relative flex items-center justify-between font-black text-[16px] tracking-[0.06em] uppercase px-8 py-5 border-0 cursor-pointer overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #D4A010 0%, #F5CA20 50%, #D4A010 100%)",
          color: "#FFF",
          fontFamily: "inherit",
          boxShadow: "0 4px 24px rgba(184,150,15,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
          opacity: submitting ? 0.7 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        <span
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 65%)" }}
        />
        {submitting ? "Sending…" : "Launch My Campaign"}
        {!submitting && <span className="submit-arrow">→</span>}
      </button>

      <p
        className="text-center font-mono text-[10px] tracking-[0.12em] py-3"
        style={{ color: "rgba(0,0,0,0.6)", background: "rgba(0,0,0,0.02)" }}
      >
        ✦ No spam. Your info is used only to build your campaign.
      </p>
    </form>
  );
}
