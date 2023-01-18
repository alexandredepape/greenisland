// SearchBar.js
import React from "react";
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, resetList}) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{marginLeft: 20, marginRight: 15}}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{marginRight: 25}} onPress={() => {
                        resetList()
                    }}/>
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <Pressable
                    style={styles.cancelButton}
                    onPressIn={() => {
                        setClicked(false);
                        setSearchPhrase("");
                        Keyboard.dismiss();
                    }
                    }
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>

                </Pressable>
            )}
        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        // alignItems: "center",
        flexDirection: "row",
        width: "90%",

    },
    searchBar__unclicked: {
        padding: 5,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-evenly",

    },
    searchBar__clicked: {
        padding: 5,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 15,
        marginLeft: 10,
        width: "90%",
    },
    cancelButton: {
        justifyContent: "center",
        marginLeft: 10,
    },
    cancelButtonText: {
        fontSize: 15,
        color: "#2c313d",
        //make it bold
        fontWeight: "bold",
    },
});
