import React from 'react'

function Search({handleChange}) {
    

    return (
        <div className='coin-search'>
            <h3>Search a crypto currency</h3>
            <form>
                <input
                    type='text'
                    placeholder='Search'
                    className='coin-input'
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Search
