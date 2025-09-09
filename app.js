let informasjonsteknologi1 = {
    spraak: ["HTML", "CSS"],
    likerFaget: false,
    timetall: 5,
    klasserom: "c14",
    antallElever: 24
};

// 1a
informasjonsteknologi1.spraak.push("JavaScript");

// 1b
informasjonsteknologi1.timetall = 67;

//1c
informasjonsteknologi1.likerFaget = true;

//1d
delete informasjonsteknologi1.timetall;

//1e
Object(informasjonsteknologi1.spraak).forEach((value) => {
    console.log(value);
});

//1f
for (const [key, value] of Object.entries(informasjonsteknologi1)) {
    console.log(`${key}`);
}

//1g
for (const [key, value] of Object.entries(informasjonsteknologi1)) {
    console.log(`${key}: ${value}`);
}