import {DojoScript, Work} from "../../types/DojoScript";
import {prefixes} from "next/dist/build/output/log";

const script: DojoScript = canvasID => {

    const canvas = <HTMLCanvasElement>document.getElementById(canvasID);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const [ScreenX, ScreenY] = ["width", "height"].map(attr => parseInt(canvas.getAttribute(attr) || "300"));
    const MaxDelta = 10;

    const looper = (onTick: (delta: number, timeStamp: number) => void) => {
        let prev = 0;
        const f = (timeStamp: number) => {
            const delta = Math.min(timeStamp - prev, MaxDelta);
            prev = timeStamp;
            onTick(delta, timeStamp);
            requestAnimationFrame(f);
        }
        f(0);
    }

    const random = () => Math.random() - 0.5;

    let t = 0;
    let [x, y] = [ScreenX * 0.5, ScreenY * 0.5];
    let [speedX, speedY] = [5, 5];
    let color: number[] = [1, 1, 1, 1];
    ctx.lineWidth = 0.1;
    const strokeRandomness = 100;
    looper((delta, timeStamp) => {

        ctx.beginPath();
        color = color.map(v => {
            v += (Math.random() - 0.5) * 0.1;
            v = Math.min(v, 1);
            v = Math.max(v, 0);
            return v;
        })

        ctx.strokeStyle = `rgba(
            ${Math.floor(color[0] * 255)},
            ${Math.floor(color[1] * 255)},
            ${Math.floor(color[2] * 255)},
            ${color[3]}
        )`;


        const [dx, dy] = [speedX, speedY].map(speed => random() * speed);
        const [gx, gy] = [x + dx, y + dy];

        for (let i = 0; i < 10; i++) {
            ctx.moveTo(x + random() * strokeRandomness * 0.1, y + random() * strokeRandomness*0.1);
            [x, y] = [x, y].map(v => Math.max(v, 0));
            x = Math.min(x, ScreenX);
            y = Math.min(y, ScreenY);
            ctx.lineTo(gx + random() * strokeRandomness, gy + random() * strokeRandomness);
        }

        [x, y] = [gx, gy]
        ctx.stroke();
        ctx.closePath();
    });

};

const work: Work = {
    id: "001",
    title: "ランダムウォーク1",
    script: script,
    width: 300,
    height: 300,
};

export default work;