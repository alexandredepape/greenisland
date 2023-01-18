import { Image, Text, View, StyleSheet } from "react-native";

const TokenDetail = ({token, onPressReturn}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{token.name}</Text>
                <Text style={styles.symbol}>{token.symbol}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{uri: token.image}} style={styles.image}/>
            </View>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Rank</Text>
                    <Text style={styles.rowValue}>{token.market_cap_rank}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Price</Text>
                    <Text style={styles.rowValue}>${token.current_price}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>24h Change</Text>
                    <Text style={styles.rowValue}>{token.price_change_percentage_24h > 0 ? "+" : ""} {token.price_change_percentage_24h.toFixed(2)}%</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Market Cap</Text>
                    <Text style={styles.rowValue}>${token.market_cap}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Volume</Text>
                    <Text style={styles.rowValue}>${token.total_volume}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Circulating Supply</Text>
                    <Text style={styles.rowValue}>{token.circulating_supply}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Total Supply</Text>
                    <Text style={styles.rowValue}>{token.total_supply}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Max Supply</Text>
                    <Text style={styles.rowValue}>{token.max_supply}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.button} onPress={onPressReturn}>Return</Text>
            </View>
        </View>
    );
};
// create the styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10
    },
    header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    symbol: {
        fontSize: 15,
        textTransform: "uppercase"
    },
    imageContainer: {
        width: "100%",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey"
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain"
    },
    table: {
        width: "100%",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },
    rowTitle: {
fontSize: 15,
        fontWeight: "bold"
    },
    rowValue: {
        fontSize: 15
    },
    buttonContainer: {
        width: "100%",
        padding: 10
    },
    button: {
        backgroundColor: "#323c4b",
        color: "white",
        textAlign: "center",
        padding: 10,
        borderRadius: 5
    }
}
);
export default TokenDetail;
