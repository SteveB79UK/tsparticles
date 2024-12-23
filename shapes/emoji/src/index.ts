import { type Engine, assertValidVersion } from "@tsparticles/engine";
import { EmojiDrawer } from "./EmojiDrawer.js";

declare const __VERSION__: string;

/**
 * @param engine -
 * @param refresh -
 */
export async function loadEmojiShape(engine: Engine, refresh = true): Promise<void> {
    assertValidVersion(engine, __VERSION__);

    await engine.addShape(new EmojiDrawer(), refresh);
}
