import Bee from 'bee-queue';

import CreateOrderMail from '@jobs/CreateOrderMail';
import redisConfig from '@config/redis';

import { JobInterface } from '@typings/types';

const jobs: JobInterface[] = [CreateOrderMail];

class Queue {
  queues: { [key: string]: { bee: Bee; handle(data: unknown): Promise<void> } };

  constructor() {
    this.queues = {};
    this.init();
  }

  init(): void {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(key: string, job: unknown): void {
    this.queues[key].bee.createJob(job).save();
  }

  processQueue(): void {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];
      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job: Bee.Job, err: Error): void {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
