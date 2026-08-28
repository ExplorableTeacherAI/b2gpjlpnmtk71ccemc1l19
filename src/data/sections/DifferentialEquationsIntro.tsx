import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH1, EditableParagraph } from "@/components/atoms";

export const differentialEquationsIntroBlocks: ReactElement[] = [
    <StackLayout key="layout-intro-title" maxWidth="xl">
        <Block id="intro-title" padding="md">
            <EditableH1 id="h1-intro-title" blockId="intro-title">
                Differential Equations
            </EditableH1>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-intro-hook" maxWidth="xl">
        <Block id="intro-hook" padding="sm">
            <EditableParagraph id="para-intro-hook" blockId="intro-hook">
                Leave a hot chocolate on your desk and it cools fast at first,
                then slower and slower, until it settles at room temperature.
                Nobody hands you a formula for its temperature. What you can
                describe is how fast it is cooling at any moment — and it turns
                out that is enough to recover the whole story.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-intro-promise" maxWidth="xl">
        <Block id="intro-promise" padding="sm">
            <EditableParagraph id="para-intro-promise" blockId="intro-promise">
                An equation that describes a rate of change is called a
                differential equation. By the end of this lesson you will solve
                the most useful kind, the first order separable equation, and
                use it to model a real situation. The one tool you need is
                integration of powers of x and of 1 over x, which you already
                have.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
