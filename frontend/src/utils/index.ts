export const async_sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

