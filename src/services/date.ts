export const getAgeFromDate = (date: string) => {
    console.log(date);
    const DoB = new Date(date);
    const today = new Date();

    return today.getFullYear() - DoB.getFullYear();
}