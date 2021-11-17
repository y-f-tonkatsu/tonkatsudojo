import type {NextPage} from 'next'
import {useRouter} from "next/router";

const Groups: NextPage = () => {
    const router = useRouter();
    const {groups} = router.query;
    let calling = "";
    if (Array.isArray(groups)) {
        calling = groups.reduce((prev, current, index) => `${prev}! ${current}! `);
    } else if (typeof groups === "string") {
        calling = groups;
    }
    return (
        <div>
            {calling}
        </div>
    )
}

export default Groups
