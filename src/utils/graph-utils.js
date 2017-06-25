export default class GraphUtils {
  chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
  };

  Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() {
    this.srand(Date.now());
    this.merge = Chart.helpers.configMerge; // eslint-disable-line no-undef
  }

  randomScalingFactor() { // eslint-disable-line class-methods-use-this
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  }

  srand(seed) {
    this._seed = seed;
  }

  rand(min = 0, max = 1) {
    const seed = this._seed;
    this._seed = ((seed * 9301) + 49297) % 233280;
    return min + ((this._seed / 233280) * (max - min));
  }

  numbers(config) {
    const cfg = config || {};
    const min = cfg.min || 0;
    const max = cfg.max || 1;
    const from = cfg.from || [];
    const count = cfg.count || 8;
    const decimals = cfg.decimals || 8;
    const continuity = cfg.continuity || 1;
    const dfactor = Math.pow(10, decimals) || 0; // eslint-disable-line no-restricted-properties
    const data = [];
    let i;
    let value;

    for (i = 0; i < count; i + 1) {
      value = (from[i] || 0) + this.rand(min, max);
      if (this.rand() <= continuity) {
        data.push(Math.round(dfactor * value) / dfactor);
      } else {
        data.push(null);
      }
    }

    return data;
  }

  labels(config) { // eslint-disable-line class-methods-use-this
    const cfg = config || {};
    const min = cfg.min || 0;
    const max = cfg.max || 100;
    const count = cfg.count || 8;
    const step = (max - min) / count;
    const decimals = cfg.decimals || 8;
    const dfactor = Math.pow(10, decimals) || 0; // eslint-disable-line no-restricted-properties
    const prefix = cfg.prefix || '';
    const values = [];
    let i;

    for (i = min; i < max; i += step) {
      values.push(prefix + (Math.round(dfactor * i) / dfactor));
    }

    return values;
  }
  months(config) {
    const cfg = config || {};
    const count = cfg.count || 12;
    const section = cfg.section;
    const values = [];
    let i;
    let value;

    for (i = 0; i < count; i + 1) {
      value = this.Months[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }

    return values;
  }

  transparentize(color, opacity) { // eslint-disable-line class-methods-use-this
    const alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return Chart.helpers.color(color).alpha(alpha).rgbString();  // eslint-disable-line no-undef
  }

}
