document.addEventListener('DOMContentLoaded', () => {
    const chart = Highcharts.chart('chart-container', {
        title: { text: 'Динамика показателя' },
        xAxis: { categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'] },
        yAxis: { title: { text: '' } },
        series: [{ name: 'Показатель', data: [] }]
    });

    const rows = document.querySelectorAll('#data-table .row:not(.header)');

    document.addEventListener('click', (e) => {

        rows.forEach(row => row.classList.remove('active'));

        if(e.target.closest('#data-table .row:not(.header)')) {
            const target = e.target.parentNode;
            const values = JSON.parse(target.dataset.values);
            const title = target.querySelector('.cell').innerText;
    
            chart.update({
                title: { text: `Динамика: ${title}` },
                series: [{ name: title, data: values }]
            });

            target.classList.add('active');
        }
    })
    

});
