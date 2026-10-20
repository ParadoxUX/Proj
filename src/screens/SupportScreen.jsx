import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme';
import { ListItem } from '../components/ListItem.jsx';
import { BackIcon, OrbitLogo, ChatIcon } from '../components/Icons.jsx';

export default function SupportScreen({ onBack = () => {} }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}><BackIcon /><Text style={styles.backText}>Назад</Text></TouchableOpacity>
        <View style={styles.logoContainer}><OrbitLogo /><Text style={styles.logoText}>ORBIT</Text></View>
      </View>
      
      <Text style={styles.pageTitle}>Поддержка</Text>
      
      <TouchableOpacity style={styles.contactButton}>
        <ChatIcon color={COLORS.text} />
        <Text style={styles.contactText}>Написать в поддержку</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Частые вопросы</Text>
      <View style={styles.section}>
        <ListItem title="Как восстановить пароль?" showChevron={false} />
        <ListItem title="Почему не приходят уведомления?" showChevron={false} />
        <ListItem title="Как удалить аккаунт?" showChevron={false} isLast />
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
  contactButton: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 24, gap: 10 },
  contactText: { color: COLORS.text, fontSize: 16, fontWeight: '600' },
  sectionTitle: { color: COLORS.textSecondary, fontSize: 13, marginBottom: 8, marginLeft: 4, marginTop: 8 },
  section: { backgroundColor: COLORS.card, borderRadius: 16, marginBottom: 20, overflow: 'hidden' },
});
