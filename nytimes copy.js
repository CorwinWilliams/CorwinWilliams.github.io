let promise = fetch(
    "`https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${date}&api-key=XIsecIAL8LvuSlGBE9XAEnGjoSDMjOAD`",
    {
        method: "GET",
    }
);

promise.then((response) => {
    console.log(response.status);

    let promise2 = response.text();
    promise2.then((text) => {
        console.log(text);
    });
});
