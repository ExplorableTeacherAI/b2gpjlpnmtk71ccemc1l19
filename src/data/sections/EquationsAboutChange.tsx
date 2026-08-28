import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { CoolingCurveExplorer } from "./visuals/CoolingCurveExplorer";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

export const equationsAboutChangeBlocks: ReactElement[] = [
    <StackLayout key="layout-change-heading" maxWidth="xl">
        <Block id="change-heading" padding="md">
            <EditableH2 id="h2-change-heading" blockId="change-heading">
                Equations About Change
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-change-idea" maxWidth="xl">
        <Block id="change-idea" padding="sm">
            <EditableParagraph id="para-change-idea" blockId="change-idea">
                The drink loses heat faster when it is far hotter than the room,
                so its rate of cooling depends on its own temperature. Written
                down, that is <InlineFormula latex="\frac{dT}{dt} = -k(T - 20)" />.
                An equation like this is a rule for change, not a value. Set the
                starting temperature and the constant{" "}
                <InlineFormula latex="k" /> below and watch the rule draw a whole
                curve.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-change-visual" maxWidth="xl">
        <Block id="change-visual" padding="sm" hasVisualization>
            <CoolingCurveExplorer />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-change-solution-meaning" maxWidth="xl">
        <Block id="change-solution-meaning" padding="sm">
            <EditableParagraph id="para-change-solution-meaning" blockId="change-solution-meaning">
                Notice that the curve steepens when the drink is far above 20
                degrees and flattens as it gets close. Solving the equation means
                finding the function that behaves this way at every moment, not
                finding a single number.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-change-practice-rate" maxWidth="xl">
        <Block id="change-practice-rate" padding="sm">
            <MultipleChoiceQuestion
                prompt="A different drink starts at 90°C in the same 20°C room, with k = 0.10. How fast is it cooling at the instant it is poured?"
                options={[
                    {
                        id: "seven",
                        label: "7 °C per minute",
                        correct: true,
                    },
                    {
                        id: "nine",
                        label: "9 °C per minute",
                        feedback:
                            "That used the full 90 degrees. The rule multiplies k by the gap above room temperature, not by the temperature itself — set the starting temperature to 90 and k to 0.10 above and read the cooling rate at time 0.",
                    },
                    {
                        id: "point-one",
                        label: "0.10 °C per minute",
                        feedback:
                            "That is k on its own. Try k = 0.10 with a starting temperature of 90 above and compare the cooling rate shown at time 0 with the gap above 20 degrees.",
                    },
                    {
                        id: "steady",
                        label: "It cools at the same steady rate the whole time",
                        feedback:
                            "Drag the time slider from 0 to 20 minutes above and watch the cooling rate shrink — the rate depends on how hot the drink still is.",
                    },
                ]}
                correctFeedback="Correct. The gap above room temperature is 70 degrees, and the rule multiplies that gap by k, giving 0.10 × 70 = 7 °C per minute."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-block-1787910462860" maxWidth="xl">
        <Block id="block-1787910462860" padding="sm">
            <EditableParagraph id="para-block-1787910462860" blockId="block-1787910462860">A drink starts at 80 in the same 20 room with k=0.10,</EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-change-practice-solution" maxWidth="xl">
        <Block id="change-practice-solution" padding="sm">
            <MultipleChoiceQuestion
                prompt="Two drinks in this room are given the same k but different starting temperatures. What do their solutions have in common?"
                options={[
                    {
                        id: "same-limit",
                        label: "Both level off at 20 °C, but they approach it from different heights",
                        correct: true,
                    },
                    {
                        id: "same-curve",
                        label: "They give exactly the same curve, since k is the same",
                        feedback:
                            "Set the starting temperature to 40, then to 90, keeping k fixed, and compare the two curves above.",
                    },
                    {
                        id: "cross",
                        label: "The hotter drink ends up cooler than the other one",
                        feedback:
                            "Try a high and a low starting temperature above with the same k and follow both curves to 30 minutes before deciding.",
                    },
                    {
                        id: "below-room",
                        label: "Both keep falling below 20 °C if you wait long enough",
                        feedback:
                            "Slide the time out to 30 minutes above and look at where the curve sits relative to the dashed line.",
                    },
                ]}
                correctFeedback="Correct. The starting temperature sets where the curve begins; k sets how quickly the gap above 20 °C closes, and that gap never quite reaches zero."
            />
        </Block>
    </StackLayout>,
];
