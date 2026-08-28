import { useState } from "react";
import { Button, InlineFormula } from "@/components/atoms";

interface SolverOption {
    id: string;
    latex: string;
    correct?: boolean;
    /** Shown when this wrong option is chosen */
    hint?: string;
}

interface SolverStep {
    prompt: string;
    options: SolverOption[];
    /** The line added to the worked solution when the step is answered correctly */
    resultLatex: string;
    note: string;
}

const STEPS: SolverStep[] = [
    {
        prompt: "Step 1 — separate the variables.",
        options: [
            {
                id: "separated",
                latex: String.raw`y\,dy = x\,dx`,
                correct: true,
            },
            {
                id: "integrate-now",
                latex: String.raw`\int \frac{x}{y}\,dx = \int dy`,
                hint: "You cannot integrate x over y with respect to x while y is still unknown. Move every y to the dy side first.",
            },
            {
                id: "wrong-differential",
                latex: String.raw`y\,dy = x\,dy`,
                hint: "Each side must keep its own differential: the y side with dy, the x side with dx.",
            },
        ],
        resultLatex: String.raw`y\,dy = x\,dx`,
        note: "Every y sits with dy, every x with dx.",
    },
    {
        prompt: "Step 2 — integrate each side.",
        options: [
            {
                id: "with-constant",
                latex: String.raw`\frac{y^2}{2} = \frac{x^2}{2} + C`,
                correct: true,
            },
            {
                id: "no-constant",
                latex: String.raw`\frac{y^2}{2} = \frac{x^2}{2}`,
                hint: "The integration is right, but one thing is missing. An indefinite integral always brings a constant with it.",
            },
            {
                id: "wrong-power",
                latex: String.raw`y^2 = x^2 + C`,
                hint: "Check the integration itself: integrating y with respect to y gives y squared over 2, not y squared.",
            },
        ],
        resultLatex: String.raw`\frac{y^2}{2} = \frac{x^2}{2} + C`,
        note: "One constant on one side is enough.",
    },
    {
        prompt: "Step 3 — tidy the result into a solution for y.",
        options: [
            {
                id: "doubled",
                latex: String.raw`y^2 = x^2 + A`,
                correct: true,
            },
            {
                id: "square-rooted-terms",
                latex: String.raw`y = x + A`,
                hint: "Square rooting a sum term by term is not allowed. Multiply the whole line by 2 first and leave the square on y.",
            },
            {
                id: "halved",
                latex: String.raw`y^2 = x^2 + \frac{C}{2}`,
                hint: "Multiplying every term by 2 doubles the constant rather than halving it. Any unknown constant can simply be renamed.",
            },
        ],
        resultLatex: String.raw`y^2 = x^2 + A`,
        note: "Doubling turns 2C into a new constant A.",
    },
];

/**
 * Step-by-step separable-equation solver: the student chooses the next move
 * and correct choices build the worked solution line by line.
 */
export const GuidedSeparationSolver = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const [chosen, setChosen] = useState<string | null>(null);

    const finished = stepIndex >= STEPS.length;
    const step = finished ? null : STEPS[stepIndex];
    const chosenOption = step?.options.find((option) => option.id === chosen);

    const handleChoice = (option: SolverOption) => {
        setChosen(option.id);
        if (option.correct) {
            window.setTimeout(() => {
                setStepIndex((index) => index + 1);
                setChosen(null);
            }, 900);
        }
    };

    return (
        <div className="w-full rounded-lg border border-slate-200 bg-white p-4">
            <div className="mb-3 text-center text-lg">
                <InlineFormula latex="\frac{dy}{dx} = \frac{x}{y}" />
            </div>

            <div className="mb-4 space-y-1 rounded-md bg-slate-50 p-3">
                {STEPS.slice(0, stepIndex).map((solved) => (
                    <div key={solved.prompt} className="flex items-baseline gap-3">
                        <InlineFormula latex={solved.resultLatex} />
                        <span className="text-xs text-slate-500">{solved.note}</span>
                    </div>
                ))}
                {stepIndex === 0 && (
                    <div className="text-sm text-slate-500">
                        Your worked solution will build up here.
                    </div>
                )}
            </div>

            {step ? (
                <div>
                    <div className="mb-2 text-sm font-medium text-slate-800">{step.prompt}</div>
                    <div className="flex flex-col gap-2">
                        {step.options.map((option) => {
                            const isChosen = chosen === option.id;
                            const state = isChosen
                                ? option.correct
                                    ? "border-emerald-400 bg-emerald-50"
                                    : "border-amber-400 bg-amber-50"
                                : "border-slate-200 hover:border-slate-400";
                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => handleChoice(option)}
                                    className={`rounded-md border px-3 py-2 text-left transition-colors ${state}`}
                                >
                                    <InlineFormula latex={option.latex} />
                                </button>
                            );
                        })}
                    </div>

                    {chosenOption && !chosenOption.correct && (
                        <div className="mt-3 rounded-md bg-amber-50 p-3 text-sm text-amber-900">
                            {chosenOption.hint}
                        </div>
                    )}
                    {chosenOption?.correct && (
                        <div className="mt-3 rounded-md bg-emerald-50 p-3 text-sm text-emerald-800">
                            That is the move — adding it to the solution.
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-y-3">
                    <div className="rounded-md bg-emerald-50 p-3 text-sm text-emerald-800">
                        Solved. Separate, integrate both sides, then tidy up — the same three
                        moves work on every separable equation.
                    </div>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                            setStepIndex(0);
                            setChosen(null);
                        }}
                    >
                        Start again
                    </Button>
                </div>
            )}
        </div>
    );
};
