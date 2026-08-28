import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula, Table } from "@/components/atoms";

export const wrappingUpBlocks: ReactElement[] = [
    <StackLayout key="layout-wrapping-heading" maxWidth="xl">
        <Block id="wrapping-heading" padding="md">
            <EditableH2 id="h2-wrapping-heading" blockId="wrapping-heading">
                Wrapping Up
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-summary" maxWidth="xl">
        <Block id="wrapping-summary" padding="sm">
            <EditableParagraph id="para-wrapping-summary" blockId="wrapping-summary">
                You can now take a first order separable equation, gather each
                letter with its own differential, integrate both sides, and turn
                a starting value into a single curve. The cooling drink you began
                with is no longer a mystery: a rule about how fast it changes was
                enough to recover its temperature at any moment.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-equation-summary" maxWidth="xl">
        <Block id="wrapping-equation-summary" padding="sm">
            <Table
                columns={[
                    { header: "What it describes", align: "left" },
                    { header: "Differential equation", align: "center", width: 190 },
                    { header: "Solution", align: "center", width: 190 },
                ]}
                rows={[
                    {
                        cells: [
                            "Any separable first order equation",
                            <InlineFormula latex="\frac{dy}{dx} = f(x)g(y)" />,
                            <InlineFormula latex="\int \frac{dy}{g(y)} = \int f(x)\,dx" />,
                        ],
                        highlight: true,
                    },
                    {
                        cells: [
                            "Worked example",
                            <InlineFormula latex="\frac{dy}{dx} = xy" />,
                            <InlineFormula latex="y = Ae^{x^2/2}" />,
                        ],
                    },
                    {
                        cells: [
                            "The equation in the solver",
                            <InlineFormula latex="\frac{dy}{dx} = \frac{x}{y}" />,
                            <InlineFormula latex="y^2 = x^2 + A" />,
                        ],
                    },
                    {
                        cells: [
                            "Drink cooling in a 20 degree room",
                            <InlineFormula latex="\frac{dT}{dt} = -k(T - 20)" />,
                            <InlineFormula latex="T = 20 + Ae^{-kt}" />,
                        ],
                    },
                    {
                        cells: [
                            "Growth or decay of an amount",
                            <InlineFormula latex="\frac{dN}{dt} = \pm kN" />,
                            <InlineFormula latex="N = Ae^{\pm kt}" />,
                        ],
                    },
                ]}
                color="#6366f1"
                caption="Every equation met in this lesson, with the solution separating the variables gives."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-forward" maxWidth="xl">
        <Block id="wrapping-forward" padding="sm">
            <EditableParagraph id="para-wrapping-forward" blockId="wrapping-forward">
                The idea worth keeping is that a rate rule plus one known value
                pins down a whole function. That is how populations, drug doses
                in the bloodstream and charging phone batteries are all
                predicted. Next come equations that refuse to separate, which
                need a method of their own.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
