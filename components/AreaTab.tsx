"use client";
import { useReducer } from "react";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { InputField } from "./InputField";
import {
  footToMeter,
  inchToMeter,
  meterToFoot,
  meterToInch,
  meterToYard,
  yardToMeter,
} from "./meterToYard";

const meterSqToYardSq = (meterSq: number) => Math.pow(meterToYard(meterSq), 2);
const meterSqToInchSq = (meterSq: number) => Math.pow(meterToInch(meterSq), 2);
const meterSqToFootSq = (meterSq: number) => Math.pow(meterToFoot(meterSq), 2);

const reducer = (
  state: typeof iniState,
  action: { type: string; payload: number }
) => {
  let meterSq, yardSq, inchSq, footSq;
  switch (action.type) {
    case "meterSq":
      meterSq = action.payload;
      yardSq = meterSqToYardSq(meterSq);
      inchSq = meterSqToInchSq(meterSq);
      footSq = meterSqToFootSq(meterSq);
      return { ...state, meterSq, yardSq, inchSq, footSq };
    case "yardSq":
      yardSq = action.payload;
      meterSq = yardToMeter(Math.sqrt(yardSq));
      inchSq = meterSqToInchSq(meterSq);
      footSq = meterSqToFootSq(meterSq);
      return { ...state, meterSq, yardSq, inchSq, footSq };
    case "inchSq":
      inchSq = action.payload;
      meterSq = inchToMeter(Math.sqrt(inchSq));
      yardSq = meterSqToYardSq(meterSq);
      footSq = meterSqToFootSq(meterSq);
      return { ...state, meterSq, yardSq, inchSq, footSq };
    case "footSq":
      footSq = action.payload;
      meterSq = footToMeter(Math.sqrt(footSq));
      yardSq = meterSqToYardSq(meterSq);
      inchSq = meterSqToInchSq(meterSq);
      return { ...state, meterSq, yardSq, inchSq, footSq };
    default:
      return state;
  }
};
const iniState = {
  meterSq: 0,
  yardSq: 0,
  inchSq: 0,
  footSq: 0,
};

export const AreaTab = () => {
  const [state, dispatch] = useReducer(reducer, iniState);

  return (
    <div className="page-area">
      <h3 className="flex items-center">
        <AiOutlineColumnWidth />
        <div className="ml-2">Area</div>
      </h3>
      <div className="mt-4"></div>
      <InputField
        label="square meter, m²"
        value={state.meterSq.toFixed(2)}
        onChange={(e) =>
          dispatch({ type: "meterSq", payload: Number(e.target.value) })
        }
      />
      <div className="mt-4">
        <InputField
          label="square yard, yd²"
          value={state.yardSq.toFixed(2)}
          onChange={(e) =>
            dispatch({ type: "yardSq", payload: Number(e.target.value) })
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
          value={state.inchSq.toFixed(2)}
          onChange={(e) =>
            dispatch({ type: "inchSq", payload: Number(e.target.value) })
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
          value={state.footSq.toFixed(2)}
          onChange={(e) =>
            dispatch({ type: "footSq", payload: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
};
