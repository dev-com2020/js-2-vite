
export function authorize(id: string): Promise<string[]>{
    console.log(`Authorizing user with id: ${id}`);
    return new Promise((resolve) => setTimeout(() => resolve(['admin']),2000))
}