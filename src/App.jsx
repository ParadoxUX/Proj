import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from './theme';
import PhoneMockup from './components/PhoneMockup.jsx';

const globalStyles = `
  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    outline: none;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    margin-top: -9px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: ${COLORS.switchTrackOff};
    border-radius: 2px;
  }
`;

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <View style={styles.mainContainer}>
        {/* Левый телефон: стартует с Настроек */}
        <PhoneMockup initialScreen="Settings" />
        
        {/* Правый телефон: стартует с Внешнего вида */}
        <PhoneMockup initialScreen="Appearance" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.pageBg,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    gap: 50, 
    padding: 40,
    flexWrap: 'wrap',
  },
});
