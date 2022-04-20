const message = {
    sendTo: "DriverName",
    sender: "UserName",
    detailMessage: "hello",
}

const paymentMethod = {
    name: "PaymentName",
    paymentDetails: "Details"
}

const ride = {
    tripId : 0,
    pickUpLocation: "",
    whereTo: "",
    driverName: ""
}

const profile = {
    name: "Ricardo",
    userRating: "4.7",
    messages: [message],
    payment: [paymentMethod],
    trips: [ride],
    uberOne: function(){
        return "Subscribe to Uber One"
    }
}

console.log(profile.uberOne())
console.log(profile)
