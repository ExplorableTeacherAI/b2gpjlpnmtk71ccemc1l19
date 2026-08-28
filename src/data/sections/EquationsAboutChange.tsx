import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

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
                An equation like this is a rule for change, not a value. Solving
                it means finding the whole function it describes. So what does a
                solution to such an equation actually look like?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-change-visual" maxWidth="xl">
        <Block id="change-visual" padding="sm">
            <VisualOptionCards
                blockId="change-visual"
                intro="Pick how your students will meet the idea of a differential equation and its solution."
                cards={[
                    {
                        id: "cooling-curve",
                        title: "A cooling drink whose graph is drawn from its own rate rule",
                        looks: "A temperature-against-time graph that grows out from the starting temperature, flattening towards room temperature.",
                        manipulate: "Students set the starting temperature and how fast heat escapes, then watch the curve redraw.",
                        reveals: "One simple rule about the rate of change produces one complete curve.",
                        recommended: true,
                    },
                    {
                        id: "candidate-check",
                        title: "A candidate function tested against the equation",
                        looks: "A short list of possible functions, with the two sides of the equation shown side by side for whichever one is chosen.",
                        manipulate: "Students try each candidate in turn and see whether the two sides agree.",
                        reveals: "A solution is a function that makes the equation true, not a single number.",
                    },
                    {
                        id: "slope-field",
                        title: "A field of little slope arrows with a curve threaded through them",
                        looks: "A grid of short tilted dashes showing the required steepness at every point, with one curve following them.",
                        manipulate: "Students drag the starting point and watch a new curve follow the same arrows.",
                        reveals: "The equation fixes the steepness everywhere, and the starting point picks out one curve from many.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-change-solution-meaning" maxWidth="xl">
        <Block id="change-solution-meaning" padding="sm">
            <EditableParagraph id="para-change-solution-meaning" blockId="change-solution-meaning">
                A solution is a function. Put it and its derivative back into the
                equation and both sides agree, for every value of the variable.
                The task ahead is to build that function rather than guess it.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
