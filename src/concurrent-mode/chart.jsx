import {Area, CartesianGrid, ComposedChart, Line, Tooltip, XAxis, YAxis} from "recharts";
import React, {useMemo} from "react";

export default function Chart({data}) {
    console.log("Rendering chart");

    return (
        <ComposedChart
            width={500}
            height={400}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }}
        >
            <CartesianGrid stroke="#f5f5f5"/>
            <XAxis dataKey="ts" type="number"/>
            <YAxis/>
            <Tooltip/>
            {useMemo(
                () =>
                    data.areas.map((area) => (
                        <Area
                            data={area.data}
                            dataKey="value"
                            isAnimationActive={false}
                            key={area.id}
                            type="monotone"
                            fill="#8884d8"
                            stroke="#8884d8"
                        />
                    )),
                [data.areas]
            )}
            {useMemo(
                () =>
                    data.lines.map((line) => (
                        <Line
                            data={line.data}
                            dataKey="value"
                            isAnimationActive={false}
                            key={line.id}
                            type="monotone"
                            stroke="#ff7300"
                        />
                    )),
                [data.lines]
            )}
        </ComposedChart>
    );
}
