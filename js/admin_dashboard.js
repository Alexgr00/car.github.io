// Sidebar Toggle
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// ------ Charts ------

// Bar Charts
var barChartOptions = {
    series: [{
    data: [10, 8, 6, 4, 2, ]
    }],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#246dec",
        "#cc3c43",
        "#367952",
        "#f5b74f",
        "#4f35a1"
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    xaxis: {
        categories: ['porsche 911', 'Lamborghini Spyder', 'Audi E-tron GT', 'Mercedes Benz Maybach', 'Mini Cooper John',
        ],
    },
    yaxis: {
        title: {
            text: "Count"
        }
    }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// AREA Chart
var areaChartOptions = {
    series: [{
        name: 'Purchase Orders',
        data: [32, 40, 28, 52, 42, 110, 100]
        }, {
        name: 'Sales Orders',
        data: [12, 32, 46, 32, 34, 52, 42]
    }],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#4f35a1", "#246dec",
    ],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul'],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Purchase Orders',
            },
            },
            {
            opposite: true,
            title: {
                text: 'Sales Orders',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();