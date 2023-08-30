"use client";
import { useReducer } from "react";
import { InputField } from "./InputField";

import { BsCupFill, BsFillCupFill } from "react-icons/bs";

const mlToPint = (ml: number) => ml / 473.176;
const mlToGallon = (ml: number) => ml / 3785.41;
const pintToMl = (pint: number) => pint * 473.176;
const gallonToMl = (gallon: number) => gallon * 3785.41;

const reducer = (
  state: typeof iniState,
  action: { type: string; payload: string }
) => {
  let ml, pint, gallon;
  switch (action.type) {
    case "ml":
      ml = action.payload;
      let _ml = parseFloat(ml) || 0;
      pint = mlToPint(_ml);
      gallon = mlToGallon(_ml);
      return { ...state, ml, pint, gallon };
    case "pt":
      pint = action.payload;
      let _pint = parseFloat(pint) || 0;
      ml = pintToMl(_pint);
      gallon = mlToGallon(ml);
      return { ...state, ml, pint, gallon };
    case "gal":
      gallon = action.payload;
      let _gallon = parseFloat(gallon) || 0;
      ml = gallonToMl(_gallon);
      pint = mlToPint(ml);
      return { ...state, ml, pint, gallon };
    default:
      return state;
  }
};
const iniState: {
  ml: string | number;
  pint: string | number;
  gallon: string | number;
} = {
  ml: "",
  pint: "",
  gallon: "",
};

export const LiquidTab = () => {
  const [state, dispatch] = useReducer(reducer, iniState);

  return (
    <div className="page-liquid">
      <h3 className="flex items-center">
        <BsCupFill />
        <div className="ml-2">Area</div>
      </h3>
      <div className="mt-4"></div>
      <InputField
        label="milliliter, ml"
        value={state.ml}
        onChange={(e) => {
          dispatch({ type: "ml", payload: e.target.value });
        }}
      />
      <div className="mt-4">
        <InputField
          label="pint, pt"
          value={state.pint}
          onChange={(e) =>
            dispatch({ type: "pt", payload: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <InputField
          label={'gallon, gal'}
          value={state.gallon}
          onChange={(e) =>
            dispatch({ type: "gal", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};
