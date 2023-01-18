import { FlatList, Keyboard, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { findIdTokenByName, getTokenUSDPrice } from "../services/CryptoService";
import TokenRow from "./token_row";
import SearchBar from "./search_bar";
import TokenDetail from "./token_detail";

export default function MainPage() {
    //create a state containing the cryptos data
    const [tokensUSDprice, setTokenUSDprice] = useState([]);
    // populate the state by calling getCryptoData()
    useEffect(() => {
        console.log("useEffect called");
        getTokenUSDPrice([]).then((data) => {
            setTokenUSDprice(data);

        }).catch((error) => {
            console.log(error);
        });

    }, []);

    // display the tokens in a FlatList with the token symbol and the token price
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (searchPhrase === "") {
            getTokenUSDPrice([]).then((data) => {
                setTokenUSDprice(data);

            });
            return;
        }
        const ids = findIdTokenByName(searchPhrase);
        if (ids.length === 0) {
            getTokenUSDPrice([]).then((data) => {
                setTokenUSDprice(data);

            });
            return;
        }
        console.log("use effect ids", ids);
        getTokenUSDPrice(ids).then((data) => {
            setTokenUSDprice(data);
        }).catch((error) => {
            console.log(error);
        });
    }, [searchPhrase]);
    const [currentToken, setCurrentToken] = useState(null);

    function onPressTokenRow(token) {
        console.log("token", token);
        setCurrentToken(token);
    }

    function onPressReturn() {
        setCurrentToken(null);
    }

    function resetList() {
        setSearchPhrase("");

    }

    return (
        currentToken ? <TokenDetail token={currentToken} onPressReturn={onPressReturn}/> :
            <View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <SearchBar setClicked={setClicked} clicked={clicked} searchPhrase={searchPhrase}
                               setSearchPhrase={setSearchPhrase}
                               resetList={resetList}/>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                        <Text style={{fontSize: 15, marginRight: 10}}>#</Text>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>Name</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}>
                        <Text style={{fontSize: 15, fontWeight: "bold", marginRight: 5}}>Price</Text>
                        <Text style={{fontSize: 15, fontWeight: "bold"}}>Change</Text>
                    </View>
                </View>

                <FlatList
                    data={tokensUSDprice}
                    renderItem={({item}) => <TokenRow token={item} onPressTokenRow={onPressTokenRow}/>}
                    keyExtractor={item => item.id}
                />
            </View>

    );
}
