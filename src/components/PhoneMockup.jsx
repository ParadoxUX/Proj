import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

// Импорт всех экранов
import SettingsScreen from '../screens/SettingsScreen.jsx';
import AppearanceScreen from '../screens/AppearanceScreen.jsx';
import AccountScreen from '../screens/AccountScreen.jsx';
import NotificationsScreen from '../screens/NotificationsScreen.jsx';
import LanguageScreen from '../screens/LanguageScreen.jsx';
import SupportScreen from '../screens/SupportScreen.jsx';

const StatusBar = () => (
  <View style={styles.statusBar}>
    <span style={styles.time}>9:41</span>
    <View style={styles.statusIcons}>
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 12H3V9H1V12ZM5 12H7V6H5V12ZM9 12H11V3H9V12ZM13 12H15V0H13V12Z" fill={COLORS.text}/></svg>
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 12C8.8 12 9.5 11.3 9.5 10.5C9.5 9.7 8.8 9 8 9C7.2 9 6.5 9.7 6.5 10.5C6.5 11.3 7.2 12 8 12ZM8 4C5.8 4 3.8 4.8 2.3 6.2L4 7.9C5 7 6.4 6.5 8 6.5C9.6 6.5 11 7 12 7.9L13.7 6.2C12.2 4.8 10.2 4 8 4ZM8 0C4.4 0 1.2 1.4 -1 3.7L0.7 5.4C2.5 3.6 5.1 2.5 8 2.5C10.9 2.5 13.5 3.6 15.3 5.4L17 3.7C14.8 1.4 11.6 0 8 0Z" fill={COLORS.text}/></svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={COLORS.text} strokeOpacity="0.4"/><rect x="2" y="2" width="18" height="8" rx="1.5" fill={COLORS.text}/><path d="M23 4V8C23.6 8 24 7.6 24 7V5C24 4.4 23.6 4 23 4Z" fill={COLORS.text} fillOpacity="0.4"/></svg>
    </View>
  </View>
);

const HomeIndicator = () => <View style={styles.homeIndicator} />;

export default function PhoneMockup({ initialScreen }) {
  const [currentScreen, setCurrentScreen] = useState(initialScreen);

  const navigate = (screenName) => setCurrentScreen(screenName);
  const goBack = () => setCurrentScreen(initialScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Settings':
        return <SettingsScreen navigate={navigate} />;
      case 'Appearance':
        return <AppearanceScreen onBack={goBack} />;
      case 'Account':
        return <AccountScreen onBack={goBack} />;
      case 'Notifications':
        return <NotificationsScreen onBack={goBack} />;
      case 'Language':
        return <LanguageScreen onBack={goBack} />;
      case 'Support':
        return <SupportScreen onBack={goBack} />;
      default:
        return <SettingsScreen navigate={navigate} />;
    }
  };

  return (
    <View style={styles.phoneFrame}>
      <StatusBar />
      {renderScreen()}
      <HomeIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneFrame: {
    width: 390,
    height: 844,
    backgroundColor: COLORS.background,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 12,
    borderColor: COLORS.phoneBezel,
    position: 'relative',
    boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.2)',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 18,
    height: 54,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 100,
  },
  time: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    letterSpacing: -0.5,
  },
  statusIcons: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  homeIndicator: {
    width: 140,
    height: 5,
    backgroundColor: COLORS.text,
    borderRadius: 10,
    position: 'absolute',
    bottom: 8,
    left: '50%',
    marginLeft: -70,
    zIndex: 100,
  }
});
