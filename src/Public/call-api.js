const WAIT_LIMIT = 15000; // Wait 15 seconds for a response and then throw an error.

export default async function callAPI(cardset) {
    const getData = new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=${cardset}`);
            if (response.status === 404)
                throw new Error('Search value not found...');
            else {
                const data = await response.json();
                resolve(data);
            }
        }
        catch (error) { reject(error) }
    });

        const timeOut = new Promise ((resolve, reject) => { 
            setTimeout(() => {
            reject(new Error('Timeout'));
        }, WAIT_LIMIT);
    });

    try {
        const sendData = await Promise.race([getData, timeOut]);
        // console.log("Fetch successful...");
        return sendData;
    } catch (error) {
        console.log("Fetch failed...");
        console.log(error);
        return null; 
    }
}