import { Cartesian2D, Slider, InlineFormula } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";

const ROOM_TEMPERATURE = 20;

/**
 * Modelling lab: the solved particular solution T = 20 + Ae^(-kt) is used to
 * predict when the drink reaches a chosen drinkable temperature.
 */
export const CoolingModelLab = () => {
    const startTemperature = useVar("modelStartTemperature", 85) as number;
    const rateConstant = useVar("modelRateConstant", 0.08) as number;
    const targetTemperature = useVar("modelTargetTemperature", 55) as number;
    const setVar = useSetVar();

    const amplitude = startTemperature - ROOM_TEMPERATURE;
    const temperatureAt = (t: number) =>
        ROOM_TEMPERATURE + amplitude * Math.exp(-rateConstant * t);

    const targetGap = targetTemperature - ROOM_TEMPERATURE;
    const reachable = targetGap > 0 && targetGap < amplitude;
    const waitingTime = reachable ? Math.log(amplitude / targetGap) / rateConstant : null;

    return (
        <div className="w-full">
            <div className="mb-2 text-center">
                <InlineFormula
                    latex={`T = 20 + ${amplitude}e^{-${rateConstant.toFixed(2)}t}`}
                />
            </div>

            <Cartesian2D
                height={320}
                viewBox={{ x: [0, 40], y: [0, 100] }}
                subdivisions={false}
                plots={[
                    {
                        type: "segment",
                        point1: [0, ROOM_TEMPERATURE],
                        point2: [40, ROOM_TEMPERATURE],
                        color: "#94A3B8",
                        style: "dashed",
                    },
                    {
                        type: "segment",
                        point1: [0, targetTemperature],
                        point2: [40, targetTemperature],
                        color: "#43A047",
                        style: "dashed",
                    },
                    {
                        type: "function",
                        fn: temperatureAt,
                        color: "#D81B60",
                        weight: 3,
                        domain: [0, 40],
                    },
                    ...(waitingTime !== null && waitingTime <= 40
                        ? ([
                            {
                                type: "point" as const,
                                x: waitingTime,
                                y: targetTemperature,
                                color: "#43A047",
                            },
                        ])
                        : []),
                ]}
            />

            <div className="mt-4 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div>
                    <div className="mb-1 flex justify-between text-sm text-slate-700">
                        <span>Pouring temperature</span>
                        <span className="font-semibold">{startTemperature}&deg;C</span>
                    </div>
                    <Slider
                        value={[startTemperature]}
                        min={40}
                        max={95}
                        step={1}
                        onValueChange={([value]) => setVar("modelStartTemperature", value)}
                    />
                </div>

                <div>
                    <div className="mb-1 flex justify-between text-sm text-slate-700">
                        <span>Cooling rate constant k</span>
                        <span className="font-semibold">{rateConstant.toFixed(2)}</span>
                    </div>
                    <Slider
                        value={[rateConstant]}
                        min={0.02}
                        max={0.3}
                        step={0.01}
                        onValueChange={([value]) => setVar("modelRateConstant", value)}
                    />
                </div>

                <div>
                    <div className="mb-1 flex justify-between text-sm text-slate-700">
                        <span>Drinkable at</span>
                        <span className="font-semibold">{targetTemperature}&deg;C</span>
                    </div>
                    <Slider
                        value={[targetTemperature]}
                        min={25}
                        max={80}
                        step={1}
                        onValueChange={([value]) => setVar("modelTargetTemperature", value)}
                    />
                </div>

                <div className="rounded-md bg-white p-3 text-sm text-slate-700">
                    {waitingTime === null ? (
                        targetGap <= 0
                            ? "No drink in this room ever falls to room temperature or below, so that target is never reached."
                            : "The drink is already at or below that temperature when poured."
                    ) : (
                        <>
                            The pouring temperature fixes the constant at{" "}
                            <span className="font-semibold text-rose-600">{amplitude}</span>, and
                            the drink reaches {targetTemperature}&deg;C after{" "}
                            <span className="font-semibold text-emerald-700">
                                {waitingTime.toFixed(1)} minutes
                            </span>
                            .
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
