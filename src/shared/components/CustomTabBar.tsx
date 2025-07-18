import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/colors';
import {
  DashboardIcon,
  WatchIcon,
  MediaLibraryIcon,
  MoreIcon,
} from '../../assets/icons/components';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const getIcon = (routeName: string, isFocused: boolean) => {
    const iconColor = isFocused ? COLORS.TEXT_PRIMARY : COLORS.TEXT_SECONDARY;
    const iconSize =24
    switch (routeName) {
      case 'Dashboard':
        return <DashboardIcon width={iconSize} height={iconSize} fill={iconColor} />;
      case 'Watch':
        return <WatchIcon width={iconSize} height={iconSize} fill={iconColor} />;
      case 'MediaLibrary':
        return <MediaLibraryIcon width={iconSize} height={iconSize} fill={iconColor} />;
      case 'More':
        return <MoreIcon width={iconSize} height={iconSize} fill={iconColor} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = typeof options.tabBarLabel === 'string'
          ? options.tabBarLabel
          : typeof options.title === 'string'
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              {getIcon(route.name, isFocused)}
            </View>
            <Text style={[
              styles.label,
              isFocused ? styles.labelActive : styles.labelInactive
            ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.PRIMARY,
    height: 80,
    paddingBottom: 20,
    // visually extend the background behind the rounded corners
    marginTop: -20,
    paddingTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  labelActive: {
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Poppins-Bold',
  },
  labelInactive: {
    color: COLORS.TEXT_SECONDARY,
  },
});

export default CustomTabBar; 