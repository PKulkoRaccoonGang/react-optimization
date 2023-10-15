const numberOfDataPoints = 5000;

function createChartComponent() {
    return {
        id: Math.random().toString(),
        data: [...new Array(numberOfDataPoints)].map((_, index) => ({
            ts: index,
            value: Math.random() * 10
        }))
    };
}

export function createData() {
    return {
        lines: [createChartComponent(), createChartComponent()],
        areas: [createChartComponent(), createChartComponent()]
    };
}
