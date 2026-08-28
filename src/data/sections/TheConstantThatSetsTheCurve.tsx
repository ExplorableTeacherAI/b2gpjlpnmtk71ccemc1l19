import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

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
                function does not satisfy the equation. So what difference does
                the constant actually make?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-constant-visual" maxWidth="xl">
        <Block id="constant-visual" padding="sm">
            <VisualOptionCards
                blockId="constant-visual"
                intro="Pick how your students will see what the constant of integration does."
                cards={[
                    {
                        id: "family-of-curves",
                        title: "A family of solution curves controlled by the constant",
                        looks: "Several curves of the same shape stacked on one set of axes, with one of them highlighted.",
                        manipulate: "Students change the constant and watch which curve is picked out, then drop a known point to fix it.",
                        reveals: "Every value of the constant gives a valid solution until one known point selects a single curve.",
                        recommended: true,
                    },
                    {
                        id: "constant-timing-compare",
                        title: "Two answers side by side: constant added at the right moment and too late",
                        looks: "Two curves on the same axes, one from multiplying by the constant and one from adding it at the end, each checked against the original equation.",
                        manipulate: "Students switch between the two versions and see which one satisfies the equation.",
                        reveals: "Adding the constant after taking exponentials gives a function that fails the equation.",
                        targetsMisconception: "Students forget the constant of integration, or add it too late",
                    },
                    {
                        id: "point-to-constant",
                        title: "A movable starting point that reveals its own constant",
                        looks: "One curve through a marked point, with the value of the constant shown as the point moves.",
                        manipulate: "Students drag the starting point and read off the constant that goes with it.",
                        reveals: "The starting condition and the constant carry exactly the same information.",
                    },
                ]}
            />
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
];
