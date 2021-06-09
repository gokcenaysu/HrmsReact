import React from 'react'

import SideBar from './SideBar'
import DataTable from './DataTable'
import Frame from './Frame'


export default function DashBoard() {
    return (
        <div>
            <SideBar/>
            <Frame/>
            <DataTable/>
        </div>
        
    )
}
