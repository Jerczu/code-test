import {IDisplayTable} from "./DisplayTable";
import React, {FC} from "react";

export const TableHeading:FC<Omit<IDisplayTable,'tableData'>> = ({headings})=>(
    <thead>
        <tr>
            {
                headings?.map((item,index )=>(
                    <th key={item.headingValue?.replace(' ','_').toLowerCase()}>{item.headingValue}</th>
                ))
            }
        </tr>
    </thead>
)