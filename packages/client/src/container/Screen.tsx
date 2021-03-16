import React, { Component } from 'react'
import BackArrow from '../components/BackArrow';
import Container from '../components/Container';
import FirstScreen from '../components/FirstScreen';
import HugsLogo from '../components/HugsLogo';

export class Screen extends Component {
    render() {
        return (
            <Container
                headerHeight='15%'
                badyHeight='71%'
                BackArrow={<BackArrow />}
                HugsLogo={<HugsLogo width="60%" height="60%" />}
            >
                <FirstScreen />
            </Container>
        )
    }
}

export default Screen;
