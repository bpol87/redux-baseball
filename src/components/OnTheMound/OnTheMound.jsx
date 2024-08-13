import { useSelector } from "react-redux";

function OnTheMound() {
    const currentPitcher = useSelector(store => store.currentPitcher)

    return (
        <h2>On the Mound: {currentPitcher}</h2>
    )
}
export default OnTheMound;