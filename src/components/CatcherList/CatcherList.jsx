import { useDispatch, useSelector } from "react-redux";

function CatcherList() {
    const catcherList = useSelector(store => store.catcherList)

    const dispatch = useDispatch()

    const isCurrentCatcher = (catcher) => {

        let newCurrentCatcher = catcher.target.innerText;

        dispatch({
            type: 'CURRENT_CATCHER',
            payload: newCurrentCatcher
        })
    }
    return (
        <ul>
            {catcherList.map(catcher => (
                <li key={catcher} onClick={isCurrentCatcher}>
                    {catcher.name}
                </li>
            ))}
        </ul>
    )
}
export default CatcherList;