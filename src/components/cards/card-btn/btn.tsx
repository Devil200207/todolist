import { CardBtnProp } from "../../../interfaces/cardbtn-interface";

import style from "./style.module.scss";

export const CardBtn: React.FunctionComponent<CardBtnProp> = ({
  eventFunc,
  txt,
  color,
}) => {
  return (
    <button onClick={eventFunc} className={`${style.btn_bigger} btn ${color}`}>
      {txt}
    </button>
  );
};
