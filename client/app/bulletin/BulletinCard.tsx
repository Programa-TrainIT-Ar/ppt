import type {Bulletin} from "~/bulletin/type";
import {Card} from "primereact/card";
import React from "react";

interface Props {
    bulletin: Bulletin
}

const BulletinCard: React.FC<Props> = ({bulletin}) => {
    return <Card title={bulletin.title} subTitle={bulletin.scheme} style={{width:'100%'}}>
        <p className="m-0">
            {bulletin.content}
        </p>
    </Card>
}


export default BulletinCard