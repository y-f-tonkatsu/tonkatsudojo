export type DojoScript = (canvasID: string) => void;

export type Work = {
    id: string,
    title: string,
    script: DojoScript,
    width: number,
    height: number
}