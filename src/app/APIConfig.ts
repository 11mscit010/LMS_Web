export class APIConfig {
    static baseUrl = "https://localhost:44366";
    static DecodeJWTToken(token: any) {
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        return JSON.parse(decodedJwtJsonData);
    };
}