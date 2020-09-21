import React from 'react'

function Search({handleChange}) {
    

    return (
        <div className='coin-search'>
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
