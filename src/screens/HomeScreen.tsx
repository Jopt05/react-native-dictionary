import { ActivityIndicator, StyleSheet, Text } from "react-native"
import { Header } from "../components/Header"
import { Search } from "../components/Search"
import { Title } from "../components/Title"
import { InfoContainer } from "../components/InfoContainer"
import { useEffect, useState } from "react"
import DictionaryApi from "../api/dictionaryApi"
import { DicGet } from "../interfaces/DictionaryApiInterfaces"

export const HomeScreen = () => {

    const [wordInfo, setWordInfo] = useState<DicGet>({} as DicGet);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("hello");
    const [errorMsg, setErrorMsg] = useState("");

    async function getWord(query: string) {
        setErrorMsg("");
        setWordInfo({} as DicGet);
        setIsLoading(true);
        const response = await DictionaryApi.get(query).catch(err => null);
        if( !response ) {
            setErrorMsg("Palabra no encontrada, intente de nuevo");
            setIsLoading(false);
            return;
        }
        setWordInfo(response.data[0]);
        setIsLoading(false);
    }

    useEffect(() => {
        getWord(query);
    }, [query]);
    

    return (
        <>
            <Header />
            <Search onDebounce={(value) => setQuery(value)}/>
            {
                isLoading && <ActivityIndicator size={30} color={'blue'}/>
            }
            {
                wordInfo.word && (
                    <>
                        <>
                            <Title phon={wordInfo.phonetic} title={wordInfo.word} audio={wordInfo?.phonetics?.[0]?.audio} />
                            {
                                wordInfo.meanings && wordInfo.meanings.map((m, i) => (
                                    <InfoContainer meaning={m} key={i}/>
                                ))
                            }
                        </>
                    </>
                )
            }
            {
                errorMsg != "" && <Text style={styles.errorMsg}>{errorMsg}</Text>
            }
        </>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign:'center',
        marginTop: 20
    }
})