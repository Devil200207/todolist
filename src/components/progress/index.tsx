import { ProgressBarProps } from "../../interfaces/progress-interface";
import style from "./style.module.scss";

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  const progressWidth = (value / max) * 100;

  return (
    <div className={style.progressBar}>
      <div className={style.progress} style={{ width: `${progressWidth}%` }} />
    </div>
  );
};
