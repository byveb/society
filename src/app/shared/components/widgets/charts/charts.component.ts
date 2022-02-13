import { UIChart } from 'primeng/chart';
import { WidgetChart } from '@app/models/widget';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'widget-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  data: any;
  chartOptions: any;

  width: string = "300px";
  height: string = "300px";
  type: string = "doughnut";

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  chartPlugins = [
    {
      beforeDraw: function (chart: any, args: any, options: any) {
        if (chart.config.options.elements && chart.config.options.elements.center) {
          // Get ctx from string
          var ctx = chart.ctx;

          // Get options from the center object in options
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = centerConfig.fontStyle || 'Arial';
          var txt = centerConfig.text;
          var color = centerConfig.color || '#000';
          var maxFontSize = centerConfig.maxFontSize || 75;
          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
          // Start with a base font of 30px
          ctx.font = "16px " + fontStyle;

          // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          var stringWidth = ctx.measureText(txt).width;
          var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = (chart.innerRadius * 2);

          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
          var minFontSize = centerConfig.minFontSize;
          var lineHeight = centerConfig.lineHeight || 25;
          var wrapText = false;

          if (minFontSize === undefined) {
            minFontSize = 20;
          }

          if (minFontSize && fontSizeToUse < minFontSize) {
            fontSizeToUse = minFontSize;
            wrapText = true;
          }

          // Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = fontSizeToUse + "px " + fontStyle;
          ctx.fillStyle = color;

          if (!wrapText) {
            ctx.fillText(txt, centerX, centerY);
            return;
          }

          var line = '';
          var lines = [];
          var words = txt.split(' ');

          // Break words up into multiple lines if necessary
          for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > elementWidth && n > 0) {
              lines.push(line);
              line = words[n] + ' ';
            } else {
              line = testLine;
            }
          }

          // Move the center up depending on line height and number of lines
          centerY -= (lines.length / 2) * lineHeight;

          for (var n = 0; n < lines.length; n++) {
            ctx.fillText(lines[n], centerX, centerY);
            centerY += lineHeight;
          }
          //Draw text in center
          ctx.fillText(line, centerX, centerY);
        }
      },
    }
  ];

  @Input() context: WidgetChart | undefined;

  @ViewChild("chartElement") chartElement: UIChart | undefined;

  ngOnInit(): void {
    this.data = {
      labels: ["Empty", "New", "In progress", "In review", "Resolved"],
      datasets: [
        {
          borderWidth: 0,
          borderRadius: 0,
          data: [-1, 0, 0, 0, 0],
          backgroundColor: [
            "#EFF3F8",
            "#23A95E",
            "#FFCE56",
            "#7254F3",
            "#495057"
          ],
          hoverBackgroundColor: [
            "#EFF3F8",
            "#23A95E",
            "#FFCE56",
            "#7254F3",
            "#495057"
          ]
        }
      ]
    };

    this.chartOptions = {
      cutout: 85,
      elements: {
        center: {
          text: '2 total',
          color: '#FF6384',
          lineHeight: 25,
          sidePadding: 20,
          maxFontSize: 16,
          minFontSize: 14,
          fontStyle: "Lato, Helvetica, sans-serif",
        }
      },
      plugins: {
        tooltip: {
          enabled: false
        },
        legend: {
          display: true,
          onClick: (e: any) => e.stopPropagation(),
          labels: {
            padding: 15,
            pointStyle: "circle",
            usePointStyle: true,
            font: {
              family: "Lato, Helvetica, sans-serif"
            },
            filter: function (legendItem: any, chartData: any) {
              return chartData.datasets[0].data[legendItem.index] > -1;
            },
            generateLabels: this.generateLabels
          },
          position: "right"
        }
      },
      responsive: true,
    };
  }

  generateLabels(chart: any) {
    const data = chart.data;
    if (data.labels.length && data.datasets.length) {
      const { labels: { pointStyle } } = chart.legend.options;

      return data.labels.map((label: any, i: any) => {
        const meta = chart.getDatasetMeta(0);
        const style = meta.controller.getStyle(i);
        const labVal = meta.controller.getLabelAndValue(i);
        const findexVal = (labVal.value == -1) ? 0 : labVal.value;
        return {
          text: `${findexVal} ${labVal.label}`,
          fillStyle: style.backgroundColor,
          strokeStyle: style.borderColor,
          lineWidth: style.borderWidth,
          pointStyle: pointStyle,
          display: false,
          hidden: !chart.getDataVisibility(i),
          index: i
        };
      });
    }
    return [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes["items"].currentValue) {
      this.updateComponent();
    }
  }

  ngAfterViewInit(): void {

  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {

  }
}
