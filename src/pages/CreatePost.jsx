import React, { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Новый пост:', { title, body });
    };

    return (
        <div>
            <h2>Создать пост</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Заголовок:</label>
                    <input type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label>Тело поста:</label>
                    <textarea value={body} onChange={handleBodyChange} />
                </div>
                <div>
                    <button type="submit">Создать пост</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;