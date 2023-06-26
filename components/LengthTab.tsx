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
  action: { type: string; payload: string }
) => {
  let meter, yard, inch, foot;
  switch (action.type) {
    case "meter":
      meter = action.payload;
      const _meter = parseFloat(meter) || 0;
      yard = meterToYard(_meter);
      inch = meterToInch(_meter);
      foot = meterToFoot(_meter);
      return { ...state, meter, yard, inch, foot };
    case "yard":
      yard = action.payload;
      const _yard = parseFloat(yard) || 0;
      meter = yardToMeter(_yard);
      inch = meterToInch(meter);
      foot = meterToFoot(meter);
      return { ...state, meter, yard, inch, foot };
    case "inch":
      inch = action.payload;
      const _inch = parseFloat(inch) || 0;
      meter = inchToMeter(_inch);
      yard = meterToYard(meter);
      foot = meterToFoot(meter);
      return { ...state, meter, yard, inch, foot };
    case "foot":
      foot = action.payload;
      const _foot = parseFloat(foot) || 0;
      meter = footToMeter(_foot);
      yard = meterToYard(meter);
      inch = meterToInch(meter);
      return { ...state, meter, yard, inch, foot };
    default:
      return state;
  }
};
const iniState: {
  meter: string | number;
  yard: string | number;
  inch: string | number;
  foot: string | number;
} = {
  meter: "",
  yard: "",
  inch: "",
  foot: "",
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
          value={state.meter}
          onChange={(e) => {
            dispatch({ type: "meter", payload: e.target.value });
          }}
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <InputField
          label="yard, yd"
          value={state.yard}
          onChange={(e) => {
            dispatch({ type: "yard", payload: e.target.value });
          }}
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <InputField
          label="inch, in"
          value={state.inch}
          onChange={(e) => {
            dispatch({ type: "inch", payload: e.target.value });
          }}
          placeholder="123.0"
        />
      </div>
      <div className="mt-4">
        <InputField
          label="foot, ft"
          value={state.foot}
          onChange={(e) => {
            dispatch({ type: "foot", payload: e.target.value });
          }}
          placeholder="123.0"
        />
      </div>
    </div>
  );
};
