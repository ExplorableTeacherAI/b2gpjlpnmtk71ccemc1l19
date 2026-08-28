import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

export const modellingRealChangeBlocks: ReactElement[] = [
    <StackLayout key="layout-modelling-heading" maxWidth="xl">
        <Block id="modelling-heading" padding="md">
            <EditableH2 id="h2-modelling-heading" blockId="modelling-heading">
                Modelling Real Change
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-modelling-setup" maxWidth="xl">
        <Block id="modelling-setup" padding="sm">
            <EditableParagraph id="para-modelling-setup" blockId="modelling-setup">
                Back to the hot chocolate. The sentence "it cools at a rate
                proportional to how far above room temperature it is" becomes{" "}
                <InlineFormula latex="\frac{dT}{dt} = -k(T - 20)" />. Separating
                and integrating gives{" "}
                <InlineFormula latex="T = 20 + Ae^{-kt}" />, and the temperature
                you started with fixes <InlineFormula latex="A" />. The same
                shape of equation runs bacteria counts and radioactive decay.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-modelling-visual" maxWidth="xl">
        <Block id="modelling-visual" padding="sm">
            <VisualOptionCards
                blockId="modelling-visual"
                intro="Pick how your students will apply the method to a real situation."
                cards={[
                    {
                        id: "cooling-lab",
                        title: "A cooling drink with adjustable starting temperature and cooling rate",
                        looks: "A temperature-against-time curve falling towards room temperature, with the current temperature shown as the drink cools.",
                        manipulate: "Students set the starting temperature and the cooling rate, then read the temperature at a chosen time.",
                        reveals: "The starting value sets where the curve begins, while the rate constant sets how fast it flattens.",
                        recommended: true,
                    },
                    {
                        id: "model-matcher",
                        title: "Three real situations matched to their differential equations",
                        looks: "Short descriptions of a cooling drink, a growing culture and a decaying sample, next to candidate equations and their curves.",
                        manipulate: "Students match each situation to its equation and see the resulting curve appear.",
                        reveals: "Growth and decay are the same equation with the sign of the constant flipped.",
                    },
                    {
                        id: "data-fit",
                        title: "Measured readings with a model curve laid over them",
                        looks: "Plotted temperature readings from a real cooling drink, with a solution curve drawn through them.",
                        manipulate: "Students adjust the rate constant until the curve passes through the readings.",
                        reveals: "Solving the equation gives a curve you can test against measurements from the real world.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-modelling-transfer" maxWidth="xl">
        <Block id="modelling-transfer" padding="sm">
            <EditableParagraph id="para-modelling-transfer" blockId="modelling-transfer">
                Modelling is three moves: turn the sentence about change into an
                equation, separate and integrate, then use the known starting
                value to pin down the constant.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
