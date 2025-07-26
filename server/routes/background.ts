import { Hono } from "jsr:@hono/hono";
import { validator } from "jsr:@hono/hono/validator";
import backgroundsHandlers from "../handlers/background.ts";
import dnd from "../../types/dnd/index.ts";

const backgrounds = new Hono();

const backgroundsKeys = Object.keys(dnd.backgrounds2014);

backgrounds.get("/", backgroundsHandlers.getAll);

backgrounds.get(
  "/:backgroundName",
  validator("param", (value, c) => {
    const { backgroundName } = value;

    if (
      !backgroundName ||
      typeof backgroundName !== "string" ||
      !backgroundsKeys.includes(backgroundName)
    ) {
      return c.text(
        `Background name invalid. Valid backgrounds: ${backgroundsKeys.join(", ")} `,
        400
      );
    }

    return {
      backgroundName: backgroundName
    }
  }),
  backgroundsHandlers.getByBackgroundName
);

export default backgrounds;
