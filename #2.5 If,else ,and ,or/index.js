const age = prompt("Ask something");

//console.log(age);

if (age >= 18 && age <= 21) {
    console.log(`u can drink but u should not`);
} else if (age > 21) {
    console.log(`go a head`);
} else {
    console.log(`too young`);
}