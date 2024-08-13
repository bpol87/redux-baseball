import { useDispatch } from 'react-redux'
import { useState } from 'react';

function CatcherForm() {
    const [newCatcherInput, setNewCatcherInput] = useState('');
    const dispatch = useDispatch();

    const handleCatcherSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'ADD_CATCHER',
            payload: {
                name: newCatcherInput,
            }
        })

        setNewCatcherInput('');
    };

    return (
        <form onSubmit={handleCatcherSubmit}>
            <input
                type="text"
                value={newCatcherInput}
                onChange={e => setNewCatcherInput(e.target.value)}
                placeholder="New Catcher Name" />
            <button type="submit">Add Catcher</button>
        </form>
    )
}
export default CatcherForm;