import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { GuidedSeparationSolver } from "./visuals/GuidedSeparationSolver";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

export const separatingTheVariablesBlocks: ReactElement[] = [
    <StackLayout key="layout-separating-heading" maxWidth="xl">
        <Block id="separating-heading" padding="md">
            <EditableH2 id="h2-separating-heading" blockId="separating-heading">
                Separating the Variables
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-separating-method" maxWidth="xl">
        <Block id="separating-method" padding="sm">
            <EditableParagraph id="para-separating-method" blockId="separating-method">
                A first order equation is separable when the right hand side
                splits into a part in <InlineFormula latex="x" /> times a part in{" "}
                <InlineFormula latex="y" />. Collect every <InlineFormula latex="y" /> with{" "}
                <InlineFormula latex="dy" />, every <InlineFormula latex="x" /> with{" "}
                <InlineFormula latex="dx" />, and integrate each side on its own.
                Here is that method on <InlineFormula latex="\frac{dy}{dx} = xy" />,
                and then a new equation for you to steer through it yourself.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-separating-worked-example" maxWidth="xl">
        <Block id="separating-worked-example" padding="lg">
            <FormulaBlock latex="\frac{dy}{dx} = xy \quad\Longrightarrow\quad \int \frac{1}{y}\,dy = \int x\,dx \quad\Longrightarrow\quad \ln|y| = \frac{x^2}{2} + C" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-separating-visual" maxWidth="xl">
        <Block id="separating-visual" padding="sm" hasVisualization>
            <GuidedSeparationSolver />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-separating-integrals" maxWidth="xl">
        <Block id="separating-integrals" padding="sm">
            <EditableParagraph id="para-separating-integrals" blockId="separating-integrals">
                Every integral in that solver was one you already handle. The
                hard part was never the integration; it was getting each letter
                onto its own side so that integrating became possible at all.
            </EditableParagraph>
        </Block>
    </StackLayout>,
    <StackLayout key="layout-separating-practice-identify" maxWidth="xl">
        <Block id="separating-practice-identify" padding="sm">
            <MultipleChoiceQuestion
                prompt="Which of these first order equations can be separated?"
                options={[
                    {
                        id: "product",
                        label: "dy/dx = y sin x",
                        correct: true,
                    },
                    {
                        id: "sum",
                        label: "dy/dx = x + y",
                        feedback:
                            "A sum cannot be split into a y side and an x side by dividing. Look for a right hand side that is a product of a part in x and a part in y.",
                    },
                    {
                        id: "mixed",
                        label: "dy/dx = sin(x + y)",
                        feedback:
                            "The x and y are locked together inside the sine, so no rearrangement puts them on opposite sides.",
                    },
                    {
                        id: "none",
                        label: "None of them can be separated",
                        feedback:
                            "One of them is a product of something in x and something in y. Check each right hand side for that shape.",
                    },
                ]}
                correctFeedback="Correct. The right hand side is a part in y times a part in x, so dividing by y and multiplying by dx separates it cleanly."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-separating-practice-first-move" maxWidth="xl">
        <Block id="separating-practice-first-move" padding="sm">
            <MultipleChoiceQuestion
                prompt="For dy/dx = y cos x, what is the correct line straight after separating and setting up the integrals?"
                options={[
                    {
                        id: "correct-setup",
                        label: "∫ (1/y) dy = ∫ cos x dx",
                        correct: true,
                    },
                    {
                        id: "y-on-x-side",
                        label: "∫ dy = ∫ y cos x dx",
                        feedback:
                            "The right hand side still holds a y, so it cannot be integrated with respect to x. Run step 1 of the solver above again and watch where the y goes.",
                    },
                    {
                        id: "reciprocal-flip",
                        label: "∫ y dy = ∫ cos x dx",
                        feedback:
                            "Dividing both sides by y leaves 1 over y with dy, not y. Compare with the first line the solver above builds.",
                    },
                    {
                        id: "already-solved",
                        label: "y = sin x",
                        feedback:
                            "That skips straight past the integration, and it also drops the constant. Take the equation one step at a time as the solver above does.",
                    },
                ]}
                correctFeedback="Correct. Dividing by y puts 1 over y with dy and leaves cos x with dx, so each side can now be integrated on its own."
            />
        </Block>
    </StackLayout>,
];
