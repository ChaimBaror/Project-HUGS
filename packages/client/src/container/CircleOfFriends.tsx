import React, { Component } from 'react';
import BackArrow from '../components/BackArrow';
import Container from '../components/Container';
import HugsLogo from '../components/HugsLogo';
import FamilyMember from '../components/InputUser/FamilyMember';

export class CircleOfFriends extends Component {
    render() {
        return (
            <Container
            headerHeight='15%'
            badyHeight='71%'
            BackArrow={<BackArrow />}
            HugsLogo={<HugsLogo width="60%" height="60%" />}>

            <FamilyMember />
          </Container>
        )
    }
}

export default CircleOfFriends;
