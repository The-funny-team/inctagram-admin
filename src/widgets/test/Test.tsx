import { Button } from "@leetvin/ui-kit";
import s from "./Test.module.scss";

export const Test = () => {
  return (
    <div className={s.wrapper}>
      TEST
      <Button variant={"tertiary"}>TEST</Button>
      <Button variant={"secondary"}>TEST</Button>
      <Button variant={"link"}>TEST</Button>
    </div>
  );
};
