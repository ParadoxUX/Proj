import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme';
import { ChevronRight } from './Icons.jsx';

export const ListItem = ({ icon, title, value, onPress, isLast, showChevron = true, color = COLORS.text }) => {
  return (
    <TouchableOpacity style={[styles.container, isLast && styles.lastItem]} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.left}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={[styles.title, { color }]}>{title}</Text>
      </View>
      <View style={styles.right}>
        {value && <Text style={styles.value}>{value}</Text>}
        {showChevron && <ChevronRight />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  lastItem: { borderBottomWidth: 0 },
  left: { flexDirection: 'row', alignItems: 'center' },
  iconContainer: { marginRight: 14, width: 24, alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '400' },
  right: { flexDirection: 'row', alignItems: 'center' },
  value: { color: COLORS.textSecondary, fontSize: 16, marginRight: 8 },
});
