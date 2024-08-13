import { useDispatch, useSelector } from "react-redux";

function PitcherList() {
    const pitcherList = useSelector(store => store.pitcherList)
    console.log('pitcherLsit is:', pitcherList)

    const dispatch = useDispatch()

    const isCurrentPitcher = (pitcher) => {

        let newCurrentPitcher = pitcher.target.innerText;

        dispatch({
            type: 'CURRENT_PITCHER',
            payload: newCurrentPitcher
        })
    }

    return (
        <ul>
            {pitcherList.map(pitcher => (
                <li key={pitcher.name} onClick={isCurrentPitcher}>
                    {pitcher.name}
                </li>
            ))}
        </ul>
    )
}
export default PitcherList;