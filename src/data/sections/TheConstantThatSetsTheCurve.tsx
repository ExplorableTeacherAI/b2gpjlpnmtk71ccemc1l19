import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { ConstantTimingComparison } from "./visuals/ConstantTimingComparison";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

export const theConstantThatSetsTheCurveBlocks: ReactElement[] = [
    <StackLayout key="layout-constant-heading" maxWidth="xl">
        <Block id="constant-heading" padding="md">
            <EditableH2 id="h2-constant-heading" blockId="constant-heading">
                The Constant That Sets the Curve
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-constant-timing" maxWidth="xl">
        <Block id="constant-timing" padding="sm">
            <EditableParagraph id="para-constant-timing" blockId="constant-timing">
                The constant is born at the integration step, not bolted on at
                the end. From <InlineFormula latex="\ln|y| = \frac{x^2}{2} + C" />{" "}
                taking exponentials gives{" "}
                <InlineFormula latex="y = Ae^{x^2/2}" />, a multiplier. Adding
                the constant one line too late would give{" "}
                <InlineFormula latex="y = e^{x^2/2} + A" /> instead, and that
                function does not satisfy the equation. Switch between the two
                versions below and test each one against{" "}
                <InlineFormula latex="\frac{dy}{dx} = xy" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-constant-visual" maxWidth="xl">
        <Block id="constant-visual" padding="sm" hasVisualization>
            <ConstantTimingComparison />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-constant-particular" maxWidth="xl">
        <Block id="constant-particular" padding="sm">
            <EditableParagraph id="para-constant-particular" blockId="constant-particular">
                A differential equation on its own has a whole family of
                solutions, one for each constant. That family is the general
                solution. Give one known value, such as{" "}
                <InlineFormula latex="y = 3" /> when{" "}
                <InlineFormula latex="x = 0" />, and exactly one member survives:
                the particular solution.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-constant-practice-particular" maxWidth="xl">
        <Block id="constant-practice-particular" padding="sm">
            <MultipleChoiceQuestion
                prompt="The general solution of an equation is y = Ae^(3x). If y = 6 when x = 0, what is the particular solution?"
                options={[
                    {
                        id: "six",
                        label: "y = 6e^(3x)",
                        correct: true,
                    },
                    {
                        id: "added",
                        label: "y = e^(3x) + 6",
                        feedback:
                            "That is the constant added on at the end rather than multiplied in. Switch to the added version above and watch the two slopes stop agreeing.",
                    },
                    {
                        id: "two",
                        label: "y = 2e^(3x)",
                        feedback:
                            "Put x = 0 into y = Ae^(3x) and remember what e to the power zero equals before solving for A.",
                    },
                    {
                        id: "general-only",
                        label: "It stays y = Ae^(3x); one point cannot fix A",
                        feedback:
                            "Slide the constant A above and watch a different curve get picked out each time — one known point is exactly what selects one of them.",
                    },
                ]}
                correctFeedback="Correct. At x = 0 the exponential is 1, so A must be 6, and that single known value picks one curve out of the whole family."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-constant-practice-timing" maxWidth="xl">
        <Block id="constant-practice-timing" padding="sm">
            <MultipleChoiceQuestion
                prompt="A student solves dy/dx = xy, writes ln|y| = x²/2, then adds a constant at the very end to get y = e^(x²/2) + A. Where does this go wrong?"
                options={[
                    {
                        id: "too-late",
                        label: "The constant belongs on the line where the integration happens, and there it becomes a multiplier",
                        correct: true,
                    },
                    {
                        id: "both-fine",
                        label: "Nothing is wrong — a constant is unknown, so it can be placed anywhere",
                        feedback:
                            "Choose the added version above and compare the two slope readings at any x. An unknown constant still has to sit where the integration put it.",
                    },
                    {
                        id: "needs-two",
                        label: "A second constant is needed on the other side as well",
                        feedback:
                            "One constant is enough, since two constants would just combine into one. Look again at which line the constant first appears on.",
                    },
                    {
                        id: "exponential-wrong",
                        label: "Taking exponentials of both sides is not allowed here",
                        feedback:
                            "Taking exponentials is a legitimate move. The problem is the line on which the constant was introduced — test both versions above.",
                    },
                ]}
                correctFeedback="Correct. Integrating produces ln|y| = x²/2 + C, and exponentials turn that added C into the multiplier A, which is why the correct answer scales the curve instead of lifting it."
            />
        </Block>
    </StackLayout>,
];
