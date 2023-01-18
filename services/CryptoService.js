import { TOKENS, TOKENS_PRICE } from "./tokens";


export async function getTokenUSDPrice(ids) {
    console.log("getTokenUSDPrice");
    console.log("ids", ids);
    // let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    // url = `${url}${ids.length > 0 ? "?ids=" + ids.join(',') : ""}`;
    // console.log(url);
    // const response = await axios.get(url);
    // to save on api calls, we will use a local file
    let tokens_prices = TOKENS_PRICE;
    if (ids.length > 0) {
        tokens_prices = TOKENS_PRICE.filter(token => ids.includes(token.id));
    }
    //sort by market_cap_rank in descending order
    const sorted_tokens = tokens_prices.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
    // console.log(sorted_tokens);
    return sorted_tokens;
}

export function findIdTokenByName(name) {
    // const url = "https://api.coingecko.com/api/v3/coins/list?include_platform=false";
    // const response = await axios.get(url);
    // const tokens = response.data;
    //to save api calls I just created a mock data
    return findTokenIds(TOKENS, name);
}

function findTokenIds(tokens, input) {
    let tokenIds = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].name.toLowerCase().includes(input)) {
            tokenIds.push(tokens[i].id);
        }
    }
    console.log("tokenIds", tokenIds);
    return tokenIds;
}



