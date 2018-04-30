import React from "react";

const Search = (props) => {

    return(
        <nav>
            <div className="nav-wrapper grey lighten-1">
                <form>
                    <div className="input-field">
                        <input onChange={props.onChangeInputValue} id="search" type="search" value={props.searchValue} required />
                        <label className="label-icon" ><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export {Search};