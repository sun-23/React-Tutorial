import React, { useState } from 'react';
import firebase from '../firebase'

const AddTimeEntryForm = () => {
    const [times, setTimes] = useState('');
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        firebase.firestore().collection('times').add({
            title,
            time: parseInt(times)
        }).then(() => {
            setTimes('');
            setTitle('');
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Add Time Entry</h4>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Time</label>
                <input type="number" value={times} onChange={e => setTimes(e.currentTarget.value)}/>
            </div>
            <button>Add entry</button>
        </form>
    )
}

export default AddTimeEntryForm