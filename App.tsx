
import { SafeAreaView } from "react-native"
import HelloWorldScreen from "./src/presentation/screens/HelloWorldScreen"
import CounterScreen from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";
import CounterM3Screen from "./src/presentation/screens/CounterM3Screen";

import IonIcon from 'react-native-vector-icons/Ionicons';

const App = () => {
    return (
        <PaperProvider
            settings={{
                icon: (props => <IonIcon {...props} />)
            }}
        >    
            <SafeAreaView style={{flex:1}}>
                {/* <HelloWorldScreen name="Francisco Soto"/> */}
                {/* <CounterScreen/> */}
                <CounterM3Screen/>
            </SafeAreaView>
        </PaperProvider>
    )
}
export default App;