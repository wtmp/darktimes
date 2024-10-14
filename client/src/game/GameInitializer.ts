import {SpriteFactoryManager} from "./scene/SpriteFactoryManager";

export class GameFactoryInitializer {
    preload(): void {
        const spriteFactories = new SpriteFactoryManager();
        spriteFactories.registerFactory("player", )
    }
}