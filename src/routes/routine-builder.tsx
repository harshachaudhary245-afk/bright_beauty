import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton } from "@/components/CTAButton";
import { ProductGrid } from "@/components/ProductGrid";
import { PRODUCTS } from "@/lib/placeholder-data";

export const Route = createFileRoute("/routine-builder")({
  component: RoutineBuilderPage,
  head: () => ({ meta: [{ title: "Routine Builder — DermaExcel" }] }),
});

const STEPS = [
  { key: "type", q: "What's your skin type?", options: ["Oily", "Dry", "Combination", "Sensitive"] },
  { key: "concern", q: "Your top concern?", options: ["Acne", "Pigmentation", "Aging", "Hydration"] },
  { key: "spf", q: "Daily SPF?", options: ["Yes, fluid", "Yes, cream", "Tinted", "Not yet"] },
];

function RoutineBuilderPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = step >= STEPS.length;

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:py-20">
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Quiz</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Build my routine</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          5 quick questions to get a dermatologist-inspired routine.
        </p>
      </div>

      {!done ? (
        <div className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="text-xs text-muted-foreground">Step {step + 1} of {STEPS.length}</div>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold">{STEPS[step].q}</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {STEPS[step].options.map((o) => (
              <button
                key={o}
                onClick={() => {
                  setAnswers({ ...answers, [STEPS[step].key]: o });
                  setStep(step + 1);
                }}
                className="rounded-2xl border border-border bg-background p-5 text-left text-sm font-medium transition-colors hover:border-primary hover:bg-clinical"
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10">
          <div className="rounded-3xl border border-border bg-clinical p-6 md:p-10 text-center">
            <h2 className="text-2xl font-semibold">Your routine is ready ✨</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Based on your answers, here are 4 picks to start with.
            </p>
            <div className="mt-4 flex justify-center">
              <CTAButton onClick={() => { setAnswers({}); setStep(0); }} variant="outline">Restart quiz</CTAButton>
            </div>
          </div>
          <div className="mt-8">
            <ProductGrid products={PRODUCTS.slice(0, 4)} />
          </div>
        </div>
      )}
    </section>
  );
}
