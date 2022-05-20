import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileStackNavigator from '../navigation/ProfileStack/ProfileStackNavigator';
import EducationalStack from '../navigation/ProfileStack/EducationalStack';
import ProfessionalExperenceStack from '../navigation/ProfileStack/ProfessionalExperienceStack';
import ClinicStack from '../navigation/ProfileStack/ClinicStack';

const Drawer = createDrawerNavigator();

export default function CreateProfileDrawerNavigator(props) {
    return (
        <Drawer.Navigator initialRouteName="CreateProfile">
            <Drawer.Screen name="CreateProfile"  component={ProfileStackNavigator}/>
            <Drawer.Screen name="Education"  component={EducationalStack} />
            <Drawer.Screen name="ProfessionalExperience"  component={ProfessionalExperenceStack} />
            <Drawer.Screen name="Clinic"  component={ClinicStack} />
        </Drawer.Navigator>
    );
}