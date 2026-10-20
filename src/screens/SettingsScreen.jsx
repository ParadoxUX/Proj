import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme';
import { ListItem } from '../components/ListItem.jsx';
import { BackIcon, OrbitLogo, UserIcon, BellIcon, PaletteIcon, LanguageIcon, HelpIcon, LogsIcon, UpdatesIcon, LogoutIcon, PremiumIcon } from '../components/Icons.jsx';

export default function SettingsScreen({ navigate = () => {} }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}><BackIcon /><Text style={styles.backText}>Назад</Text></TouchableOpacity>
        <View style={styles.logoContainer}><OrbitLogo /><Text style={styles.logoText}>ORBIT</Text></View>
      </View>
      
      <Text style={styles.pageTitle}>Настройки</Text>
      
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.premiumCard}>
          <View style={styles.premiumLeft}>
            <PremiumIcon />
            <View style={styles.premiumTextContainer}>
              <Text style={styles.premiumTitle}>Orbit Premium</Text>
              <Text style={styles.premiumSubtitle}>Больше пространства для общения</Text>
            </View>
          </View>
          <BackIcon color={COLORS.textSecondary} style={{ transform: [{ rotate: '180deg' }] }} />
        </View>
      </TouchableOpacity>

      <View style={styles.section}>
        <ListItem icon={<UserIcon />} title="Учётная запись" onPress={() => navigate('Account')} />
        <ListItem icon={<BellIcon />} title="Уведомления" onPress={() => navigate('Notifications')} />
        <ListItem icon={<PaletteIcon />} title="Внешний вид" onPress={() => navigate('Appearance')} />
        <ListItem icon={<LanguageIcon />} title="Язык" value="Русский" onPress={() => navigate('Language')} isLast />
      </View>

      <Text style={styles.sectionTitle}>Поддержка</Text>
      <View style={styles.section}>
        <ListItem icon={<HelpIcon />} title="Поддержка" onPress={() => navigate('Support')} />
        <ListItem icon={<LogsIcon />} title="Отправить логи" isLast />
      </View>

      <Text style={styles.sectionTitle}>Что нового</Text>
      <View style={styles.section}>
        <ListItem icon={<UpdatesIcon />} title="Обновления Orbit" value="2.8" isLast />
      </View>

      <View style={styles.section}>
        <ListItem icon={<LogoutIcon />} title="Выйти" color={COLORS.danger} showChevron={false} isLast />
      </View>

      <Text style={styles.footerText}>Orbit для вас - версия 2.8.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Увеличили paddingBottom, чтобы "Выйти" не перекрывалась полоской
  scrollContent: { paddingHorizontal: 20, paddingTop: 65, paddingBottom: 110 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  backButton: { flexDirection: 'row', alignItems: 'center' },
  backText: { color: COLORS.primary, fontSize: 16, marginLeft: -4 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '600', marginLeft: 6, letterSpacing: 0.5 },
  pageTitle: { color: COLORS.text, fontSize: 34, fontWeight: 'bold', marginBottom: 24, letterSpacing: 0.5 },
  premiumCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderRadius: 16, marginBottom: 24, borderWidth: 1, borderColor: 'rgba(139, 92, 246, 0.2)', backgroundImage: 'linear-gradient(to right, #2A1B41, #222226)' },
  premiumLeft: { flexDirection: 'row', alignItems: 'center' },
  premiumTextContainer: { marginLeft: 12 },
  premiumTitle: { color: COLORS.text, fontSize: 16, fontWeight: '600' },
  premiumSubtitle: { color: COLORS.textSecondary, fontSize: 13, marginTop: 2 },
  sectionTitle: { color: COLORS.textSecondary, fontSize: 13, marginBottom: 8, marginLeft: 4, marginTop: 8 },
  section: { backgroundColor: COLORS.card, borderRadius: 16, marginBottom: 20, overflow: 'hidden' },
  footerText: { color: COLORS.textSecondary, fontSize: 12, textAlign: 'center', marginTop: 10 },
});
