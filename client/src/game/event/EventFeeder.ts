export interface EventFeeder {
    feed(event: string, payload: string): void;
}