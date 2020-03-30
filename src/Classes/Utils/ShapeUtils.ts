import type { Particle } from "../Particle";
import type { IShapeDrawer } from "../../Interfaces/IShapeDrawer";

export class ShapeUtils {
    private static readonly drawers: { [type: string]: IShapeDrawer } = {};

    public static addShapeDrawer(type: string, drawer: IShapeDrawer): void {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    }

    public static drawShape(context: CanvasRenderingContext2D,
        particle: Particle,
        radius: number): void {

        if (!particle.shape) {
            return;
        }

        const drawer = this.drawers[particle.shape];

        if (!drawer) {
            return;
        }

        const drawerData = drawer.createData();

        drawerData.particle = particle;
        drawerData.radius = radius;

        if (drawer && drawerData) {
            drawer.draw(context, drawerData);
        }
    }
}
