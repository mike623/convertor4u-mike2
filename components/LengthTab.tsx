"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useReducer } from "react";
import { AiOutlineColumnWidth } from "react-icons/ai";

const meterToYard = (meter: number) => meter * 1.0936;
const meterToInch = (meter: number) => meter * 39.37;
const meterToFoot = (meter: number) => meter * 3.2808;
const yardToMeter = (yard: number) => yard / 1.0936;
const inchToMeter = (inch: number) => inch / 39.37;
const footToMeter = (foot: number) => foot / 3.2808;

const reducer = (
  state: typeof iniState,
  action: { type: string; payload: number }
) => {
  let meter, yard, inch, foot;
  switch (action.type) {
    case "meter":
      meter = action.payload;
      yard = meterToYard(meter);
      inch = meterToInch(meter);
      foot = meterToFoot(meter);
      return { ...state, meter, yard, inch, foot };
    case "yard":
      yard = action.payload;
      meter = yardToMeter(yard);
      inch = meterToInch(meter);
      foot = meterToFoot(meter);
      return { ...state, meter, yard, inch, foot };
    case "inch":
      inch = action.payload;
      meter = inchToMeter(inch);
      yard = meterToYard(meter);
      foot = meterToFoot(meter);
      return { ...state, meter, yard, inch, foot };
    case "foot":
      foot = action.payload;
      meter = footToMeter(foot);
      yard = meterToYard(meter);
      inch = meterToInch(meter);
      return { ...state, meter, yard, inch, foot };
    default:
      return state;
  }
};
const iniState = {
  meter: 0,
  yard: 0,
  inch: 0,
  foot: 0,
};
export const LengthTab = () => {
  const [state, dispatch] = useReducer(reducer, iniState);
  return (
    <div className="[&_input]:text-stone-800">
      <h3 className="flex items-center">
        <AiOutlineColumnWidth />
        <div className="ml-2">Length</div>
      </h3>
      <div className="mt-4"></div>
      <div>
        <Label>meter, m</Label>
        <Input
          value={state.meter.toFixed(2)}
          onChange={(e) => {
            dispatch({ type: "meter", payload: +e.target.value });
          }}
          type="text"
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <Label>yard, yd</Label>
        <Input
          onChange={(e) => {
            dispatch({ type: "yard", payload: +e.target.value });
          }}
          value={state.yard.toFixed(2)}
          type="number"
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <Label>inch, in</Label>
        <Input
          value={state.inch.toFixed(2)}
          onChange={(e) => {
            dispatch({ type: "inch", payload: +e.target.value });
          }}
          type="number"
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <Label>foot, ft,</Label>
        <Input
          value={state.foot.toFixed(2)}
          onChange={(e) => {
            dispatch({ type: "foot", payload: +e.target.value });
          }}
          type="number"
          placeholder="123.0"
        />
      </div>
    </div>
  );
};
