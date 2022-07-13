import React, { useState } from "react";
import Instructions from "./Instructions";
import Game from "./Game";
import EnterName from "./EnterName";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(./bg.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    position: "fixed",
  },
  sub: {
    margin: 20,
  },
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [name, setName] = useState("");
  return (
    <>
      <div className={classes.main}>
        <div className={classes.sub}>
          {!name ? (
            <EnterName setName={setName} />
          ) : !value ? (
            <Instructions setValue={setValue} name={name} />
          ) : (
            <Game setValue={setValue} setName={setName} name={name} />
          )}
        </div>
      </div>
    </>
  );
};
