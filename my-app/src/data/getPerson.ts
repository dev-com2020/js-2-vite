type Person = {
    name: string
}

export function getPerson(): Promise<Person> {
    return new Promise((resolve) => setTimeout(() => resolve(
        {name: 'Tomek'}), 3000))
}