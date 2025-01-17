export let apiConfiguration = {
    exchangeRateHost: "http://localhost:8080",
    authenticationHost: "http://localhost:8081",
    predictionHost: "http://localhost:5000",
    actualHost: "http://localhost:5000",
    previousPredictionHost: "http://localhost:5000",
    usersLoginRoute: "/api/users/login",
    usersRegistrationRoute: "/api/users/register",
    exchangeRateRoute: "/api/exchange_rates",
    exchangeRateForRangeRoute: "/api/exchange_rates/best_worst",
    lastMonthRoute : "/api/exchange_rates/last_month",
    predictionRoute: "/predict",
    actualRoute: "/actual",
    previousPredictionRoute: "/pastRates"

}
