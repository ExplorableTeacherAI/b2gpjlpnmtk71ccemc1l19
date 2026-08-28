import { Cartesian2D, Slider } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";

const ROOM_TEMPERATURE = 20;

/**
 * Cooling drink explorer — the curve is generated from the rate rule
 * dT/dt = -k(T - 20), so changing the starting temperature or the cooling
 * rate constant redraws the whole solution.
 */
export const CoolingCurveExplorer = () => {
    const startTemperature = useVar("coolingStartTemperature", 80) as number;
    const rateConstant = useVar("coolingRateConstant", 0.12) as number;
    const readoutTime = useVar("coolingReadoutTime", 5) as number;
    const setVar = useSetVar();

    const temperatureAt = (t: number) =>
        ROOM_TEMPERATURE + (startTemperature - ROOM_TEMPERATURE) * Math.exp(-rateConstant * t);

    const readoutTemperature = temperatureAt(readoutTime);

    return (
        <div className="w-full">
            <Cartesian2D
                height={340}
                viewBox={{ x: [0, 30], y: [0, 100] }}
                subdivisions={false}
                plots={[
                    {
                        type: "segment",
                        point1: [0, ROOM_TEMPERATURE],
                        point2: [30, ROOM_TEMPERATURE],
                        color: "#94A3B8",
                        style: "dashed",
                    },
                    {
                        type: "function",
                        fn: temperatureAt,
                        color: "#D81B60",
                        weight: 3,
                        domain: [0, 30],
                    },
                    {
                        type: "point",
                        x: readoutTime,
                        y: readoutTemperature,
                        color: "#43A047",
                    },
                ]}
            />

            <div className="mt-4 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div>
                    <div className="mb-1 flex justify-between text-sm text-slate-700">
                        <span>Starting temperature</span>
                        <span className="font-semibold">{startTemperature}&deg;C</span>
                    </div>
                    <Slider
                        value={[startTemperature]}
                        min={30}
                        max={95}
                        step={1}
                        onValueChange={([value]) => setVar("coolingStartTemperature", value)}
                    />
                </div>

                <div>
                    <div className="mb-1 flex justify-between text-sm text-slate-700">
                        <span>How fast heat escapes (k)</span>
                        <span className="font-semibold">{rateConstant.toFixed(2)}</span>
                    </div>
                    <Slider
                        value={[rateConstant]}
                        min={0.02}
                        max={0.4}
                        step={0.01}
                        onValueChange={([value]) => setVar("coolingRateConstant", value)}
                    />
                </div>

                <div>
                    <div className="mb-1 flex justify-between text-sm text-slate-700">
                        <span>Time on the curve</span>
                        <span className="font-semibold">{readoutTime} min</span>
                    </div>
                    <Slider
                        value={[readoutTime]}
                        min={0}
                        max={30}
                        step={0.5}
                        onValueChange={([value]) => setVar("coolingReadoutTime", value)}
                    />
                </div>

                <div className="text-sm text-slate-700">
                    At {readoutTime} min the drink is{" "}
                    <span className="font-semibold text-rose-600">
                        {readoutTemperature.toFixed(1)}&deg;C
                    </span>
                    , and it is cooling at{" "}
                    <span className="font-semibold text-blue-600">
                        {(rateConstant * (readoutTemperature - ROOM_TEMPERATURE)).toFixed(2)}&deg;C
                    </span>{" "}
                    per minute. Room temperature is the dashed line at 20&deg;C.
                </div>
            </div>
        </div>
    );
};
