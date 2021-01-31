import React, { Component, useState } from 'react';
import QuickIntro from '../QuickIntro/QuickIntro';
import Experience from '../Experience/Experience';
import ExtraCurriculars from '../ExtraCurriculars/ExtraCurriculars';
import Projects from '../Projects/Projects';

export default class ExperienceCard extends Component {

    render() {
        return (
            <div style={{ position: 'absolute', marginTop: 30, width: '100%' }}>

            <QuickIntro/>
            <Experience/>
            <ExtraCurriculars/>
            <Projects/>
            </div>);
    }
}