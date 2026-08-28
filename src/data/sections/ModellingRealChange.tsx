import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { CoolingModelLab } from "./visuals/CoolingModelLab";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

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
                you pour at fixes <InlineFormula latex="A" />. Use the model
                below to predict how long the wait is before the drink is
                drinkable.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-modelling-visual" maxWidth="xl">
        <Block id="modelling-visual" padding="sm" hasVisualization>
            <CoolingModelLab />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-modelling-transfer" maxWidth="xl">
        <Block id="modelling-transfer" padding="sm">
            <EditableParagraph id="para-modelling-transfer" blockId="modelling-transfer">
                Modelling is three moves: turn the sentence about change into an
                equation, separate and integrate, then use the known starting
                value to pin down the constant. The same three moves run
                bacteria counts and radioactive decay, with only the sign of{" "}
                <InlineFormula latex="k" /> changing.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-modelling-practice-prediction" maxWidth="xl">
        <Block id="modelling-practice-prediction" padding="sm">
            <MultipleChoiceQuestion
                prompt="A tea is poured at 70°C in the same 20°C room and cools with k = 0.05. Its particular solution is T = 20 + 50e^(-0.05t). Roughly how long until it reaches 45°C?"
                options={[
                    {
                        id: "fourteen",
                        label: "About 14 minutes",
                        correct: true,
                    },
                    {
                        id: "five",
                        label: "About 5 minutes",
                        feedback:
                            "Set the pouring temperature to 70, k to 0.05 and the drinkable temperature to 45 above, then read the waiting time the model gives.",
                    },
                    {
                        id: "twentyfive",
                        label: "25 minutes, because it must lose 25 degrees at one degree a minute",
                        feedback:
                            "That assumes a steady rate. Watch the curve above flatten as the drink approaches room temperature — the loss slows down.",
                    },
                    {
                        id: "never",
                        label: "It never reaches 45°C",
                        feedback:
                            "The drink settles at 20°C, so anything above 20 is reached eventually. Try these values above and see where the green line meets the curve.",
                    },
                ]}
                correctFeedback="Correct. The gap above room temperature must fall from 50 to 25, which halves it, and that takes ln 2 divided by 0.05, close to 14 minutes."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-modelling-practice-setup" maxWidth="xl">
        <Block id="modelling-practice-setup" padding="sm">
            <MultipleChoiceQuestion
                prompt="A bacterial culture grows at a rate proportional to the number of bacteria present. Here is one student's full answer. Is it correct?"
                proposedAnswer={
                    <div className="space-y-2">
                        <div>
                            Rate proportional to the amount present gives{" "}
                            <InlineFormula latex="\frac{dN}{dt} = kN" />.
                        </div>
                        <div>
                            Separating and integrating:{" "}
                            <InlineFormula latex="\int \frac{1}{N}\,dN = \int k\,dt" />, so{" "}
                            <InlineFormula latex="\ln N = kt + C" />.
                        </div>
                        <div>
                            Taking exponentials:{" "}
                            <InlineFormula latex="N = Ae^{kt}" />, where{" "}
                            <InlineFormula latex="A" /> is the number of bacteria at the start.
                        </div>
                    </div>
                }
                options={[
                    {
                        id: "yes",
                        label: "Yes, the answer is correct",
                        correct: true,
                    },
                    {
                        id: "no",
                        label: "No, there is a mistake in it",
                        feedback:
                            "Check each line in turn. The rate carries a factor of N as the sentence demands, each letter is gathered with its own differential, the constant appears at the integration step, and exponentials turn that constant into a multiplier. Every step holds up.",
                    },
                ]}
                correctFeedback="Correct. The model matches the sentence, the variables are separated before integrating, the constant appears on the integration line, and exponentials turn it into the multiplier A, which is the starting population."
            />
        </Block>
    </StackLayout>,
];
