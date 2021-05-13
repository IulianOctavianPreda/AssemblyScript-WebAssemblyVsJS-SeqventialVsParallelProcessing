import { timer } from '@ip/benchmark/glue/performance-counter';

import { IMetrics } from './../interfaces/metrics.interface';

export class Metrics implements IMetrics {
    loadTime = new Map<string, number | string>();
    computingTime = new Map<string, number | string>();
    startTime: number | undefined;

    constructor(public arrayLength: number) {}
    start() {
        this.startTime = timer().now();
    }
    stop() {
        return (timer().now() - (this.startTime ? this.startTime : 0)).toFixed(3);
    }
}
