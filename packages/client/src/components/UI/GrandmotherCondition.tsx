import React, { Component } from 'react'
import Container from './../Container';
import Group from './group';

export class GrandmotherCondition extends Component {
    render() {
        return (
            <Container
            headerHeight='30%'
            badyHeight='56%'
            BackArrow={""}
            HugsLogo={ <Group />
            }>
                {/* <Group /> */}
          </Container>

        )
    }
}

export default GrandmotherCondition;
