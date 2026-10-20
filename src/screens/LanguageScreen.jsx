import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme';
import { BackIcon, OrbitLogo, CheckIcon } from '../components/Icons.jsx';

const LanguageItem = ({ title, isSelected, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
    <Text style={[styles.rowTitle, isSelected && { color: COLORS.primary }]}>{title}</Text>
    {isSelected && <CheckIcon />}
  </TouchableOpacity>
);

export default function LanguageScreen({ onBack = () => {} }) {
  const [selected, setSelected] = useState('ru');

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}><BackIcon /><Text style={styles.backText}>Назад</Text></TouchableOpacity>
        <View style={styles.logoContainer}><OrbitLogo /><Text style={styles.logoText}>ORBIT</Text></View>
      </View>
      
      <Text style={styles.pageTitle}>Язык</Text>
      
      <View style={styles.section}>
        <LanguageItem title="Русский" isSelected={selected === 'ru'} onPress={() => setSelected('ru')} />
        <View style={styles.divider} />
        <LanguageItem title="English" isSelected={selected === 'en'} onPress={() => setSelected('en')} />
        <View style={styles.divider} />
        <LanguageItem title="Deutsch" isSelected={selected === 'de'} onPress={() => setSelected('de')} />
        <View style={styles.divider} />
        <LanguageItem title="Español" isSelected={selected === 'es'} onPress={() => setSelected('es')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingHorizontal: 20, paddingTop: 65, paddingBottom: 90 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  backButton: { flexDirection: 'row', alignItems: 'center' },
  backText: { color: COLORS.primary, fontSize: 16, marginLeft: -4 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '600', marginLeft: 6, letterSpacing: 0.5 },
  pageTitle: { color: COLORS.text, fontSize: 34, fontWeight: 'bold', marginBottom: 24, letterSpacing: 0.5 },
  section: { backgroundColor: COLORS.card, borderRadius: 16, marginBottom: 24, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  rowTitle: { color: COLORS.text, fontSize: 16 },
  divider: { height: 1, backgroundColor: COLORS.border, marginLeft: 16 },
});
