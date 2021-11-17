import style from "../styles/PlayGround.module.css"
import React, {useEffect} from "react";
import {Work} from "../types/DojoScript";

export default function PlayGround({work}: { work: Work }) {

    useEffect(() => {
        work.script(work.id);
    })

    return (
        <div>
            <h3>{work.title}</h3>
            <canvas className={style.canvas} id={work.id} width={work.width} height={work.height}>
                No Canvas Support
            </canvas>
        </div>
    )
}