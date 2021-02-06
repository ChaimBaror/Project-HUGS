import React, { Component } from 'react'

export class BackArrow extends Component {
    render() {
        return (
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M2 12H22" stroke="white" stroke-width="3" stroke-miterlimit="10" />
                        <path d="M15 19L22 12L15 5" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square" />
                    </g>
                </svg>
            </div>
        )
    }
}

export default BackArrow;