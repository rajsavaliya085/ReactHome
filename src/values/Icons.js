import React from 'react';
import {Image} from 'react-native';
import ScanIcon from '../assets/icons/ic_scan.svg';
import PowerIcon from '../assets/icons/ic_power.svg';
import SeatIcon from '../assets/icons/ic_seat.svg';
import Drawer from '../assets/icons/ic_menu.svg';
import Back from '../assets/icons/ic_back.svg';
import Logo from '../assets/icons/rugged_logo.svg';
import Bike from '../assets/icons/ic_bike.svg';
import HomeIcon from '../assets/icons/ic_home.svg';
import MetricIcon from '../assets/icons/ic_metrics.svg';
import ProfileIcon from '../assets/icons/ic_profile.svg';
import ActionsIcon from '../assets/icons/ic_actions.svg';
import NotificationsRead from '../assets/icons/ic_notifications_read.svg';
import NotificationsUnread from '../assets/icons/ic_notifications_unread.svg';
import ArrowDown from '../assets/icons/ic_arrow_down.svg';
import Battery0 from '../assets/icons/ic_battery0.svg';
import BatteryH0 from '../assets/icons/ic_batteryh0.svg';
import Battery1 from '../assets/icons/ic_battery1.svg';
import BatteryH1 from '../assets/icons/ic_batteryh1.svg';
import Battery2 from '../assets/icons/ic_battery2.svg';
import BatteryH2 from '../assets/icons/ic_batteryh2.svg';
import Battery3 from '../assets/icons/ic_battery3.svg';
import BatteryH3 from '../assets/icons/ic_batteryh3.svg';
import Battery4 from '../assets/icons/ic_battery4.svg';
import BatteryH4 from '../assets/icons/ic_batteryh4.svg';
import RangeIcon from '../assets/icons/ic_range.svg';
import ModeIcon from '../assets/icons/ic_mode.svg';
import SwipeRight from '../assets/icons/ic_swipeRight.svg';
import LocationPin from '../assets/icons/ic_pin.svg';
import CloseIcon from '../assets/icons/ic_close.svg';
import RadioCheck from '../assets/icons/ic_radio_check.svg';
import RadioUncheck from '../assets/icons/ic_radio_uncheck.svg';
import SecondaryProfile from '../assets/icons/ic_group.svg';
import AccountAdd from '../assets/icons/ic_plus.svg';
import Delete from '../assets/icons/ic_delete.svg';
import FireIcon from '../assets/icons/ic_fire.svg';
import LockIcon from '../assets/icons/ic_lock.svg';
import UnlockIcon from '../assets/icons/ic_unlock.svg';
import LockOpen from '../assets/icons/ic_lock_open.svg';
import LockClosed from '../assets/icons/ic_lock_closed.svg';
import InternetErrorIcon from '../assets/images/error_internet.svg';
import ApiErrorIcon from '../assets/images/error_api.svg';
import PowerButton from '../assets/icons/ic_power_button.svg';
import EyeVisible from '../assets/icons/ic_eye_visible.svg';
import EyeUnVisible from '../assets/icons/ic_eye_unvisible.svg';
import Servicing from '../assets/icons/ic_service.svg';
import CustomerCare from '../assets/icons/ic_customer_care.svg';
import Warranty from '../assets/icons/ic_warranty.svg';
import VehicleManual from '../assets/icons/ic_manual.svg';
import {getColorScheme} from '../values/Colors';
const Colors = getColorScheme();

export const Icons = {
  scan: <ScanIcon width={16} height={16} />,
  power: <PowerIcon width={26} height={26} />,
  seat: <SeatIcon width={26} height={26} />,
  drawer: <Drawer />,
  arrow_back: <Back width={30} height={30} />,
  logo: <Logo />,
  bike: <Bike width={20} height={20} fill={Colors.charcoal_darkGrey} />,
  home: <HomeIcon width={20} height={20} />,
  metrics: <MetricIcon width={20} height={20} />,
  profile: <ProfileIcon width={20} height={20} />,
  actions: <ActionsIcon width={20} height={20} />,
  notifications_read: <NotificationsRead width={24} height={24} />,
  notifications_unread: <NotificationsUnread width={24} height={24} />,
  arrow_down: <ArrowDown />,
  battery0: <Battery0 />,
  batteryH0: <BatteryH0 />,
  battery1: <Battery1 />,
  batteryH1: <BatteryH1 />,
  battery2: <Battery2 />,
  batteryH2: <BatteryH2 />,
  battery3: <Battery3 />,
  batteryH3: <BatteryH3 />,
  battery4: <Battery4 />,
  batteryH4: <BatteryH4 />,
  range: <RangeIcon />,
  mode: <ModeIcon />,
  swipeRight: <SwipeRight />,
  radioCheck: <RadioCheck width={18} height={18} />,
  radioUncheck: <RadioUncheck width={18} height={18} />,
  location_pin: <LocationPin fill={Colors.black} />,
  secondary_profile: <SecondaryProfile width={24} height={24} />,
  account_add: <AccountAdd width={24} height={24} />,
  close: <CloseIcon />,
  delete: <Delete width={12} height={16} />,
  fire: <FireIcon />,
  lock: <LockIcon />,
  unlock: <UnlockIcon />,
  lockOpen: <LockOpen fill={Colors.white} />,
  lockClosed: <LockClosed fill={Colors.white} />,
  successIcon: <Image source={require('../assets/images/ic_success.png')} />,
  deleteIcon: <Image source={require('../assets/images/ic_delete.png')} />,
  errorIcon: <Image source={require('../assets/images/ic_error.png')} />,
  loaderIcon: <Image source={require('../assets/images/2.gif')} />,
  ble: <Image source={require('../assets/images/ic_ble.png')} />,
  bleDisconnected: (
    <Image source={require('../assets/images/ic_ble_disconnected.png')} />
  ),
  callIcon: <Image source={require('../assets/images/call.png')} />,
  mailIcon: <Image source={require('../assets/images/mail.png')} />,
  internetError: <InternetErrorIcon />,
  notificationEmpty: <InternetErrorIcon width={'70%'} height={'60%'} />,
  apiError: <ApiErrorIcon />,
  powerButton: <PowerButton width={46} height={46} />,
  eyeVisible: <EyeVisible />,
  eyeUnVisible: <EyeUnVisible />,
  servicing: <Servicing />,
  customerCare: <CustomerCare />,
  warranty: <Warranty />,
  vehicleManual: <VehicleManual />,
};
