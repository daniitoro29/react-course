import { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setcategories(['Se agrego otro elemento', ...categories]);
    }

    return (
        <>
            <h1>GitExpertApp</h1>
            <button onClick={onAddCategory}>Agregar categoría</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
} 