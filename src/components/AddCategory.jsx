import { useState } from 'react';


const AddCategory = ( { onNewCategoria } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => setInputValue(  e.target.value );

    const onFormSubmit = (e) => {
        
        e.preventDefault();
        
        if( inputValue.trim().length <= 1 ) return;
        
        onNewCategoria( inputValue.trim() );
        setInputValue('');
    }

    return (
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder="buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
    )
}

export default AddCategory;

//cada componente puede tener su state