import React from 'react'
import { Outlet } from 'react-router'
import NavCom from './NavCom'
import FooterCom from './FooterCom'
const MainDashBoardCom = () => {
    return (
        // <div>
        //     <h2>This is Main Dash Board</h2>
        //     <div>

        //     </div>
        // </div>
        <div className="container">
            <div className="card border-primary">
                <div className="card-header border-primary">
                    <NavCom/>
                </div>
                <div className="card-body border-primary">
                    <Outlet></Outlet>
                </div>
                <div className="card-footer border-primary">
                    <FooterCom/>
                </div>
            </div>

        </div>
    )
}

export default MainDashBoardCom
