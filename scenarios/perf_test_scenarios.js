import {sampleJava, requiredUsers} from '../scripts/perf_test_scripts.js'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
// Common things

// Test setup
export let options = {
    stages: [
        { duration: '30s', target: 5 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
        { duration: '20s', target: 5 }, // stay at 100 users for 10 minutes.
        { duration: '10s', target: 0 }, // ramp-down to 0 users.
    ]
};

// Test scenario
export default function () {
    // Get Sample Java
    sampleJava()
    // Get required users
    requiredUsers()
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
}