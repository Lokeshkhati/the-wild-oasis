import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { prepareData, startDataDark, startDataLight } from "./constant";

const ChartBox = styled.div`

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const DurationChart = ({ confirmedStays }) => {
    const { isDarkMode } = useDarkMode();
    const startData = isDarkMode ? startDataDark : startDataLight;
    const data = prepareData(startData, confirmedStays);

    return (
        <ChartBox>
            <Heading as="h2">Stay duration summary</Heading>
            <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                    <Pie
                        data={data}
                        nameKey="duration"
                        dataKey="value"
                        innerRadius={85}
                        outerRadius={110}
                        cx="40%"
                        cy="50%"
                        paddingAngle={3}
                    >
                        {data.map((entry) => (
                            <Cell
                                fill={entry.color}
                                stroke={entry.color}
                                key={entry.duration}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                        verticalAlign="middle"
                        align="right"
                        width="30%"
                        layout="vertical"
                        iconSize={15}
                        iconType="circle"
                    />
                </PieChart>
            </ResponsiveContainer>
        </ChartBox>
    );
}

export default DurationChart;