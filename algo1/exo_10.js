// 10.FooBar
// Affichez les nombres de 1 à 100, pour les multiples
// de 5 vous afficherez "bar", pour les multiples de 3 vous
// afficherez "foo" et pour les multiples de 3 et de 5 vous
// afficherez "foobar".

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i, "foobar");
    }
    else if (i % 3 == 0) {
        console.log(i, "foo");
    }
    else if (i % 5 == 0) {
        console.log(i, "bar");
    }
    else {
        console.log("%d", i);
    }
    if (i < 100) {
        console.log(' ');
    }
}