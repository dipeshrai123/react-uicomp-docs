import React from "react";
import { Dropdown, useDropdown } from "react-uicomp";

const Header = () => {

    const ref = React.useRef();
    const { dropdownHandlers, toggle } = useDropdown(ref);

    return (
        <div className="header-container">
            <div className="header" style={{paddingTop: 100}}>
                <Dropdown
                    ref={ref}
                    {...dropdownHandlers}
                    render={() => <div onClick={toggle}>OPEN</div>}
                >
                    <div>
                        Dropdown Element
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header;