import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StackNavigator,
    addNavigationHelpers,
} from 'react-navigation';

import { BackHandler, BackAndroid} from 'react-native'

import SplashScreen from '../scenes/splash';
import WelcomeScreen from '../scenes/welcome';
import AuthScreen from '../scenes/auth';
import EmailLoginScreen from '../scenes/emaillogin';
import PhoneLoginScreen from '../scenes/phonelogin';
import PhoneCodeScreen from '../scenes/phonecode';
import ForgotScreen from '../scenes/forgot';
import EmailSignupScreen from '../scenes/emailsignup';
import PhoneSignupScreen from '../scenes/phonesignup';
import TabScreen from '../scenes/tab';
import HomeScreen from '../scenes/home';
import DetailScreen from '../scenes/detail';
import ScheduleScreen from '../scenes/schedule';
import PaymentScreen from '../scenes/payment';
import AddCreditCardScreen from '../scenes/addcreditcard';
import ShareScreen from '../scenes/share';
import SavedScreen from '../scenes/saved';
import ProfileScreen from '../scenes/profile';
import EditProfileScreen from '../scenes/editprofile';
import CreditcardListScreen from '../scenes/creditcardlist';
import CreditDetailScreen from '../scenes/creditdetail';
import ReservationDetailScreen from '../scenes/reservationdetail';


export const AppNavigator = StackNavigator({
    splash: { screen: SplashScreen },
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    emaillogin: { screen: EmailLoginScreen },
    phonelogin: { screen: PhoneLoginScreen },
    phonecode: { screen: PhoneCodeScreen },
    forgot: { screen: ForgotScreen },
    emailsignup: { screen: EmailSignupScreen },
    phonesignup: { screen: PhoneSignupScreen },
    tab: { screen: TabScreen },
    home: { screen: HomeScreen },
    detail: { screen: DetailScreen },
    schedule: { screen: ScheduleScreen },
    payment: { screen: PaymentScreen },
    addcreditcard: { screen: AddCreditCardScreen },
    share: { screen: ShareScreen },
    saved: { screen: SavedScreen },
    profile: { screen: ProfileScreen },
    editprofile: { screen: EditProfileScreen },
    creditcardlist: { screen: CreditcardListScreen },
    creditdetail: { screen: CreditDetailScreen },
    reservationdetail: { screen: ReservationDetailScreen }
});

// const AppWithNavigationState = ({dispatch, nav}) => (
//     <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
// );

// const mapStateToProps = state => ({
//     nav: state.nav
// });

// export default connect(mapStateToProps)(AppWithNavigationState);


class AppWithNavigationState extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {
            const { dispatch, navigation, nav } = this.props;

            console.log(nav)
            if (nav.routes.length === 2) {
                return false;
            }
             if(nav.routes.length === 5){
                 if(nav.routes[4].routeName === 'tab' || nav.routes[4].routeName === 'phonecode'){
                     return false;
                 }
             }
            dispatch({ type: 'Navigation/BACK' });
            return true;
        }.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })} />
    }
}
const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

const A = connect(mapStateToProps)(AppWithNavigationState);
export default A;
