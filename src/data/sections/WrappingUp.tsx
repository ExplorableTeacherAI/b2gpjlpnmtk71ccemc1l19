import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph } from "@/components/atoms";

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
