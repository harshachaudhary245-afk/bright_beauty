import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — DermaExcel" }] }),
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</div>
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold">We&apos;re here to help</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Our team responds within a few hours, every day of the week.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch."); }}
            className="grid gap-4 rounded-2xl border border-border bg-card p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full name" type="text" required />
              <Field label="Email" type="email" required />
            </div>
            <Field label="Subject" type="text" />
            <div>
              <label className="mb-1 block text-xs font-medium text-foreground">Message</label>
              <textarea rows={5} className="w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
            </div>
            <CTAButton size="lg" className="w-fit">Send message</CTAButton>
          </form>
        </div>
        <div className="space-y-4">
          <Info icon={Mail} label="Email" value="care@dermaexcel.ae" />
          <Info icon={Phone} label="Phone" value="+971 4 000 0000" />
          <Info icon={MapPin} label="Office" value="Dubai, United Arab Emirates" />
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-foreground">{label}</label>
      <input type={type} required={required} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-clinical text-clinical-foreground">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
    </div>
  );
}
