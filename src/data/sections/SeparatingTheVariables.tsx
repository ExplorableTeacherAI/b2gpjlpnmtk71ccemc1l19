import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { VisualOptionCards } from "@/components/organisms";

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
                Here is that method on <InlineFormula latex="\frac{dy}{dx} = xy" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-separating-worked-example" maxWidth="xl">
        <Block id="separating-worked-example" padding="lg">
            <FormulaBlock latex="\frac{dy}{dx} = xy \quad\Longrightarrow\quad \int \frac{1}{y}\,dy = \int x\,dx \quad\Longrightarrow\quad \ln|y| = \frac{x^2}{2} + C" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-separating-visual" maxWidth="xl">
        <Block id="separating-visual" padding="sm">
            <VisualOptionCards
                blockId="separating-visual"
                intro="Pick how your students will practise the separating method."
                cards={[
                    {
                        id: "guided-steps",
                        title: "A step-by-step solver where students choose the next move",
                        looks: "The equation at the top, with the work building up line by line underneath as each step is chosen.",
                        manipulate: "At each stage students pick the correct next step from a few options and the line is added.",
                        reveals: "The method is a fixed sequence: separate, integrate both sides, then tidy up.",
                        recommended: true,
                    },
                    {
                        id: "sorting-sides",
                        title: "A sorting activity that puts each term on its correct side",
                        looks: "The pieces of the equation sit loose above two labelled sides, one for the y terms and one for the x terms.",
                        manipulate: "Students drag each piece to the side it belongs on and get told when a side is complete.",
                        reveals: "Separating is nothing more than getting all of one letter with its own differential.",
                    },
                    {
                        id: "separable-or-not",
                        title: "A sorter for which equations can be separated at all",
                        looks: "A set of first order equations shown one at a time with two bins, separable and not separable.",
                        manipulate: "Students sort each equation and see the attempted split for their choice.",
                        reveals: "The method works only when the equation splits into a part in x times a part in y.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-separating-integrals" maxWidth="xl">
        <Block id="separating-integrals" padding="sm">
            <EditableParagraph id="para-separating-integrals" blockId="separating-integrals">
                Both integrals are ones you already handle:{" "}
                <InlineFormula latex="1/y" /> gives <InlineFormula latex="\ln|y|" />{" "}
                and <InlineFormula latex="x" /> gives{" "}
                <InlineFormula latex="x^2/2" />. The hard part was never the
                integration; it was getting the equation into a shape where you
                could integrate at all.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
