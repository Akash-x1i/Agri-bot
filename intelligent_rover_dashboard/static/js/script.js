// Wrap everything to ensure DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Initialize Charts
    const ctx = document.getElementById('sensorChart').getContext('2d');
    const histogramCtx = document.getElementById('histogramChart').getContext('2d');

    const sensorChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                { label: 'pH', data: [], borderColor: '#2e7d32', fill: false },
                { label: 'Soil Moisture', data: [], borderColor: '#ff9800', fill: false },
                { label: 'Temperature', data: [], borderColor: '#f44336', fill: false },
                { label: 'Humidity', data: [], borderColor: '#03a9f4', fill: false },
                { label: 'IAQ', data: [], borderColor: '#9c27b0', fill: false },
                { label: 'CO₂', data: [], borderColor: '#795548', fill: false }
            ]
        },
        options: { responsive: true, animation: false, scales: { x: { title: { display: true, text: 'Time' } }, y: { beginAtZero: true } } }
    });

    const histogramChart = new Chart(histogramCtx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                { label: 'pH', data: [], backgroundColor: 'rgba(46,125,50,0.7)' },
                { label: 'Soil Moisture', data: [], backgroundColor: 'rgba(255,152,0,0.7)' },
                { label: 'Temperature', data: [], backgroundColor: 'rgba(244,67,54,0.7)' },
                { label: 'Humidity', data: [], backgroundColor: 'rgba(3,169,244,0.7)' },
                { label: 'IAQ', data: [], backgroundColor: 'rgba(156,39,176,0.7)' },
                { label: 'CO₂', data: [], backgroundColor: 'rgba(121,85,72,0.7)' }
            ]
        },
        options: { responsive: true, scales: { x: { stacked: true, title: { display: true, text: 'Value Ranges' } }, y: { stacked: true, beginAtZero: true, title: { display: true, text: 'Frequency' } } } }
    });

    const sensorReadings = { pH: [], soil_moisture: [], temperature: [], humidity: [], iaq: [], co2: [] };

    function calculateHistogram(dataArray, binCount = 5) {
        if (!dataArray.length) return { bins: [], frequencies: [] };
        const min = Math.min(...dataArray);
        const max = Math.max(...dataArray);
        const binSize = (max - min) / binCount;
        const bins = Array.from({ length: binCount }, (_, i) =>
            (min + i*binSize).toFixed(1) + '-' + (min + (i+1)*binSize).toFixed(1)
        );
        const frequencies = Array(binCount).fill(0);
        dataArray.forEach(val => {
            let index = Math.floor((val - min) / binSize);
            if (index >= binCount) index = binCount - 1;
            frequencies[index]++;
        });
        return { bins, frequencies };
    }

 function updateCharts(data) {
    const time = new Date().toLocaleTimeString();

    // Normal ranges
    const normal = {
        pH: [5.5, 7.5],
        soil_moisture: [30, 60],
        temperature: [15, 30],
        humidity: [0, 70],
        iaq: [0, 100],
        co2: [0, 1000]
    };

    // Helper to update a card
    function updateCard(id, value, range) {
        const card = document.getElementById(`card-${id}`);
        const span = document.getElementById(id);
        const rangeSpan = document.getElementById(`range-${id}`);

        span.textContent = value;
        if (rangeSpan) rangeSpan.textContent = `Normal: ${range[0]} - ${range[1]}`;

        // Set color
        if (value < range[0] || value > range[1]) card.className = "card danger";
        else if ((value < range[0] + (range[1]-range[0])*0.2 && value > range[0] - (range[1]-range[0])*0.2) ||
                 (value > range[1] - (range[1]-range[0])*0.2 && value < range[1] + (range[1]-range[0])*0.2)) {
            card.className = "card warn";
        } else {
            card.className = "card ok";
        }
    }

    // Update all sensor cards
    updateCard("ph", data.pH, normal.pH);
    updateCard("moisture", data.soil_moisture, normal.soil_moisture);
    updateCard("temp", data.temperature, normal.temperature);
    updateCard("humidity", data.humidity, normal.humidity);
    updateCard("iaq", data.iaq, normal.iaq);
    updateCard("co2", data.co2, normal.co2);

    // ----------------------
    // Line chart update
    if (sensorChart.data.labels.length >= 10) {
        sensorChart.data.labels.shift();
        sensorChart.data.datasets.forEach(ds => ds.data.shift());
        for (let key in sensorReadings) sensorReadings[key].shift();
    }

    sensorChart.data.labels.push(time);
    sensorChart.data.datasets[0].data.push(data.pH);
    sensorChart.data.datasets[1].data.push(data.soil_moisture);
    sensorChart.data.datasets[2].data.push(data.temperature);
    sensorChart.data.datasets[3].data.push(data.humidity);
    sensorChart.data.datasets[4].data.push(data.iaq);
    sensorChart.data.datasets[5].data.push(data.co2);

    // Histogram readings
    sensorReadings.pH.push(data.pH);
    sensorReadings.soil_moisture.push(data.soil_moisture);
    sensorReadings.temperature.push(data.temperature);
    sensorReadings.humidity.push(data.humidity);
    sensorReadings.iaq.push(data.iaq);
    sensorReadings.co2.push(data.co2);

    sensorChart.update();

    // Histogram chart update
    const binCount = 5;
    const allBins = [];
    const histData = Object.keys(sensorReadings).map((key, i) => {
        const { bins, frequencies } = calculateHistogram(sensorReadings[key], binCount);
        allBins.push(bins);
        return frequencies;
    });

    histogramChart.data.labels = allBins[0] || [];
    histogramChart.data.datasets.forEach((ds, i) => ds.data = histData[i]);
    histogramChart.update();
}

    function generateInsights(data) {
        const normal = { soil_moisture:[30,60], pH:[5.5,7.5], temperature:[15,30], humidity:[0,70], iaq:[0,100], co2:[0,1000] };
        const insights = [];

        if(data.soil_moisture < normal.soil_moisture[0]) insights.push("⚠️ Soil is too dry, consider irrigation.");
        else if(data.soil_moisture > normal.soil_moisture[1]) insights.push("⚠️ Soil is waterlogged, fungal risk.");
        else insights.push("✅ Soil moisture is optimal.");

        if(data.pH < normal.pH[0]) insights.push("⚠️ Soil is acidic.");
        else if(data.pH > normal.pH[1]) insights.push("⚠️ Soil is alkaline.");
        else insights.push("✅ Soil pH is good.");

        if(data.temperature < normal.temperature[0]) insights.push("⚠️ Low temperature, slow growth.");
        else if(data.temperature > normal.temperature[1]) insights.push("⚠️ High temperature, heat stress risk.");
        else insights.push("✅ Temperature is ideal.");

        if(data.humidity > normal.humidity[1]) insights.push("⚠️ High humidity, fungal risk.");
        else insights.push("✅ Humidity is acceptable.");

        if(data.iaq > normal.iaq[1]) insights.push("⚠️ Poor air quality.");
        else insights.push("✅ Air quality is good.");

        if(data.co2 > normal.co2[1]) insights.push("⚠️ High CO₂, harmful levels.");
        else insights.push("✅ CO₂ is normal.");

        const insightsList = document.getElementById("insights");
        insightsList.innerHTML = "";
        insights.forEach(msg => {
            const li = document.createElement("li");
            li.textContent = msg;
            if(msg.startsWith("✅")) li.classList.add("ok");
            else li.classList.add("warn");
            insightsList.appendChild(li);
        });
    }

    async function fetchData() {
        try {
            const response = await fetch("/api/data");
            if(!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            updateCharts(data);
            generateInsights(data);
        } catch(err) {
            console.error("Fetch error:", err);
        }
    }

    setInterval(fetchData, 5000);
    fetchData();
});
