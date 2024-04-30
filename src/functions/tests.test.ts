import {
    addNewBooksToUser, addNewCompany,
    makeHairstyle,
    moveUser, removeBook, updateBook, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyType
} from "./forTests";


test('referense type test', () => {
    let user: UserType = {
        name: 'Bob',
        hair: 32,
        address: {
            city: 'Monaco',
        }
    };

    const changedUsed = makeHairstyle(user, 2);

    expect(user.hair).toBe(32);
    expect(changedUsed.hair).toBe(16);
    expect(changedUsed.address).toBe(user.address);
});

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Bob',
        hair: 32,
        address: {
            city: 'Monaco',
            house: 13,
        },
        laptop: {
            title: 'Lenovo'
        }
    };

    const movedUser: UserWithLaptopType = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(movedUser.address).not.toBe(user.address);
    expect(movedUser.laptop).toBe(user.laptop);
    expect(movedUser.address.city).toBe('Kiev');

});


test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Bob',
        hair: 32,
        address: {
            city: 'Monaco',
            house: 13,
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.laptop).not.toBe(user.laptop);
    expect(userCopy.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('Lenovo');
})


test('add new books to user', () => {
    let user: UserWithBooksType = {
        name: 'Bob',
        hair: 32,
        address: {
            city: 'Monaco',
            house: 13,
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(userCopy).not.toBe(user);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[4]).toBe('ts');
    expect(userCopy.books[5]).toBe('rest api');
    expect(userCopy.books[0]).toBe('css');
    expect(userCopy.books.length).toBe(6);
    expect(user.books.length).toBe(4);
});


test('update js to ts', () => {
    let user: UserWithBooksType = {
        name: 'Bob',
        hair: 32,
        address: {
            city: 'Monaco',
            house: 13,
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = updateBook(user, 'js', 'ts');

    expect(userCopy).not.toBe(user);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[2]).toBe('ts');
    expect(userCopy.books[0]).toBe('css');
    expect(user.books[2]).toBe('js');
    expect(userCopy.books.length).toBe(4);
    expect(user.books.length).toBe(4);
});


test('remove js book', () => {
    let user: UserWithBooksType = {
        name: 'Bob',
        hair: 32,
        address: {
            city: 'Monaco',
            house: 13,
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = removeBook(user, 'js');

    expect(userCopy).not.toBe(user);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[2]).toBe('react');
    expect(userCopy.books[0]).toBe('css');
    expect(user.books[2]).toBe('js');
    expect(userCopy.books.length).toBe(3);
    expect(user.books.length).toBe(4);
});


test('user with companies', () => {
    let user: WithCompanyType & UserWithBooksType = {
        name: 'Bob',
        hair: 32,
        address: {
            city: 'Monaco',
            house: 13,
        },
        companies: [{id: 1, title: 'yandex'}, {id: 2, title: 'google'}],
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = addNewCompany(user, 'meta') as WithCompanyType & UserWithBooksType;

    expect(userCopy).not.toBe(user);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.companies).not.toBe(user.companies);
    expect(userCopy.companies[1]).toBe(user.companies[1]);
    expect(userCopy.companies[0]).toStrictEqual({id: 1, title: 'yandex'});
    expect(userCopy.companies[2].title).toBe('meta');
    expect(userCopy.companies.length).toBe(3);
    expect(user.companies.length).toBe(2);
});

test('update company', () => {
    let user: UserWithBooksType = {
        name: 'Bob',
        hair: 32,
        address: {
            city: 'Monaco',
            house: 13,
        },
        books: ['css', 'html', 'js', 'react'],
    };

    let companies = {
        'Bob' : [{id: 1, title: 'yandex'}, {id: 2, title: 'google'}],
        'Artem': [{id: 1, title: 'yandex'}],
    }

    let companyCopy = updateCompanyTitle(companies, 'Bob', 1, 'MTS');

    expect(companies).not.toBe(companyCopy);
    expect(companyCopy['Bob'].length).toBe(2);
    expect(companyCopy['Artem'].length).toBe(1);
    expect(companyCopy['Bob'][0].title).toBe('MTS');
    expect(companies['Bob'][0].title).toBe('yandex');
});