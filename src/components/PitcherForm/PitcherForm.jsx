import { useDispatch } from 'react-redux'
import { useState } from 'react';

function PitcherForm() {
    const [newPitcherInput, setNewPitcherInput] = useState('');
    const dispatch = useDispatch();

    const handlePitcherSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'ADD_PITCHER',
            payload: {
                name: newPitcherInput
            }
        })

        setNewPitcherInput('');
    };

    return (
        <form onSubmit={handlePitcherSubmit}>
            <input
                type="text"
                value={newPitcherInput}
                onChange={e => setNewPitcherInput(e.target.value)}
                placeholder="New Pitcher Name" />
            <button type="submit">Add Pitcher</button>
        </form>
    )
}
export default PitcherForm;