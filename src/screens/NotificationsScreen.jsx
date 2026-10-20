import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { COLORS } from '../theme';
import { BackIcon, OrbitLogo } from '../components/Icons.jsx';

export default function NotificationsScreen({ onBack = () => {} }) {
  const [push, setPush] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibrate, setVibrate] = useState(false);
  const [preview, setPreview] = useState(true);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}><BackIcon /><Text style={styles.backText}>Назад</Text></TouchableOpacity>
        <View style={styles.logoContainer}><OrbitLogo /><Text style={styles.logoText}>ORBIT</Text></View>
      </View>
      
      <Text style={styles.pageTitle}>Уведомления</Text>
      
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Push-уведомления</Text>
          <Switch value={push} onValueChange={setPush} trackColor={{ false: COLORS.switchTrackOff, true: COLORS.primary }} thumbColor="#FFFFFF" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Звук сообщений</Text>
          <Switch value={sound} onValueChange={setSound} trackColor={{ false: COLORS.switchTrackOff, true: COLORS.primary }} thumbColor="#FFFFFF" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Вибрация</Text>
          <Switch value={vibrate} onValueChange={setVibrate} trackColor={{ false: COLORS.switchTrackOff, true: COLORS.primary }} thumbColor="#FFFFFF" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Показывать текст в превью</Text>
          <Switch value={preview} onValueChange={setPreview} trackColor={{ false: COLORS.switchTrackOff, true: COLORS.primary }} thumbColor="#FFFFFF" />
        </View>
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
  section: { backgroundColor: COLORS.card, borderRadius: 16, marginBottom: 24 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  rowTitle: { color: COLORS.text, fontSize: 16 },
  divider: { height: 1, backgroundColor: COLORS.border, marginLeft: 16 },
});
