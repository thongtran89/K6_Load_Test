import http from "k6/http";
import { check } from "k6";
// Common requests params
const API_URL = "https://dev-apim-we-integration-integrationapim1.azure-api.net";


export function sampleJava(){
    // Get sample Java 
    let getSampleJava = http.get(
        `${API_URL}/sample-java-api/}`
    );
    
    check(
        getSampleJava,
        { "Status code is 200": (r) => r.status == 200 }
    );
}
export function requiredUsers(){
    // Get required users
    let getRequiredUsers = http.get(
        `${API_URL}/is-required/users}`
    );
    
    check(
        getRequiredUsers,
        { "Status code is 200": (r) => r.status == 200 }
    );
}