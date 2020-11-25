import { PredictionService } from './../../services/prediction.service';
import { Component, OnInit } from '@angular/core';
import { appConfiguration } from 'src/app/config/app.config';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";



@Component({
  selector: 'app-maps',
  templateUrl: './rate-prediction.component.html',
  styleUrls: ['./rate-prediction.scss']
})
export class MapsComponent implements OnInit {

  primaryCurrencyPred: String = null;
  secondaryCurrencyPred: String = null;
  currencies: String[] = appConfiguration.supportedCurrencies;
  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;
  public colors: string[];
  constructor(private predictionService : PredictionService) {
    this.initChartData();
    console.log("Request sent");
    predictionService.getPredictionRate().subscribe(
      (response) =>
      {
        console.log("Responsive sent");
        PredictionService.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

  dataSeries = [
    [
      {
        date: "2014-01-01",
        value: 20000000
      },
      {
        date: "2014-01-02",
        value: 10379978
      },
      {
        date: "2014-01-03",
        value: 30493749
      },
      {
        date: "2014-01-04",
        value: 10785250
      },
      {
        date: "2014-01-05",
        value: 33901904
      },
      {
        date: "2014-01-06",
        value: 11576838
      },
      {
        date: "2014-01-07",
        value: 14413854
      },
      {
        date: "2014-01-08",
        value: 15177211
      },
      {
        date: "2014-01-09",
        value: 16622100
      },
      {
        date: "2014-01-10",
        value: 17381072
      },
      {
        date: "2014-01-11",
        value: 18802310
      },
      {
        date: "2014-01-12",
        value: 15531790
      },
      {
        date: "2014-01-13",
        value: 15748881
      },
      {
        date: "2014-01-14",
        value: 18706437
      },
      {
        date: "2014-01-15",
        value: 19752685
      },
      {
        date: "2014-01-16",
        value: 21016418
      },
      {
        date: "2014-01-17",
        value: 25622924
      },
      {
        date: "2014-01-18",
        value: 25337480
      },
      {
        date: "2014-01-19",
        value: 22258882
      },
      {
        date: "2014-01-20",
        value: 23829538
      },
      {
        date: "2014-01-21",
        value: 24245689
      },
      {
        date: "2014-01-22",
        value: 26429711
      },
      {
        date: "2014-01-23",
        value: 26259017
      },
      {
        date: "2014-01-24",
        value: 25396183
      },
      {
        date: "2014-01-25",
        value: 23107346
      },
      {
        date: "2014-01-26",
        value: 28659852
      },
      {
        date: "2014-01-27",
        value: 25270783
      },
      {
        date: "2014-01-28",
        value: 26270783
      },
      {
        date: "2014-01-29",
        value: 27270783
      },
      {
        date: "2014-01-30",
        value: 28270783
      },
      {
        date: "2014-01-31",
        value: 29270783
      },
      {
        date: "2014-02-01",
        value: 30270783
      },
      {
        date: "2014-02-02",
        value: 31270783
      },
      {
        date: "2014-02-03",
        value: 32270783
      },
      {
        date: "2014-02-04",
        value: 33270783
      },
      {
        date: "2014-02-05",
        value: 28270783
      },
      {
        date: "2014-02-06",
        value: 27270783
      },
      {
        date: "2014-02-07",
        value: 35270783
      },
      {
        date: "2014-02-08",
        value: 34270783
      },
      {
        date: "2014-02-09",
        value: 28270783
      },
      {
        date: "2014-02-10",
        value: 35270783
      },
      {
        date: "2014-02-11",
        value: 36270783
      },
      {
        date: "2014-02-12",
        value: 34127078
      },
      {
        date: "2014-02-13",
        value: 33124078
      },
      {
        date: "2014-02-14",
        value: 36227078
      },
      {
        date: "2014-02-15",
        value: 37827078
      },
      {
        date: "2014-02-16",
        value: 36427073
      },
      {
        date: "2014-02-17",
        value: 37570783
      },
      {
        date: "2014-02-18",
        value: 38627073
      },
      {
        date: "2014-02-19",
        value: 37727078
      },
      {
        date: "2014-02-20",
        value: 38827073
      },
      {
        date: "2014-02-21",
        value: 40927078
      },
      {
        date: "2014-02-22",
        value: 41027078
      },
      {
        date: "2014-02-23",
        value: 42127073
      },
      {
        date: "2014-02-24",
        value: 43220783
      },
      {
        date: "2014-02-25",
        value: 44327078
      },
      {
        date: "2014-02-26",
        value: 40427078
      },
      {
        date: "2014-02-27",
        value: 41027078
      },
      {
        date: "2014-02-28",
        value: 45627078
      },
      {
        date: "2014-03-01",
        value: 44727078
      },
      {
        date: "2014-03-02",
        value: 44227078
      },
      {
        date: "2014-03-03",
        value: 45227078
      },
      {
        date: "2014-03-04",
        value: 46027078
      },
      {
        date: "2014-03-05",
        value: 46927078
      },
      {
        date: "2014-03-06",
        value: 47027078
      },
      {
        date: "2014-03-07",
        value: 46227078
      },
      {
        date: "2014-03-08",
        value: 47027078
      },
      {
        date: "2014-03-09",
        value: 48027078
      },
      {
        date: "2014-03-10",
        value: 47027078
      },
      {
        date: "2014-03-11",
        value: 47027078
      },
      {
        date: "2014-03-12",
        value: 48017078
      },
      {
        date: "2014-03-13",
        value: 48077078
      },
      {
        date: "2014-03-14",
        value: 48087078
      },
      {
        date: "2014-03-15",
        value: 48017078
      },
      {
        date: "2014-03-16",
        value: 48047078
      },
      {
        date: "2014-03-17",
        value: 48067078
      },
      {
        date: "2014-03-18",
        value: 48077078
      },
      {
        date: "2014-03-19",
        value: 48027074
      },
      {
        date: "2014-03-20",
        value: 48927079
      },
      {
        date: "2014-03-21",
        value: 48727071
      },
      {
        date: "2014-03-22",
        value: 48127072
      },
      {
        date: "2014-03-23",
        value: 48527072
      },
      {
        date: "2014-03-24",
        value: 48627027
      },
      {
        date: "2014-03-25",
        value: 48027040
      },
      {
        date: "2014-03-26",
        value: 48027043
      },
      {
        date: "2014-03-27",
        value: 48057022
      },
      {
        date: "2014-03-28",
        value: 49057022
      },
      {
        date: "2014-03-29",
        value: 50057022
      },
      {
        date: "2014-03-30",
        value: 51057022
      },
      {
        date: "2014-03-31",
        value: 52057022
      },
      {
        date: "2014-04-01",
        value: 53057022
      },
      {
        date: "2014-04-02",
        value: 54057022
      },
      {
        date: "2014-04-03",
        value: 52057022
      },
      {
        date: "2014-04-04",
        value: 55057022
      },
      {
        date: "2014-04-05",
        value: 58270783
      },
      {
        date: "2014-04-06",
        value: 56270783
      },
      {
        date: "2014-04-07",
        value: 55270783
      },
      {
        date: "2014-04-08",
        value: 58270783
      },
      {
        date: "2014-04-09",
        value: 59270783
      },
      {
        date: "2014-04-10",
        value: 60270783
      },
      {
        date: "2014-04-11",
        value: 61270783
      },
      {
        date: "2014-04-12",
        value: 62270783
      },
      {
        date: "2014-04-13",
        value: 63270783
      },
      {
        date: "2014-04-14",
        value: 64270783
      },
      {
        date: "2014-04-15",
        value: 65270783
      },
      {
        date: "2014-04-16",
        value: 66270783
      },
      {
        date: "2014-04-17",
        value: 67270783
      },
      {
        date: "2014-04-18",
        value: 68270783
      },
      {
        date: "2014-04-19",
        value: 69270783
      },
      {
        date: "2014-04-20",
        value: 70270783
      },
      {
        date: "2014-04-21",
        value: 71270783
      },
      {
        date: "2014-04-22",
        value: 72270783
      },
      {
        date: "2014-04-23",
        value: 73270783
      },
      {
        date: "2014-04-24",
        value: 74270783
      },
      {
        date: "2014-04-25",
        value: 75270783
      },
      {
        date: "2014-04-26",
        value: 76660783
      },
      {
        date: "2014-04-27",
        value: 77270783
      },
      {
        date: "2014-04-28",
        value: 78370783
      },
      {
        date: "2014-04-29",
        value: 79470783
      },
      {
        date: "2014-04-30",
        value: 80170783
      }
    ]

  ];

  public initChartData(): void {



    var priorDate =  new Date(new Date().setDate(new Date().getDate() - 30));

    let ts2 = priorDate.getTime()
    let dates = [];
    for (let i = 0; i < 35; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, this.dataSeries[0][i].value]);

    }
    console.log(dates[0]);
    this.series = [
      {
        name: "Predicted",
        data: dates
      },

      {
        name: "Actual",
        data: [12, 11, 14, 18, 17, 13, 13]
      }
    ];
    this.chart = {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: "",
      align: "left"
    };
    this.fill = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      labels: {
        formatter: function (val) {
          return (val).toFixed(0);
        }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter: function (val) {
          return (val).toFixed(0);
        }
      }
    };
  }

}
