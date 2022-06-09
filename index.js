const apiURL = 'https://jsonplaceholder.typicode.com/users';

fetch(apiURL)
    .then(response => response.json())
    .then((data) => {
        const arrayFilter = data.map((value) => {
            const { name, username, email, address, website, company } = value;
            const filter = {
                name, username, email, address, website, company
            };
            return filter;
        });
        console.log('array filtrado', arrayFilter);
        data.forEach((element, index) => {
            const content = document.getElementById('content');
            content.insertAdjacentHTML('beforeend', fillCards(element, index + 1));
        });
    })
    .catch(error => console.error(error));

const fillCards = (element, index) => {
    const card =
        `<section class="content__card">
            <img class="card__image" src="https://dummyimage.com/200x200/024983/ffffff&text=${element.website}" alt="img" />
            <p class="card__title">${index}. ${element.username}</p>
            <p class="card__text"><span class="card__text--label">Name:</span>${element.name}</p>
            <p class="card__text"><span class="card__text--label">Email:</span>${element.email}</p>
            <p class="card__text"><span class="card__text--label">Company:</span>${element.company.name}</p>
            <p class="card__text"><span class="card__text--label">City:</span>${element.address.city}</p>
        </section>`;
    return card;
}