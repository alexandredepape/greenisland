import { Image, Pressable, Text, View } from "react-native";

export default function TokenRow({token, onPressTokenRow}) {
    return (
        <Pressable style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10
        }}
        onPressIn={() => onPressTokenRow(token)}>
            <View style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <Text style={{fontSize: 15, marginRight: 10}}>{token.market_cap_rank}</Text>
                <View style={{flexDirection: "row", justifyContent: "flex-start"}}>

                    <Image source={{uri: token.image}} style={{width: 30, height: 30, marginRight: 10}}/>
                    {/* make the id first letter upper case */}
                    <Text style={{fontWeight: "bold", fontSize: 15}}>{token.name}</Text>
                    {/*make the symbol uppercase*/}
                    <Text style={{fontSize: 15, textTransform: "uppercase", marginLeft: 10}}>{token.symbol}</Text>
                    {}
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
            }}>

                <Text style={{fontSize: 15, fontWeight: "bold", marginRight: 5}}>${token.current_price}</Text>
                {/*display the price_change_24h to the 2 decimal*/}
                <Text style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: token.price_change_percentage_24h > 0 ? "green" : "red"
                }}>{token.price_change_percentage_24h > 0 ? "+" : ""} {token.price_change_percentage_24h.toFixed(2)}%</Text>
            </View>
        </Pressable>

    );
}
