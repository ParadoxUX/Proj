import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme';
import { ListItem } from '../components/ListItem.jsx';
import { BackIcon, OrbitLogo, MailIcon, ShieldIcon, LogoutIcon } from '../components/Icons.jsx';

export default function AccountScreen({ onBack = () => {} }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}><BackIcon /><Text style={styles.backText}>Назад</Text></TouchableOpacity>
        <View style={styles.logoContainer}><OrbitLogo /><Text style={styles.logoText}>ORBIT</Text></View>
      </View>
      
      <Text style={styles.pageTitle}>Учётная запись</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <Text style={styles.userName}>Александр</Text>
        <Text style={styles.userPhone}>+7 (999) 123-45-67</Text>
      </View>
      
      <View style={styles.section}>
        <ListItem icon={<MailIcon />} title="Изменить почту" value="a@orbit.app" />
        <ListItem icon={<ShieldIcon />} title="Безопасность" isLast />
      </View>

      <View style={styles.section}>
        <ListItem icon={<LogoutIcon />} title="Удалить аккаунт" color={COLORS.danger} showChevron={false} isLast />
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
  profileCard: { backgroundColor: COLORS.card, borderRadius: 16, padding: 24, alignItems: 'center', marginBottom: 24 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#2A1B41', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  avatarText: { color: COLORS.primary, fontSize: 32, fontWeight: 'bold' },
  userName: { color: COLORS.text, fontSize: 22, fontWeight: '600', marginBottom: 4 },
  userPhone: { color: COLORS.textSecondary, fontSize: 15 },
  section: { backgroundColor: COLORS.card, borderRadius: 16, marginBottom: 20, overflow: 'hidden' },
});
