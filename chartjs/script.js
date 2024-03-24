document.getElementById('chart').width = window.innerWidth;
var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S1', 'S2', 'S3', 'S4'],
        datasets: [
            {
                data: [
                    [new Date('2021-09-11T00:00:01'), new Date('2021-09-11T00:00:10')],
                    [new Date('2021-09-11T00:00:00'), new Date('2021-09-11T00:00:11')],
                    null,
                    [new Date('2021-09-11T00:00:00'), new Date('2021-09-11T00:00:11')],
                ],
                label: 'O1'
            },
            {
                data: [
                    [new Date('2021-09-11T00:00:02'), new Date('2021-09-11T00:00:07')],
                    [new Date('2021-09-11T00:01:01'), new Date('2021-09-11T00:01:07')],
                    [new Date('2021-09-11T00:01:01'), new Date('2021-09-11T00:01:07')],
                    null,
                ],
                label: 'O2'
            },
            {
                data: [
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                    null,
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                ],
                label: 'O3'
            },
            {
                data: [
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                    null,
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                ],
                label: 'O4'
            },
            {
                data: [
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                    null,
                    [new Date('2021-09-11T00:01:09'), new Date('2021-09-11T00:02:01')],
                ],
                label: 'O5'
            },
        ],
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Event Timeline'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label;
                    },
                    afterLabel: function (context) {
                        var start = context.dataset.data[context.dataIndex][0];
                        var end = context.dataset.data[context.dataIndex][1];
                        var a = moment(start).format("YYYY-MM-DD h:mm:ss a");
                        var b = moment(end).format("YYYY-MM-DD h:mm:ss a");
                        return a + " to " + b;
                    }
                }
            }
        },
        scales: {
            y: {
                stacked: false
            },
            x: {
                type: 'time',
                time: {
                    unit: 'second'
                },
                min: new Date('2021-09-11T00:00:00'),
                max: new Date('2021-09-11T00:02:11')
            }
        },
        maintainAspectRatio: false
    }
});
