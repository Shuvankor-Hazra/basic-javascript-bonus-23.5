const nayok = {
    name: "Sakib khan",
    id: 121,
    address: "Movie cinema",
    isSingle: true,
    friends: ["Apu", "Raj", "Salman", "amir"],
    movies: [{name:"No-1", year: 2015}, {name: "King Khan", year: 2018}],
    act: function(){
        console.log("Acting like Sakib Khan");
    },
    car: {
        brand:"Tesla",
        price: 5000000,
        made: 2025,
        manufacturers: {
            name: "Tesla",
            ceo: "Elon Mask",
            country: "USA",
        }
    }
}
// console.log(student.car);
console.log(nayok.act);
nayok.act();



