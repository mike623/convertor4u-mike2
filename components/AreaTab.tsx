"use client";
import { useReducer } from "react";
import { InputField } from "./InputField";
import {
  footToMeter,
  inchToMeter,
  meterToFoot,
  meterToInch,
  meterToYard,
  yardToMeter,
} from "./meterToYard";
import { BiArea } from "react-icons/bi";

const meterSqToYardSq = (meterSq: number) => Math.pow(meterToYard(meterSq), 2);
const meterSqToInchSq = (meterSq: number) => Math.pow(meterToInch(meterSq), 2);
const meterSqToFootSq = (meterSq: number) => Math.pow(meterToFoot(meterSq), 2);

const reducer = (
  state: typeof iniState,
  action: { type: string; payload: string }
) => {
  let meterSq, yardSq, inchSq, footSq;
  switch (action.type) {
    case "meterSq":
      meterSq = action.payload;
      let _meterSq = parseFloat(meterSq) || 0;
      yardSq = meterSqToYardSq(_meterSq);
      inchSq = meterSqToInchSq(_meterSq);
      footSq = meterSqToFootSq(_meterSq);
      return { ...state, meterSq, yardSq, inchSq, footSq };
    case "yardSq":
      yardSq = action.payload;
      let _yardSq = parseFloat(yardSq) || 0;
      meterSq = yardToMeter(Math.sqrt(_yardSq));
      inchSq = meterSqToInchSq(meterSq);
      footSq = meterSqToFootSq(meterSq);
      return { ...state, meterSq, yardSq, inchSq, footSq };
    case "inchSq":
      inchSq = action.payload;
      let _inchSq = parseFloat(inchSq) || 0;
      meterSq = inchToMeter(Math.sqrt(_inchSq));
      yardSq = meterSqToYardSq(meterSq);
      footSq = meterSqToFootSq(meterSq);
      return { ...state, meterSq, yardSq, inchSq, footSq };
    case "footSq":
      footSq = action.payload;
      let _footSq = parseFloat(footSq) || 0;
      meterSq = footToMeter(Math.sqrt(_footSq));
      yardSq = meterSqToYardSq(meterSq);
      inchSq = meterSqToInchSq(meterSq);
      return { ...state, meterSq, yardSq, inchSq, footSq };
    default:
      return state;
  }
};
const iniState: {
  meterSq: string | number;
  yardSq: string | number;
  inchSq: string | number;
  footSq: string | number;
} = {
  meterSq: "",
  yardSq: "",
  inchSq: "",
  footSq: "",
};

export const AreaTab = () => {
  const [state, dispatch] = useReducer(reducer, iniState);

  return (
    <div className="page-area">
      <h3 className="flex items-center">
        <BiArea />
        <div className="ml-2">Area</div>
      </h3>
      <div className="mt-4"></div>
      <InputField
        label="square meter, m²"
        value={state.meterSq}
        onChange={(e) => {
          dispatch({ type: "meterSq", payload: e.target.value });
        }}
      />
      <div className="mt-4">
        <InputField
          label="square yard, yd²"
          value={state.yardSq}
          onChange={(e) =>
            dispatch({ type: "yardSq", payload: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <InputField
          label={
            <>
              square inch, in<sup>2</sup>
            </>
          }
          value={state.inchSq}
          onChange={(e) =>
            dispatch({ type: "inchSq", payload: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <InputField
          label={
            <>
              square foot, ft<sup>2</sup>
            </>
          }
          value={state.footSq}
          onChange={(e) =>
            dispatch({ type: "footSq", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};
