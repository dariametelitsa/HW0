import { number, string } from "prop-types";

export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompanyType = UserType & {
    companies: Array<{id: number, title: string}>
}

export function makeHairstyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power};
}

export function moveUser(u: UserWithLaptopType, newAddress: string) {
    return {...u, address: {...u.address, city: newAddress}};
}

export function upgradeUserLaptop (u: UserWithLaptopType & UserWithBooksType, newLaptop: string) {
    return {...u, laptop: {...u.laptop, title: newLaptop}};
}

export function addNewBooksToUser (u: UserWithBooksType, newBooks: string[]) {
    //return {...u, books: [...u.books, ...newBooks]};
    return {...u, books: u.books.concat(newBooks)};
}

export function updateBook (u: UserWithBooksType, oldBook: string, newBook: string) {
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)};
}

export function removeBook(u: UserWithBooksType, bookForDelete: string) {
    return {...u, books: u.books.filter(b => b !== bookForDelete)};
}

export function addNewCompany(u: WithCompanyType, newCompany: string) {
    let newId = u.companies.length;
    return {...u, companies: [...u.companies, {id: newId, title: newCompany}]};
}

export function updateCompanyTitle(companies: { [key: string]: Array<{id: number, title: string}> }, userName: string, companyId: number, newTitle: string) {
    return {...companies, [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)};
}