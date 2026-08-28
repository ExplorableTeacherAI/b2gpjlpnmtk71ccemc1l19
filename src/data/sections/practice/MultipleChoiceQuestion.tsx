import { useState, type ReactNode } from "react";
import { Button, RadioGroup, RadioGroupItem, Label } from "@/components/atoms";

export interface ChoiceOption {
    id: string;
    label: string;
    correct?: boolean;
    /** Shown when this option is chosen and it is wrong */
    feedback?: string;
}

export interface MultipleChoiceQuestionProps {
    prompt: string;
    /** Optional worked answer shown for the student to judge before choosing */
    proposedAnswer?: ReactNode;
    options: ChoiceOption[];
    /** Shown when the correct option is chosen */
    correctFeedback: string;
}

/**
 * A single multiple-choice practice question with option-specific feedback.
 * Wrong answers never reveal the value — they point back to the section visual.
 */
export const MultipleChoiceQuestion = ({
    prompt,
    proposedAnswer,
    options,
    correctFeedback,
}: MultipleChoiceQuestionProps) => {
    const [selected, setSelected] = useState<string>("");
    const [checked, setChecked] = useState(false);

    const chosen = options.find((option) => option.id === selected);
    const isCorrect = Boolean(chosen?.correct);

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="mb-3 text-sm font-medium text-slate-800">{prompt}</div>

            {proposedAnswer && (
                <div className="mb-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                    {proposedAnswer}
                </div>
            )}

            <RadioGroup
                value={selected}
                onValueChange={(value) => {
                    setSelected(value);
                    setChecked(false);
                }}
                className="space-y-2"
            >
                {options.map((option) => (
                    <div key={option.id} className="flex items-start gap-2">
                        <RadioGroupItem value={option.id} id={`${prompt.slice(0, 12)}-${option.id}`} />
                        <Label
                            htmlFor={`${prompt.slice(0, 12)}-${option.id}`}
                            className="cursor-pointer text-sm font-normal text-slate-700"
                        >
                            {option.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>

            <Button
                className="mt-3"
                size="sm"
                variant="outline"
                disabled={!selected}
                onClick={() => setChecked(true)}
            >
                Check answer
            </Button>

            {checked && chosen && (
                <div
                    className={`mt-3 rounded-md p-3 text-sm ${isCorrect
                        ? "bg-emerald-50 text-emerald-800"
                        : "bg-amber-50 text-amber-900"
                        }`}
                >
                    {isCorrect ? correctFeedback : chosen.feedback}
                </div>
            )}
        </div>
    );
};
