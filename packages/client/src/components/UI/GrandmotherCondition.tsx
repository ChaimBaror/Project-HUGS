import React, { Component } from 'react'
import Container from './../Container';
import GrandmaCalendar from './GrandmaCalendar';
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
          <GrandmaCalendar />

          </Container>

        )
    }
}

export default GrandmotherCondition;
