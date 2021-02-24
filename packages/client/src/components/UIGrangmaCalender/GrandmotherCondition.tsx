import React, { Component } from 'react'
import Container from '../Container';
import GrandmaCalendar from '../UIGrangmaCalender/GrangmaCalender';
import Group from '../UIGrangmaCalender/group';
import GrandmaHugsCard from './GrandmaHugsCard';

export class GrandmotherCondition extends Component {
    render() {
        return (
            <Container
            headerHeight='30%'
            badyHeight='56%'
            BackArrow={""}
            HugsLogo={ <Group />
            }>
         <div >
          <GrandmaCalendar />
          </div>


          </Container>

        )
    }
}

export default GrandmotherCondition;
