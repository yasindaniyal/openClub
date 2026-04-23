document.addEventListener("DOMContentLoaded", () => {
    // -------------------- REVENUE CHART --------------------
    const revenueChartOptions = {
        series: [
            {
                name: "Revenue",
                data: [15400, 12200, 18600, 14500, 21000, 19200, 23400],
            },
        ],
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: false,
            },
            fontFamily: "'Helvetica Neue', sans-serif",
            background: "transparent",
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                borderRadius: 8,
                borderRadiusApplication: "around",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: ["#8B5CF6"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0.8,
                stops: [0, 100],
            },
            colors: ["#A855F7"],
        },
        grid: {
            borderColor: "#374151",
            strokeDashArray: 4,
            padding: {
                left: 20,
                right: 20,
            },
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#acacac",
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#acacac",
                    fontSize: "12px",
                },
                formatter: function (val) {
                    return "$" + val.toLocaleString();
                },
            },
        },
        tooltip: {
            theme: "dark",
            x: {
                show: true,
            },
            y: {
                formatter: function (val) {
                    return "$" + val.toLocaleString();
                },
            },
        },
        colors: ["#A855F7"],
    };

    const revenueChartContainer = document.querySelector("#revenue-chart");
    if (revenueChartContainer) {
        const revenueChart = new ApexCharts(
            revenueChartContainer,
            revenueChartOptions,
        );
        revenueChart.render();

        // Data Mockup
        const chartData = {
            week: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                data: [15400, 12200, 18600, 14500, 21000, 19200, 23400],
            },
            month: {
                categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
                data: [85000, 92000, 78000, 105000],
            },
            year: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                data: [
                    320000, 350000, 310000, 380000, 420000, 400000, 450000, 480000,
                    430000, 410000, 460000, 520000,
                ],
            },
        };

        const filterSelect = document.getElementById("revenue-filter-select");
        if (filterSelect) {
            filterSelect.addEventListener("change", (e) => {
                const selected = e.target.value;
                const newData = chartData[selected];

                revenueChart.updateOptions({
                    xaxis: {
                        categories: newData.categories,
                    },
                    series: [
                        {
                            data: newData.data,
                        },
                    ],
                });
            });
        }
    }

    // -------------------- RECENT RESERVATIONS --------------------
    const reservationsData = [
        {
            guest: "Michael Chen",
            section: "VIP 1",
            partySize: 12,
            minSpend: "$2,000",
            status: "confirmed",
        },
        {
            guest: "Sarah Jenkins",
            section: "VIP 3",
            partySize: 18,
            minSpend: "$3,500",
            status: "arrived",
        },
        {
            guest: "David Rodriguez",
            section: "Booth 2",
            partySize: 6,
            minSpend: "$1,000",
            status: "pending",
        },
    ];

    const reservationsList = document.getElementById(
        "recent-reservations-list",
    );

    function renderReservations() {
        if (!reservationsList) return;

        if (!reservationsList) return;

        reservationsList.innerHTML = reservationsData
            .map((res) => {
                return `
        <div class="dashboard-table-row">
          <div class="guest-info">
            <span class="guest-name">${res.guest}</span>
          </div>
          <div class="dashboard-table-cell">${res.section}</div>
          <div class="dashboard-table-cell">${res.partySize}</div>
          <div class="dashboard-table-cell">${res.minSpend}</div>
          <div class="status-cell">
            <span class="status-pill status-${res.status}">
              ${res.status}
            </span>
          </div>
        </div>
      `;
            })
            .join("");
    }

    renderReservations();
});