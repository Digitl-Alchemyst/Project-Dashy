import { useTheme, } from '@mui/material';
import { tokens } from "../theme";
import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../data/mockData";

const PieChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

            <ResponsivePie
                data={data}
                theme={{
                    axis: {
                      domain: {
                        line: {
                          stroke: colors.grey[100],
                        },
                      },
                      legend: {
                        text: {
                          fill: colors.grey[100],
                        },
                      },
                      ticks: {
                        line: {
                          stroke: colors.grey[100],
                          strokeWidth: 1,
                        },
                        text: {
                          fill: colors.grey[100],
                        },
                      },
                    },
                    legends: {
                      text: {
                        fill: colors.grey[100],
                      },
                    },
                  }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                startAngle={-13}
                sortByValue={true}
                innerRadius={0.55}
                cornerRadius={6}
                activeOuterRadiusOffset={7}
                colors={{ scheme: 'dark2' }}
                borderWidth={2}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '0.4'
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={6}
                arcLinkLabelsTextOffset={8}
                arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
                arcLinkLabelsOffset={-12}
                arcLinkLabelsDiagonalLength={22}
                arcLinkLabelsStraightLength={26}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsRadiusOffset={0.45}
                arcLabelsSkipAngle={6}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '1.9'
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 7,
                        translateY: 41,
                        itemsSpacing: 4,
                        itemWidth: 97,
                        itemHeight: 10,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 20,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />

        )
    };

    export default PieChart;