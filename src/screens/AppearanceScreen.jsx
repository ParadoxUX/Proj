import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { COLORS } from '../theme';
import { BackIcon, OrbitLogo } from '../components/Icons.jsx';

const WebSlider = ({ value, onValueChange }) => (
  <input 
    type="range" min="80" max="120" value={value} 
    onChange={(e) => onValueChange(Number(e.target.value))} 
    style={{ width: '100%', outline: 'none' }}
  />
);

const ThemeCard = ({ isSelected, color, label }) => (
  <View style={styles.themeCardWrapper}>
    <View style={[styles.themeCard, isSelected && styles.themeCardSelected]}>
      <View style={styles.themeCardHeader}>
        <View style={[styles.themeAvatar, { backgroundColor: color }]} />
        <View style={styles.themeLines}>
          <View style={styles.themeLine} />
          <View style={[styles.themeLine, { width: 20 }]} />
        </View>
      </View>
      <View style={[styles.themeMessage, { backgroundColor: color }]} />
    </View>
    <Text style={styles.themeLabel}>{label}</Text>
    <View style={[styles.radioOuter, isSelected && { borderColor: color }]}>
      {isSelected && <View style={[styles.radioInner, { backgroundColor: color }]} />}
    </View>
  </View>
);

export default function AppearanceScreen({ onBack = () => {} }) {
  const [systemTheme, setSystemTheme] = useState(true);
  const [syncClients, setSyncClients] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [standardText, setStandardText] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState('purple');

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}><BackIcon /><Text style={styles.backText}>Назад</Text></TouchableOpacity>
        <View style={styles.logoContainer}><OrbitLogo /><Text style={styles.logoText}>ORBIT</Text></View>
      </View>
      
      <Text style={styles.pageTitle}>Внешний вид</Text>
      
      <Text style={styles.sectionTitle}>Тема приложения</Text>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={styles.rowTextContainer}>
            <Text style={styles.rowTitle}>Как тема устройства</Text>
            <Text style={styles.rowSubtitle}>Сейчас используется тёмная тема</Text>
          </View>
          <Switch value={systemTheme} onValueChange={setSystemTheme} trackColor={{ false: COLORS.switchTrackOff, true: COLORS.primary }} thumbColor="#FFFFFF" />
        </View>
        <View style={[styles.divider, { marginLeft: 16 }]} />
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Синхронизировать между клиентами</Text>
          <Switch value={syncClients} onValueChange={setSyncClients} trackColor={{ false: COLORS.switchTrackOff, true: COLORS.primary }} thumbColor="#FFFFFF" />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Масштаб и текст</Text>
      <View style={styles.section}>
        <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
          <View style={styles.sliderHeader}>
            <Text style={styles.rowTitle}>Уровень масштабирования</Text>
            <Text style={styles.zoomValue}>{zoom}%</Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <WebSlider value={zoom} onValueChange={setZoom} />
          </View>
          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabel}>80%</Text>
            <Text style={styles.sliderLabel}>120%</Text>
          </View>
        </View>
        <View style={[styles.divider, { marginLeft: 16 }]} />
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Стандартный размер текста в чате</Text>
          <Switch value={standardText} onValueChange={setStandardText} trackColor={{ false: COLORS.switchTrackOff, true: COLORS.primary }} thumbColor="#FFFFFF" />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Темы</Text>
      <View style={styles.themesContainer}>
        <TouchableOpacity onPress={() => setSelectedTheme('purple')}><ThemeCard isSelected={selectedTheme === 'purple'} color={COLORS.primary} label="Фиолетовый" /></TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTheme('blue')}><ThemeCard isSelected={selectedTheme === 'blue'} color="#4285F4" label="Синий" /></TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTheme('green')}><ThemeCard isSelected={selectedTheme === 'green'} color="#34C759" label="Зеленый" /></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingHorizontal: 20, paddingTop: 65, paddingBottom: 110 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  backButton: { flexDirection: 'row', alignItems: 'center' },
  backText: { color: COLORS.primary, fontSize: 16, marginLeft: -4 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '600', marginLeft: 6, letterSpacing: 0.5 },
  pageTitle: { color: COLORS.text, fontSize: 34, fontWeight: 'bold', marginBottom: 24, letterSpacing: 0.5 },
  sectionTitle: { color: COLORS.textSecondary, fontSize: 13, marginBottom: 8, marginLeft: 4, marginTop: 8 },
  section: { backgroundColor: COLORS.card, borderRadius: 16, marginBottom: 24 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  // flexShrink: 1 и marginRight: 10 спасают от наезда свитча на текст
  rowTitle: { color: COLORS.text, fontSize: 16, flexShrink: 1, marginRight: 10 },
  rowSubtitle: { color: COLORS.textSecondary, fontSize: 13, marginTop: 4 },
  divider: { height: 1, backgroundColor: COLORS.border },
  sliderHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  zoomValue: { color: COLORS.text, fontSize: 16 },
  sliderLabels: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16 },
  sliderLabel: { color: COLORS.textSecondary, fontSize: 12 },
  themesContainer: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  themeCardWrapper: { alignItems: 'center', width: '100%' },
  themeCard: { backgroundColor: COLORS.card, borderRadius: 14, padding: 12, width: '100%', height: 110, borderWidth: 2, borderColor: 'transparent', marginBottom: 12 },
  themeCardSelected: { borderColor: COLORS.primary },
  themeCardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  themeAvatar: { width: 14, height: 14, borderRadius: 7, marginRight: 8 },
  themeLines: { flex: 1 },
  themeLine: { height: 4, backgroundColor: '#3A3A3F', borderRadius: 2, marginBottom: 4, width: 30 },
  themeMessage: { height: 24, width: '60%', borderRadius: 8, alignSelf: 'flex-end', marginTop: 'auto' },
  themeLabel: { color: COLORS.textSecondary, fontSize: 12, marginBottom: 8 },
  radioOuter: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: COLORS.textSecondary, alignItems: 'center', justifyContent: 'center' },
  radioInner: { width: 10, height: 10, borderRadius: 5 },
});
