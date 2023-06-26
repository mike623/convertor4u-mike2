"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useReducer } from "react";
import { AiOutlineColumnWidth } from "react-icons/ai";
import {
  meterToYard,
  meterToInch,
  meterToFoot,
  yardToMeter,
  inchToMeter,
  footToMeter,
} from "./meterToYard";
import { InputField } from "./InputField";

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
    <div className="page-length ">
      <h3 className="flex items-center">
        <AiOutlineColumnWidth />
        <div className="ml-2">Length</div>
      </h3>
      <div className="mt-4"></div>
      <div>
        <InputField
          label="meter, m"
          value={state.meter.toFixed(2)}
          onChange={(e) => {
            dispatch({ type: "meter", payload: +e.target.value });
          }}
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <InputField
          label="yard, yd"
          value={state.yard.toFixed(2)}
          onChange={(e) => {
            dispatch({ type: "yard", payload: +e.target.value });
          }}
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <InputField
          label="inch, in"
          value={state.inch.toFixed(2)}
          onChange={(e) => {
            dispatch({ type: "inch", payload: +e.target.value });
          }}
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <InputField
          label="foot, ft"
          value={state.foot.toFixed(2)}
          onChange={(e) => {
            dispatch({ type: "foot", payload: +e.target.value });
          }}
          placeholder="123.0"
        />
      </div>
    </div>
  );
};
