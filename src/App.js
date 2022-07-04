import { BrowserView, MobileView, isBrowser,deviceDetect} from "react-device-detect";

function App() {
    console.log(isBrowser);
    console.log(deviceDetect());
    return (
        <>
            <BrowserView>
                <p>this is browserview</p>
            </BrowserView>
            <MobileView>
                <p>this is mobileview</p>
            </MobileView>
        </>
    );
}

export default App;
