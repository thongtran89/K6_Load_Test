// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = { maxRedirects: 4 };

// Test setup
export let options = {
    stages: [
        { duration: '3m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
        { duration: '2m', target: 100 }, // stay at 100 users for 10 minutes.
        { duration: '1m', target: 0 }, // ramp-down to 0 users.
    ]
};

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    baseUrl: "https://simple-grocery-store-api-testing.glitch.me/"
  }
});

export default function() {
  postman[Request]({
    name: "GET with URL Params",
    id: "89c7dfe8-33e3-442e-844d-f40b2a981085",
    method: "GET",
    address: "http://httpbin.org/get?lol=true",
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });

      pm.test("Response contains params", function() {
        let data = pm.response.json();
        pm.expect(data.args.lol).to.eql("true");
      });
    }
  });

  postman[Request]({
    name: "POST with JSON body",
    id: "0354e53a-5ea7-42f7-a7ff-64fea7b60689",
    method: "POST",
    address: "http://httpbin.org/post",
    data: '{\n    "something": "cool"\n}',
    headers: {
      "Content-Type": "application/json"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });

      pm.test("Check POST param in response", function() {
        let data = pm.response.json();
        pm.expect(data.json.something).to.eql("cool");
      });
    }
  });

  postman[Request]({
    name: "DELETE request",
    id: "4169453f-3784-4501-a6bb-8543be1ae376",
    method: "DELETE",
    address: "http://httpbin.org/delete",
    data: {},
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "PUT with form data",
    id: "5464ad8f-da55-47fc-90c8-350d80b97e46",
    method: "PUT",
    address: "http://httpbin.org/put",
    data: {
      quotient: "223"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });

      pm.test("Test form data", function() {
        let data = pm.response.json();
        pm.expect(data.form.quotient).to.eql("223");
      });
    }
  });
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
}
