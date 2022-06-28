/**
 * Created by Clement Caylux on 28/06/2022
 */

import {useQueryResult, WidgetPluginProps} from "@activeviam/activeui-sdk";
import {Spin} from "antd";
import React, {FC} from "react";

export const Map: FC<WidgetPluginProps> = (props) => {

    const {data, error, isLoading} = useQueryResult({
        serverKey:"my-server",
        queryId: "abc",
        query: {
            mdx: `SELECT
           [Countries].[Country].[Country_Name].Members ON ROWS,
           Crossjoin(
             [Green-growth].[Year].[Year].Members,
             [Measures].[Real GDP per capita (USD).MEAN]
           ) ON COLUMNS
           FROM [Green-growth]`
        }
    })

    console.log(isLoading);

    if (isLoading) {
        return <Spin/>
    }

    if (error) {
        return <div>{error.stackTrace}</div>
    }

    if (!data) {
        return null;
    }

// HERE we use data.axes!
    const [columnsAxis, rowsAxis] = data.axes;
    const numberOfColumns = columnsAxis.positions.length;

    return (
        <table>
            <tr>
                <th />
                // The header represents the members of the columns axis (the years).
                {columnsAxis.positions.map((position, columnIndex) => (
                    <th key={columnIndex}>{position[0].captionPath[0]}</th>
                ))}
            </tr>
            {rowsAxis.positions.map((position, rowIndex) => {
                const tableCells: JSX.Element[] = [];

                // the first column represents the members of the rows axis (the countries)
                tableCells.push(<td key={0}>{position[0].captionPath[2]}</td>);

                for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                    const cellIndex = rowIndex * numberOfColumns + columnIndex;
                    // HERE we use data.cells!
                    const dataCell = data.cells[cellIndex];

                    tableCells.push(
                        <td key={columnIndex + 1}>{dataCell?.formattedValue}</td>,
                    );
                }

                return <tr key={rowIndex}>{tableCells}</tr>;
            })}
        </table>
    );
}