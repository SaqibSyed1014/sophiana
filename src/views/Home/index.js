import Header from './components/Header'
import Introduction from "./components/Introduction";
import Partnerships from "./components/Partnerships";
import Highlights from "./components/Highlights";
import JoinOurNetworks from "./components/JoinOurNetworks";
import '../../styles/home-view.css'

function HomeView() {
    return (
        <>
            <Header />
            <Introduction />
            <Partnerships />
            <Highlights />
            <JoinOurNetworks />
        </>
    )
}

export default HomeView
