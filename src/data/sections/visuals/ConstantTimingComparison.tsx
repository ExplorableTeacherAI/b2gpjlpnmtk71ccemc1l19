import { Cartesian2D, Slider, Button, InlineFormula } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";

/**
 * Two candidate answers to dy/dx = xy shown on the same axes: the constant
 * multiplied in at the integration step, and the constant added on at the end.
 * Both are tested against the original equation at a chosen x.
 */
export const ConstantTimingComparison = () => {
    const constant = useVar("constantOfIntegrationValue", 1) as number;
    const checkPoint = useVar("constantCheckPoint", 1) as number;
    const version = useVar("constantVersion", "multiplied") as string;
    const setVar = useSetVar();

    const multiplied = (x: number) => constant * Math.exp((x * x) / 2);
    const added = (x: number) => Math.exp((x * x) / 2) + constant;

    const isMultiplied = version === "multiplied";
    const chosen = isMultiplied ? multiplied : added;

    // dy/dx for each candidate, worked out exactly
    const derivative = isMultiplied
        ? constant * checkPoint * Math.exp((checkPoint * checkPoint) / 2)
        : checkPoint * Math.exp((checkPoint * checkPoint) / 2);
    const requiredSlope = checkPoint * chosen(checkPoint);
    const matches = Math.abs(derivative - requiredSlope) < 1e-9;

    return (
        <div className="w-full">
            <div className="mb-3 flex flex-wrap gap-2">
                <Button
                    size="sm"
                    variant={isMultiplied ? "default" : "outline"}
                    onClick={() => setVar("constantVersion", "multiplied")}
                >
                    Constant multiplied in
                </Button>
                <Button
                    size="sm"
                    variant={isMultiplied ? "outline" : "default"}
                    onClick={() => setVar("constantVersion", "added")}
                >
                    Constant added at the end
                </Button>
            </div>

            <div className="mb-2 text-center">
                <InlineFormula
                    latex={
                        isMultiplied
                            ? "y = Ae^{x^2/2}"
                            : "y = e^{x^2/2} + A"
                    }
                />
            </div>

            <Cartesian2D
                height={320}
                viewBox={{ x: [0, 2], y: [0, 10] }}
                subdivisions={false}
                plots={[
                    {
                        type: "function",
                        fn: multiplied,
                        color: isMultiplied ? "#8E24AA" : "#CBD5E1",
                        weight: isMultiplied ? 3 : 2,
                        domain: [0, 2],
                    },
                    {
                        type: "function",
                        fn: added,
                        color: isMultiplied ? "#CBD5E1" : "#8E24AA",
                        weight: isMultiplied ? 2 : 3,
                        domain: [0, 2],
                    },
                    {
                        type: "point",
                        x: checkPoint,
                        y: chosen(checkPoint),
                        color: "#43A047",
                    },
                ]}
            />

            <div className="mt-4 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div>
                    <div className="mb-1 flex justify-between text-sm text-slate-700">
                        <span>Constant A</span>
                        <span className="font-semibold">{constant.toFixed(1)}</span>
                    </div>
                    <Slider
                        value={[constant]}
                        min={0.5}
                        max={3}
                        step={0.1}
                        onValueChange={([value]) => setVar("constantOfIntegrationValue", value)}
                    />
                </div>

                <div>
                    <div className="mb-1 flex justify-between text-sm text-slate-700">
                        <span>Test the equation at x</span>
                        <span className="font-semibold">{checkPoint.toFixed(1)}</span>
                    </div>
                    <Slider
                        value={[checkPoint]}
                        min={0.2}
                        max={2}
                        step={0.1}
                        onValueChange={([value]) => setVar("constantCheckPoint", value)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-md bg-white p-3">
                        <div className="text-slate-500">Slope of this curve</div>
                        <div className="font-semibold text-slate-800">{derivative.toFixed(3)}</div>
                    </div>
                    <div className="rounded-md bg-white p-3">
                        <div className="text-slate-500">Slope the equation demands (xy)</div>
                        <div className="font-semibold text-slate-800">{requiredSlope.toFixed(3)}</div>
                    </div>
                </div>

                <div
                    className={`rounded-md p-3 text-sm ${matches
                        ? "bg-emerald-50 text-emerald-800"
                        : "bg-amber-50 text-amber-900"
                        }`}
                >
                    {matches
                        ? "The two slopes agree at every x you test, for every value of A. This answer solves the equation."
                        : "The two slopes disagree, and the gap is exactly xA. Adding the constant one line too late breaks the equation."}
                </div>
            </div>
        </div>
    );
};
